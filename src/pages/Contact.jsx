import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { GoldDivider } from '../components/ui'

import contactHeroBg from '../assets/contact/contact_banner.png'
import featIcon1 from '../assets/contact/personalised.png'
import featIcon2 from '../assets/contact/bespoke_solution.png'
import featIcon3 from '../assets/contact/premium_Quality.png'
import featIcon4 from '../assets/contact/end-to-end.png'
import buildingIcon from '../assets/contact/building.png'

// ─── HERO ─────────────────────────────────────────────────────────────────────
function ContactHero() {
  return (
    <section className="relative min-h-[45vh] bg-[#050505] overflow-hidden border-b border-[#C9A15D]/50">
      <div className="absolute inset-0 z-0">
        <img
          src={contactHeroBg}
          alt="Contact hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#050505]/40" />
      </div>

      <div className="relative section-container pt-28 pb-12 min-h-[45vh] flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl flex flex-col items-center">
          <p className="text-[#C9A15D] text-[16px] font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3 justify-center">
            CONTACT US
          </p>
          <h1 
            className="font-heading font-medium text-white leading-[1.2] tracking-wide"
            style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}
          >
            Let's Create Extraordinary<br />
            <span className="text-[#C9A15D]">Spaces Together</span>
          </h1>
          <div className="flex items-center gap-3 w-64 my-8">
            <div className="h-px bg-[#C9A15D]/60 flex-1" />
            <div className="w-2 h-2 bg-[#C9A15D] rotate-45 flex-shrink-0" />
            <div className="h-px bg-[#C9A15D]/60 flex-1" />
          </div>
          <p className="font-sans text-[16px] text-[#e5e5e5] leading-relaxed max-w-lg">
            We'd love to hear from you. Reach out to our team<br className="hidden sm:block" />
            for bespoke interior solutions, product inquiries,<br className="hidden sm:block" />
            or any assistance you need.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT FORM + INFO ──────────────────────────────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('http://localhost:4005/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' })
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
      } else {
        const errorData = await response.json()
        setStatus({ type: 'error', message: errorData.message || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({ type: 'error', message: 'Network error. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-[#0a0a0a] py-12 lg:py-20 border-b border-[#C9A15D]/50 relative">
      <div className="section-container relative">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
          
          {/* Vertical Divider for Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center">
            <div className="w-px h-full bg-[#C9A15D]/30" />
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#C9A15D] rotate-45" />
          </div>

          {/* Left Column: Get In Touch */}
          <div className="lg:pr-12">
            <p className="eyebrow-label mb-10 flex items-center gap-4 text-[#C9A15D]">
              GET IN TOUCH <span className="inline-block w-8 h-px bg-[#C9A15D]" />
            </p>

            <div className="flex flex-col gap-8">
              {/* Phone */}
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 border border-[#C9A15D]/40 flex items-center justify-center text-[#C9A15D] flex-shrink-0 transition-colors duration-300 group-hover:bg-[#C9A15D] group-hover:text-black">
                  <Phone size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-125" />
                </div>
                <div className="pt-1">
                  <p className="font-sans text-[16px] font-semibold text-[#e8e6e3] tracking-[0.15em] uppercase mb-1">PHONE</p>
                  <p className="font-sans text-[16px] text-[#b3b3b3]">8826607109</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 border border-[#C9A15D]/40 flex items-center justify-center text-[#C9A15D] flex-shrink-0 transition-colors duration-300 group-hover:bg-[#C9A15D] group-hover:text-black">
                  <Mail size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-125" />
                </div>
                <div className="pt-1">
                  <p className="font-sans text-[16px] font-semibold text-[#e8e6e3] tracking-[0.15em] uppercase mb-1">EMAIL</p>
                  <p className="font-sans text-[16px] text-[#b3b3b3]">infinityluxespaces@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 border border-[#C9A15D]/40 flex items-center justify-center text-[#C9A15D] flex-shrink-0 transition-colors duration-300 group-hover:bg-[#C9A15D] group-hover:text-black">
                  <MapPin size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-125" />
                </div>
                <div className="pt-1">
                  <p className="font-sans text-[16px] font-semibold text-[#e8e6e3] tracking-[0.15em] uppercase mb-1">ADDRESS</p>
                  <p className="font-sans text-[16px] text-[#b3b3b3] leading-relaxed">
                    C-97, Basement, Sector-33, Noida,<br />
                    Distt. Gautam Budh Nagar, Pincode – 201301 (U.P.)
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 border border-[#C9A15D]/40 flex items-center justify-center text-[#C9A15D] flex-shrink-0 transition-colors duration-300 group-hover:bg-[#C9A15D] group-hover:text-black">
                  <Clock size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-125" />
                </div>
                <div className="pt-1">
                  <p className="font-sans text-[16px] font-semibold text-[#C9A15D] tracking-[0.15em] uppercase mb-1">WORKING HOURS</p>
                  <p className="font-sans text-[16px] text-[#e8e6e3] mb-1">Mon – Sat : 10:00 AM – 7:00 PM</p>
                  <p className="font-sans text-[16px] text-[#e8e6e3]">Sunday : Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:pl-12">
            <p className="eyebrow-label mb-10 flex items-center gap-4 text-[#C9A15D]">
              SEND US A MESSAGE <span className="inline-block w-8 h-px bg-[#C9A15D]" />
            </p>
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
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FEATURES BAR ─────────────────────────────────────────────────────────────
const contactFeatures = [
  { icon: featIcon1, line1: 'Personalised', line2: 'Consultation' },
  { icon: featIcon2, line1: 'Bespoke', line2: 'Solutions' },
  { icon: featIcon3, line1: 'Premium Quality', line2: 'Assurance' },
  { icon: featIcon4, line1: 'End-to-End', line2: 'Support' },
]

function ContactFeatures() {
  return (
    <section className="bg-[#050505] border-b border-[#C9A15D]/50">
      <div className="section-container py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {contactFeatures.map((f, i) => (
            <div key={i} className={`flex flex-col items-center text-center group cursor-pointer ${i < 3 ? 'lg:border-r border-[#C9A15D]/20' : ''}`}>
              <div className="h-auto flex items-center justify-center -mb-2 z-10">
                <img src={f.icon} alt={f.line1} className="w-[110px] h-auto object-contain transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="font-sans text-[16px] text-[#e8e6e3] leading-[1.6]">
                {f.line1}<br />{f.line2}
              </p>
              <div className="w-6 h-px bg-[#C9A15D] mt-4 opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── MAP + STUDIO ─────────────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="bg-[#0a0a0a] py-0 border-b border-[#C9A15D]/50">
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[350px]">
        {/* Map embed */}
        <div className="lg:col-span-2 relative min-h-[280px] bg-[#050505] overflow-hidden">
          <iframe
            title="Infinity Luxe Spaces Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923191902!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ filter: 'invert(90%) hue-rotate(180deg)', minHeight: '280px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Visit studio */}
        <div className="bg-[#0a0a0a] flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-16 gap-6">
          <div className="flex items-center gap-4 sm:gap-6 group cursor-pointer">
            <div className="w-[45px] h-[45px] relative flex-shrink-0 flex items-center justify-center">
              <img src={buildingIcon} alt="Studio" className="absolute w-[135px] max-w-none object-contain transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
              <p className="font-sans text-[16px] font-semibold text-[#C9A15D] tracking-[0.15em] uppercase mb-2">VISIT OUR STUDIO</p>
              <div className="w-8 h-px bg-[#C9A15D] opacity-70" />
            </div>
          </div>
          
          <p className="font-sans text-[16px] text-[#e8e6e3] leading-[1.8] mt-2">
            Experience our exclusive collection<br className="hidden sm:block" />
            and materials in person.
          </p>
          
          <Link to="/contact" className="mt-4 border border-[#C9A15D]/40 text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#050505] text-[11.5px] font-semibold tracking-[0.15em] uppercase px-8 py-3.5 w-fit inline-flex items-center gap-3 transition-colors">
            SCHEDULE A VISIT <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactFeatures />
      <MapSection />
    </main>
  )
}
