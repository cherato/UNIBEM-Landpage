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
    'w-full rounded-[10px] border border-ink-line bg-white px-4 py-3 text-sm text-ink-soft transition placeholder:text-ink-faint focus:border-uni-yellow-deep focus:outline-none focus:ring-2 focus:ring-uni-yellow'

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
        <div className="flex h-16 w-16 items-center justify-center rounded-brick border-b-4 border-uni-green-dark bg-uni-green text-ink">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-ink">
          Mensagem enviada!
        </h3>
        <p className="max-w-sm text-ink-muted">
          Obrigado pelo contato. Responderemos em breve.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm font-bold text-uni-blue hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {status === 'error' && (
        <div className="flex items-center gap-3 rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          Ocorreu um erro ao enviar. Tente novamente ou entre em contato por telefone.
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-ink">
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
          <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-ink">
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
        <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-ink">
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
        <label htmlFor="subject" className="mb-1.5 block text-sm font-bold text-ink">
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
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-ink">
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
        className="inline-flex items-center justify-center gap-2 rounded-brick border-b-4 border-uni-blue-dark bg-uni-blue px-8 py-4 font-heading font-semibold text-white transition-colors duration-200 hover:bg-uni-blue-dark focus:outline-none focus:ring-2 focus:ring-uni-blue focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Enviar Mensagem
          </>
        )}
      </button>
    </form>
  )
}
