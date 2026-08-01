import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Armchair } from 'lucide-react'
import { GoldDivider, SectionHeader } from '../components/ui'

import heroBgImage from '../assets/client/client_banner.png'
import statIcon1 from '../assets/client/design 33.png'
import statIcon2 from '../assets/client/residential.png'
import statIcon3 from '../assets/client/Long-Term.png'
import statIcon4 from '../assets/client/Client-Centric.png'

import clientLogo1 from '../assets/home/prestigious _clients_aarone.png'
import clientLogo2 from '../assets/home/prestigious _clients_select_infra.png'
import clientLogo3 from '../assets/home/prestigious _clients_eros_group.png'
import clientLogo4 from '../assets/home/prestigious _clients_udman_hotel.png'
import clientLogo5 from '../assets/home/prestigious _clients_tivoli.png'
import clientLogo6 from '../assets/home/prestigious _clients_igi_airport.png'
import testimonialsBg from '../assets/client/testimonials.png'
import letsCreateBg from "../assets/client/let's_create.png"

// ─── HERO ─────────────────────────────────────────────────────────────────────
function ClientsHero() {
  return (
    <section className="relative min-h-[70vh] bg-[#050505] overflow-hidden border-b border-[#C9A15D]/50">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Clients hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#050505]/40" />
      </div>
      <div className="relative section-container pt-32 pb-12 lg:pt-40 lg:pb-20 min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className="eyebrow-label mb-4 flex items-center gap-2">
            Our Clients <span className="inline-block w-6 h-px bg-[#C9A15D]" />
          </p>
          <h1 
            className="font-heading font-semibold text-text-heading leading-tight"
            style={{ fontSize: 'clamp(36px, 8vw, 56px)' }}
          >
            Trusted by Leaders.<br />
            <span className="text-[#C9A15D]">Inspired by Excellence.</span>
          </h1>
          <div className="flex items-center gap-2 mt-8 mb-8 w-full max-w-[320px] lg:max-w-[680px]">
            <span className="h-px bg-[#C9A15D] flex-grow" />
            <span className="w-2 h-2 bg-[#C9A15D] rotate-45 flex-shrink-0" />
            <span className="h-px bg-[#C9A15D] flex-grow" />
          </div>
          <p className="font-sans text-sm text-text-paragraph leading-relaxed max-w-md">
            We are proud to collaborate with visionary brands and prestigious names across industries. Together, we create extraordinary spaces that leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── STATS BAR ────────────────────────────────────────────────────────────────
const clientStats = [
  { icon: statIcon1, value: '11+', label: 'Prestigious Clients\nAcross Sectors' },
  { icon: statIcon2, label: 'Residential, Hospitality &\nCommercial Projects', value: '' },
  { icon: statIcon3, label: 'Long-Term Partnerships Built\non Trust & Quality', value: '' },
  { icon: statIcon4, label: 'Client-Centric Approach\n& Timely Delivery', value: '' },
]

function ClientsStatsBar() {
  return (
    <section className="bg-[#0a0a0a] border-b border-[#C9A15D]/50">
      <div className="section-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
          {clientStats.map((s, i) => (
            <div key={i} className={`flex items-center gap-5 px-4 lg:px-6 group cursor-pointer ${i < 3 ? 'lg:border-r border-[#C9A15D]/20' : ''}`}>
              <div className="relative w-[42px] h-[42px] flex-shrink-0 flex items-center justify-center">
                <img src={s.icon} alt="Stat Icon" className="absolute w-[126px] max-w-none object-contain transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="relative z-10">
                {s.value && <p className="font-sans text-[20px] font-medium text-[#e8e6e3] leading-none mb-1">{s.value}</p>}
                <p className="font-sans text-[12px] text-[#b3b3b3] leading-[1.4] whitespace-pre-line">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CLIENT LOGOS ─────────────────────────────────────────────────────────────
const clientsData = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
]

function ClientLogos() {
  return (
    <section className="bg-[#050505] py-12 lg:py-20 border-b border-[#C9A15D]/50">
      <div className="section-container">
        <div className="text-center mb-12 flex flex-col items-center">
          <p className="eyebrow-label mb-4 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-[#C9A15D]" /> OUR PRESTIGIOUS CLIENTS <span className="inline-block w-6 h-px bg-[#C9A15D]" />
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#f0e8d4] mb-6">
            A Legacy of Trust and Collaboration
          </h2>
          <div className="flex items-center justify-center gap-2 w-full max-w-[240px] lg:max-w-[340px]">
            <span className="h-px bg-[#C9A15D] flex-grow" />
            <span className="w-1.5 h-1.5 bg-[#C9A15D] rotate-45 flex-shrink-0" />
            <span className="h-px bg-[#C9A15D] flex-grow" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-12">
          {clientsData.map((logo, i) => (
            <div
              key={i}
              className="relative border border-[#C9A15D]/20 py-5 px-4 flex flex-col items-center justify-center hover:border-[#C9A15D]/50 hover:bg-[#0a0a0a] transition-all duration-300 min-h-[110px] overflow-hidden group cursor-pointer"
            >
              <img src={logo} alt="Client Logo" className="absolute w-[180px] md:w-[260px] max-w-none object-contain transition-transform duration-300 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      'Infinity Luxe Spaces has been an invaluable partner in transforming our vision into beautifully crafted spaces. Their attention to detail, quality of materials, and commitment to timelines make them our go-to choice for every project.',
    author: 'A Satisfied Partner',
  },
  {
    quote:
      'The team at Infinity Luxe Spaces delivered beyond our expectations. Their ability to understand our requirements and translate them into timeless interiors is truly exceptional.',
    author: 'Hospitality Industry Leader',
  },
  {
    quote:
      'Working with Infinity Luxe Spaces was a seamless experience. From design consultation to final handover, every step was handled with professionalism and excellence.',
    author: 'Corporate Client',
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const displayTestimonials = [...testimonials, testimonials[0]]

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setCurrent((c) => c + 1)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleTransitionEnd = () => {
    if (current >= testimonials.length) {
      setIsTransitioning(false)
      setCurrent(0)
      setTimeout(() => setIsTransitioning(true), 50)
    }
  }

  const prev = () => {
    setIsTransitioning(true)
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  }
  const next = () => {
    setIsTransitioning(true)
    setCurrent((c) => c + 1)
  }

  return (
    <section className="relative min-h-[500px] border-b border-[#C9A15D]/50 flex items-center overflow-hidden bg-[#050505]">
      {/* Extreme Left & Right Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#C9A15D] flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#050505] transition-all z-20"
      >
        <ChevronLeft size={20} className="transition-transform duration-300 hover:-translate-x-1" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#C9A15D] flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#050505] transition-all z-20"
      >
        <ChevronRight size={20} className="transition-transform duration-300 hover:translate-x-1" />
      </button>

      {/* Main Content Area */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left Column Image with Fade */}
          <div className="relative hidden lg:block w-full h-full">
            <img
              src={testimonialsBg}
              alt="Testimonial Setting"
              className="w-full h-full object-cover"
            />
            {/* The blur/fade where the image meets the background color */}
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#050505] to-transparent" />
          </div>

          {/* Right Column Scrolling Text */}
          <div className="flex flex-col justify-center py-16 px-6 lg:py-24 lg:px-16 overflow-hidden">
            <div className="w-full overflow-hidden">
              <div 
                className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${current * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {displayTestimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 flex flex-col gap-2">
                    <div className="text-[#C9A15D] text-5xl md:text-6xl font-serif leading-none h-12">“</div>
                    <blockquote className="font-heading text-[16px] md:text-[17px] text-[#e8e6e3] leading-[1.8] lg:pr-12 min-h-[120px]">
                      {t.quote}
                    </blockquote>
                    <div className="flex items-center gap-2 mt-4 mb-2">
                      <span className="font-sans text-[14px] text-[#C9A15D] font-medium">—</span>
                      <p className="font-sans text-[14px] text-[#C9A15D] font-medium">
                        {t.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots aligned left beneath text */}
            <div className="flex gap-3 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsTransitioning(true)
                    setCurrent(i)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === (current % testimonials.length) ? 'bg-[#C9A15D]' : 'bg-[#333333] hover:bg-[#C9A15D]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CLIENTS CTA ─────────────────────────────────────────────────────────────
function ClientsCta() {
  return (
    <section className="relative bg-[#050505] min-h-[300px] flex items-center overflow-hidden border-t border-[#C9A15D]/50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={letsCreateBg}
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full section-container py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side (Icon + Text) */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 lg:gap-8">
            {/* Gold Armchair Circle */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-[#C9A15D] flex items-center justify-center text-[#C9A15D] flex-shrink-0 cursor-pointer group">
              <Armchair size={40} strokeWidth={1} className="lg:w-11 lg:h-11 transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <h2 className="font-heading text-3xl lg:text-5xl text-[#e8e6e3] leading-tight">
                Let's Create
              </h2>
              <h2 className="font-heading text-3xl lg:text-5xl text-[#C9A15D] leading-tight mb-3">
                Extraordinary Spaces Together
              </h2>
              <p className="font-sans text-[13px] lg:text-[15px] text-[#b3b3b3] leading-relaxed">
                Join hands with Infinity Luxe Spaces and experience<br className="hidden sm:block" />
                world-class craftsmanship, elegance, and reliability.
              </p>
            </div>
          </div>

          {/* Right Side (Button) */}
          <div className="flex-shrink-0 lg:pr-24">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 border border-[#C9A15D] text-[#C9A15D] px-8 py-3 text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#C9A15D] hover:text-[#050505] transition-all group"
            >
              START YOUR PROJECT <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CLIENTS PAGE ─────────────────────────────────────────────────────────────
export default function Clients() {
  return (
    <main>
      <ClientsHero />
      <ClientsStatsBar />
      <ClientLogos />
      <Testimonials />
      <ClientsCta />
    </main>
  )
}
