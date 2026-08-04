import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useModal } from '../context/ModalContext'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openContactModal } = useModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-luxury-black/80 backdrop-blur-sm border-b border-gold-border/20' : 'bg-transparent'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col items-center">
              <img src="/logo_infinity.svg" alt="Infinity Luxe Spaces" className="h-40 w-auto object-contain -my-12 relative z-10 transition-transform duration-300 group-hover:scale-105" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-sans text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200 relative pb-1 ${isActive ? 'text-gold-primary border-b-2 border-gold-primary' : 'text-text-secondary hover:text-gold-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={openContactModal}
            className="hidden lg:inline-flex items-center gap-2 border border-gold-primary text-gold-primary font-sans font-semibold text-xs tracking-widest uppercase px-6 py-2 transition-all duration-300 hover:bg-gold-primary hover:text-luxury-black"
          >
            LET'S TALK
          </button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-gold-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1" /> : <Menu size={22} className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-charcoal-black border-t border-gold-border/20 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `nav-link pl-2 ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openContactModal();
              }}
              className="btn-outline w-fit mt-2"
            >
              Let's Talk <ArrowRight size={12} className="transition-transform duration-300 hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </header>
  )
}