import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight, Armchair } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact Us', to: '/contact' },
]

const products = [
  { label: 'Curtains & Drapes', to: '/products/curtains-drapes' },
  { label: 'Blinds', to: '/products/premium-blinds' },
  { label: 'Wallpapers', to: '/products/exclusive-wallpapers' },
  { label: 'Wooden Flooring', to: '/products/wooden-flooring' },
  { label: 'Carpets & Rugs', to: '/products/carpets-rugs' },
  { label: 'Upholstery', to: '/products/upholstery-leatherettes' },
  { label: 'Custom Furniture', to: '/products/customised-furniture' },
  { label: 'Kitchens', to: '/products/modular-kitchens' },
  { label: 'Wardrobes', to: '/products/wardrobes' },
  { label: 'Mattresses', to: '/products/mattresses-sleep' },
]

// Inline SVG social icons (lucide-react doesn't ship brand icons)
const SocialIcon = ({ type }) => {
  const icons = {
    instagram: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="3"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    linkedin: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    facebook: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    pinterest: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  }
  return icons[type] || null
}

const socialLinks = [
  { type: 'instagram', href: '#', label: 'Instagram' },
  { type: 'linkedin', href: '#', label: 'LinkedIn' },
  { type: 'facebook', href: '#', label: 'Facebook' },
  { type: 'pinterest', href: '#', label: 'Pinterest' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#C9A15D]/20">
      <div className="section-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:pr-8 lg:border-r border-[#C9A15D]/20">
            <Link to="/" className="inline-block w-fit group">
              <img src="/logo_infinity.svg" alt="Infinity Luxe Spaces" className="h-44 w-auto object-contain -my-10 relative z-10 transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="font-sans text-[15px] text-[#B6B6B6] leading-relaxed">
              Where craft meets comfort,<br />
              infinitely. Creating timeless spaces<br />
              with passion, precision and purpose.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ type, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-[#C9A15D]/30 flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-black transition-all duration-300"
                >
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:px-8 mt-10 lg:mt-0 lg:border-r border-[#C9A15D]/20">
            <h4 className="text-[#C9A15D] text-[13px] tracking-wider uppercase mb-4 font-semibold">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-[14px] text-white/80 hover:text-[#C9A15D] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:px-8 mt-10 lg:mt-0 lg:border-r border-[#C9A15D]/20">
            <h4 className="text-[#C9A15D] text-[13px] tracking-wider uppercase mb-4 font-semibold">Our Services</h4>
            <ul className="flex flex-col gap-[6px]">
              {products.map((product) => (
                <li key={product.label}>
                  <Link
                    to={product.to}
                    className="font-sans text-[14px] text-white/80 hover:text-[#C9A15D] transition-colors duration-200"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:pl-8 mt-10 lg:mt-0 flex flex-col justify-between">
            <div>
              <h4 className="text-[#C9A15D] text-[13px] tracking-wider uppercase mb-4 font-semibold">Contact Us</h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-4 group cursor-pointer">
                  <Phone size={14} className="text-[#C9A15D] flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                  <span className="font-sans text-[14px] text-white/80 group-hover:text-[#C9A15D] transition-colors duration-300">8826607109</span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                  <Mail size={14} className="text-[#C9A15D] flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                  <span className="font-sans text-[14px] text-white/80 group-hover:text-[#C9A15D] transition-colors duration-300">infinityluxespaces@gmail.com</span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                  <MapPin size={14} className="text-[#C9A15D] flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                  <span className="font-sans text-[14px] text-white/80 group-hover:text-[#C9A15D] transition-colors duration-300 leading-relaxed">
                    C-97, Basement,
                    Sector-33, Noida,
                    Distt. Gautam Budh Nagar,<br />
                    Pincode – 201301 (U.P.)
                  </span>
                </li>
              </ul>
            </div>

            <Link to="/contact" className="mt-8 border border-[#C9A15D]/40 p-4 flex items-center justify-between gap-4 hover:border-[#C9A15D] transition-colors rounded-sm group">
              <div className="flex items-center gap-4">
                <Armchair size={24} className="text-[#C9A15D] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" strokeWidth={1} />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-[#B6B6B6] tracking-wider uppercase group-hover:text-white transition-colors">Let's Create</span>
                  <span className="text-[10px] text-[#C9A15D] font-semibold tracking-wider uppercase mt-0.5">Something Exceptional</span>
                </div>
              </div>
              <ArrowRight size={14} className="text-[#C9A15D] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-border/10">
        <div className="section-container py-4 flex flex-col items-center justify-center gap-3">
          <p className="font-sans text-[16px] text-text-paragraph text-center">
            © 2026 Infinity Luxe Spaces. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
