import { useState } from "react";

  
// ==========================================
// 1. CONTACT FORM COMPONENT
// ==========================================
export function ContactForm({
  entity = {} as any,
  contactField = 'contactInfo',
  apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/contactMessages`,
  title = 'Contact Agent',
}) {
  const [formData, setFormData] = useState({
    name: entity?.[contactField]?.name || '',
    email: entity?.[contactField]?.email || '',
    phone: entity?.[contactField]?.phone || '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState({ text: '', isError: false })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage({ text: '', isError: false })

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        propertyId: entity?.id || null,
        propertyType: entity?.type || 'N/A',
        slug: entity?.slug || 'N/A',
        title: entity?.title || 'N/A',
        societyName: entity?.societyName || 'N/A',
        builderName: entity?.builderName || 'N/A',
        builderContactEmail: entity?.contactEmail || 'N/A',
        publishedAt: entity?.publishedAt || null,
      }

      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to send message')

      setStatusMessage({ text: 'Message sent successfully!', isError: false })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatusMessage({ text: 'Something went wrong. Please try again!', isError: true })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full p-6 sm:p-8 rounded-2xl bg-white space-y-5">
      <h2 className="text-2xl font-bold text-[#a34493] border-b-2 border-[#a34493] pb-2 w-fit">
        {title}
      </h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Your Name"
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a34493] transition text-sm"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Your Email"
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a34493] transition text-sm"
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        placeholder="Your Phone"
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a34493] transition text-sm"
      />

      <textarea
        name="message"
        value={formData.message}
        placeholder="Your Message"
        onChange={handleChange}
        rows={4}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a34493] transition text-sm"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[#a34493] text-white font-semibold rounded-lg hover:bg-[#8b3878] transition disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {statusMessage.text && (
        <p
          className={`mt-2 text-center text-sm font-medium ${
            statusMessage.isError ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {statusMessage.text}
        </p>
      )}
    </form>
  )
}