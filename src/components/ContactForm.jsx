import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4005';
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus({ type: 'error', message: errorData.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border border-[#C9A15D]/40 text-[#e8e6e3] text-sm px-4 py-3 placeholder:text-[#888] focus:outline-none focus:border-[#C9A15D] transition-colors"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-transparent border border-[#C9A15D]/40 text-[#e8e6e3] text-sm px-4 py-3 placeholder:text-[#888] focus:outline-none focus:border-[#C9A15D] transition-colors"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full bg-transparent border border-[#C9A15D]/40 text-[#e8e6e3] text-sm px-4 py-3 placeholder:text-[#888] focus:outline-none focus:border-[#C9A15D] transition-colors"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full bg-transparent border border-[#C9A15D]/40 text-[#e8e6e3] text-sm px-4 py-3 placeholder:text-[#888] focus:outline-none focus:border-[#C9A15D] transition-colors"
      />
      <textarea
        name="message"
        placeholder="How can we help you?"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full bg-transparent border border-[#C9A15D]/40 text-[#e8e6e3] text-sm px-4 py-3 placeholder:text-[#888] focus:outline-none focus:border-[#C9A15D] transition-colors resize-none"
      />
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-gradient-to-r from-[#D7AE5D] to-[#BE9648] hover:opacity-90 text-[#050505] text-xs font-semibold tracking-[0.1em] uppercase px-8 py-3 w-fit inline-flex items-center gap-2 transition-all mt-2 disabled:opacity-50"
      >
        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'} <ArrowRight size={14} strokeWidth={2} />
      </button>
      
      {status.message && (
        <div className={`mt-4 text-sm px-4 py-3 border ${status.type === 'success' ? 'bg-[#C9A15D]/10 border-[#C9A15D] text-[#C9A15D]' : 'bg-red-900/20 border-red-500/50 text-red-400'}`}>
          {status.message}
        </div>
      )}
    </form>
  );
}
