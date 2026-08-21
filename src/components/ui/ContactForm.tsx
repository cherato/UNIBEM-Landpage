import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import type { ContactFormData, FormStatus } from '@/types'

const INITIAL: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const SUBJECTS = [
  'Voluntariado',
  'Doações',
  'Parcerias',
  'Informações sobre atendimento',
  'Imprensa',
  'Outros',
]

interface ContactFormProps {
  web3formsKey?: string
}

export default function ContactForm({ web3formsKey }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormData>(INITIAL)
  const [status, setStatus] = useState<FormStatus>('idle')

  const inputBase =
    'w-full border border-gray-200 rounded-xl px-4 py-3 text-brand-gray text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition placeholder:text-gray-400 bg-white'

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const key = web3formsKey ?? import.meta.env.VITE_WEB3FORMS_KEY ?? 'YOUR_KEY_HERE'
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: key, ...form }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-heading font-bold text-xl text-brand-brown">
          Mensagem enviada!
        </h3>
        <p className="text-brand-gray max-w-sm">
          Obrigado pelo contato. Responderemos em breve.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-brand-orange text-sm font-medium hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          Ocorreu um erro ao enviar. Tente novamente ou entre em contato por telefone.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-brown mb-1.5">
            Nome completo *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-brown mb-1.5">
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(42) 9 9999-9999"
            value={form.phone}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-brown mb-1.5">
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          value={form.email}
          onChange={handleChange}
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-brand-brown mb-1.5">
          Assunto *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className={inputBase}
        >
          <option value="" disabled>
            Selecione um assunto
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-brown mb-1.5">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Escreva sua mensagem..."
          value={form.message}
          onChange={handleChange}
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-heading font-semibold px-8 py-4 rounded-full hover:bg-brand-orange-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar Mensagem
          </>
        )}
      </button>
    </form>
  )
}
