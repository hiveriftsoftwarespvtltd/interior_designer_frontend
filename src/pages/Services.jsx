import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { GoldDivider, SectionHeader } from '../components/ui'
import serviceBanner from '../assets/service/service_banner.png'

import e2e1 from '../assets/service/End_to_End_Furnishing1.png'
import e2e2 from '../assets/service/End_to_End_Furnishing2.png'
import e2e3 from '../assets/service/End_to_End_Furnishing3.png'
import e2e4 from '../assets/service/End_to_End_Furnishing4.png'
import e2e5 from '../assets/service/End_to_End_Furnishing5.png'
import e2e6 from '../assets/service/End_to_End_Furnishing6.png'
import e2e7 from '../assets/service/End_to_End_Furnishing7.png'
import e2e8 from '../assets/service/End_to_End_Furnishing8.png'

import prodIcon1 from '../assets/product/curtains&drapes.png'
import prodIcon2 from '../assets/product/Blinds.png'
import prodIcon3 from '../assets/product/Wallpapers.png'
import prodIcon4 from '../assets/product/wooden_flooring.png'
import prodIcon5 from '../assets/product/crapets.png'
import prodIcon6 from '../assets/product/upholstery.png'
import prodIcon7 from '../assets/product/customised_furniture.png'
import prodIcon8 from '../assets/product/mattresses.png'

import turnkeyImg from '../assets/service/Turnkey_Interiors_solution.png'
import turnkeyIcon1 from '../assets/service/Turnkey_Interiors_design.png'
import turnkeyIcon2 from '../assets/service/Turnkey_Interiors_2.png'
import turnkeyIcon3 from '../assets/service/Turnkey_Interiors_3.png'
import turnkeyIcon4 from '../assets/service/Turnkey_Interiors_4.png'

// ─── HERO ─────────────────────────────────────────────────────────────────────
function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] bg-[#050505] overflow-hidden border-b border-[#C9A15D]/50">
      <div className="absolute inset-0">
        <img
          src={serviceBanner}
          alt="Services hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="relative section-container pt-32 pb-16 min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-xl">
          <p className="text-[#C9A15D] text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            OUR SERVICES
          </p>
          <h1
            className="font-heading font-medium text-white leading-[1.1] tracking-wide"
            style={{ fontSize: 'clamp(36px, 8vw, 68px)' }}
          >
            Crafted to<br />Perfection.<br />
            <span className="text-[#C9A15D]">Designed for You.</span>
          </h1>

          <div className="flex items-center gap-3 w-64 my-10">
            <div className="h-px bg-[#C9A15D]/60 flex-1" />
            <div className="w-2 h-2 bg-[#C9A15D] rotate-45 flex-shrink-0" />
            <div className="h-px bg-[#C9A15D]/60 flex-1" />
          </div>

          <p className="font-sans text-[13px] text-[#e5e5e5] leading-relaxed max-w-lg">
            At Infinity Luxe Spaces, we offer a curated range of premium furnishing and interior solutions that combine timeless craftsmanship, global materials, and personalized design to elevate every space.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES GRID ────────────────────────────────────────────────────────────
const services = [
  {
    num: '01',
    title: 'Customised\nCurtains & Drapes',
    desc: 'Tailored fabrics and premium drapery solutions to enhance light, privacy, and aesthetics.',
    img: e2e1,
    icon: prodIcon1,
  },
  {
    num: '02',
    title: 'Premium Blinds',
    desc: 'A wide range of blinds including Roller, Zebra, Roman, Venetian & Honeycomb for every need.',
    img: e2e2,
    icon: prodIcon2,
  },
  {
    num: '03',
    title: 'Exclusive\nWallpapers',
    desc: 'International collections and custom-made wallpapers to add texture and personality.',
    img: e2e3,
    icon: prodIcon3,
  },
  {
    num: '04',
    title: 'Wooden Flooring',
    desc: 'Elegant wooden flooring options that add warmth, durability and timeless beauty.',
    img: e2e4,
    icon: prodIcon4,
  },
  {
    num: '05',
    title: 'Carpets & Rugs',
    desc: 'Luxury carpets, area rugs & carpet tiles to bring comfort, style and sophistication.',
    img: e2e5,
    icon: prodIcon5,
  },
  {
    num: '06',
    title: 'Upholstery &\nLeatherettes',
    desc: 'Premium fabrics and leatherette finishes for furniture, walls, and bespoke applications.',
    img: e2e6,
    icon: prodIcon6,
  },
  {
    num: '07',
    title: 'Customised\nFurniture',
    desc: 'Made-to-order furniture designed around your space, style and functionality.',
    img: e2e7,
    icon: prodIcon7,
  },
  {
    num: '08',
    title: 'Mattresses &\nSleep Solutions',
    desc: 'High-quality mattresses and sleep solutions for unmatched comfort and support.',
    img: e2e8,
    icon: prodIcon8,
  },
]

function ServicesGrid() {
  return (
    <section className="bg-[#050505] py-24">
      <div className="section-container px-4 lg:px-8">

        {/* Header matching image */}
        <div className="text-center mb-14 flex flex-col items-center">
          <p className="text-[#C9A15D] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            OUR SERVICES
          </p>
          <h2 className="font-heading text-3xl lg:text-[34px] text-white font-medium mb-6">
            End-to-End Furnishing & Interior Solutions
          </h2>

          <div className="flex items-center gap-3 w-[90%] max-w-[650px]">
            <div className="h-px bg-[#C9A15D]/60 flex-1" />
            <div className="w-2 h-2 bg-[#C9A15D] rotate-45 flex-shrink-0" />
            <div className="h-px bg-[#C9A15D]/60 flex-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="border border-[#C9A15D]/40 bg-[#0a0a0a] flex flex-col relative group transition-colors duration-300 hover:border-[#C9A15D] rounded-[2px]"
            >
              {/* Image Container */}
              <div className="relative border-b border-[#C9A15D]/40">
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                </div>

                {/* Icon Badge Overlapping */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-[64px] h-[64px] bg-[#050505] rounded-full border-2 border-[#C9A15D] flex items-center justify-center shadow-lg z-10">
                  <img src={svc.icon} alt="Icon" className="w-[80px] h-[80px] object-contain max-w-none" />
                </div>
              </div>

              {/* Text Content */}
              <div className="px-5 pb-5 pt-8 flex flex-col flex-1">
                <p className="text-[#C9A15D] text-[10px] font-bold mb-1.5">{svc.num}</p>
                <h3 className="font-heading text-[18px] font-medium text-white mb-2 whitespace-pre-line leading-snug">
                  {svc.title}
                </h3>

                {/* Golden horizontal line */}
                <div className="w-6 h-[1px] bg-[#C9A15D] mb-2.5" />

                <p className="font-sans text-[11.5px] text-[#b3b3b3] leading-[1.6]">{svc.desc}</p>
                {/* Bottom Arrow */}
                <div className="mt-auto pt-4">
                  <span className="text-[#C9A15D] text-[18px] font-light inline-block group-hover:translate-x-2 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TURNKEY SECTION ─────────────────────────────────────────────────────────
const turnkeySteps = [
  { icon: turnkeyIcon1, label: 'Design\nConsultation' },
  { icon: turnkeyIcon2, label: 'Material\nSelection' },
  { icon: turnkeyIcon3, label: 'Execution &\nInstallation' },
  { icon: turnkeyIcon4, label: 'Final Styling &\nHandover' },
]

function TurnkeySection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 relative bg-[#050505] items-center border-y border-[#C9A15D]/60">
        {/* Image */}
        <div className="relative h-[350px] lg:h-auto w-full">
          <img src={turnkeyImg} alt="Turnkey Interiors" className="w-full h-auto object-contain lg:object-cover" style={{ maxHeight: '600px' }} />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent hidden lg:block" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-10 py-10 lg:px-16 lg:py-0 w-full">
          <div className="max-w-xl mx-auto w-full">
            <p className="text-[#C9A15D] text-[10px] font-bold tracking-[0.15em] uppercase mb-3">COMPREHENSIVE SOLUTIONS</p>
            <h2 className="font-heading text-[34px] lg:text-[40px] font-medium text-[#f0e8d4] leading-[1.15] mb-4">
              Turnkey Interior<br />Solutions
            </h2>
            <p className="font-sans text-[13px] text-[#cccccc] leading-relaxed mb-10 max-w-[90%]">
              From concept to completion, we manage every detail so you can enjoy a seamless, stress-free experience.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 w-full mt-10">
              {turnkeySteps.map((step, i) => (
                <div key={i} className="flex items-center w-full relative">
                  <div className="flex flex-col items-center text-center flex-1 px-1">
                    <div className="relative h-[56px] w-full mb-0">
                      <img src={step.icon} alt={step.label} className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[104px] h-[104px] object-contain max-w-none" />
                    </div>
                    <p className="font-sans text-[11px] text-[#e5e5e5] whitespace-pre-line leading-[1.4] font-medium z-10 relative">
                      {step.label}
                    </p>
                  </div>
                  {i < turnkeySteps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-[80px] bg-[#C9A15D]/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

// ─── SERVICES CTA ─────────────────────────────────────────────────────────────
function ServicesCta() {
  return (
    <section className="bg-[#050505] border-y border-[#C9A15D]/50 relative overflow-hidden">
      {/* Optional faint marble background effect if needed */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

      <div className="section-container px-6 lg:px-12 py-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-8">

          {/* Left: Icon & Title */}
          <div className="flex items-center gap-6 lg:gap-8 w-full lg:w-auto flex-shrink-0">
            <div className="w-[64px] h-[64px] rounded-full border border-[#C9A15D] flex items-center justify-center flex-shrink-0 bg-[#050505]">
              <CalendarDays size={26} className="text-[#C9A15D]" strokeWidth={1.2} />
            </div>
            <h2 className="font-heading text-[28px] lg:text-[34px] font-medium text-[#f0e8d4] leading-[1.1]">
              Ready to Transform<br />Your Space?
            </h2>
          </div>

          {/* Middle: Paragraph */}
          <div className="w-full lg:flex-1 lg:max-w-md lg:px-4">
            <p className="font-sans text-[13px] text-[#cccccc] leading-[1.6]">
              Let our team of experts bring your vision to life<br className="hidden lg:block" />
              with bespoke solutions and impeccable execution.
            </p>
          </div>

          {/* Right: Button */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end flex-shrink-0">
            <Link to="/contact" className="border border-[#C9A15D]/60 hover:border-[#C9A15D] px-8 py-3.5 text-[10.5px] font-bold tracking-[0.15em] uppercase text-[#C9A15D] transition-colors duration-300 inline-flex items-center gap-3">
              SCHEDULE CONSULTATION <span className="text-[16px] font-light">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES PAGE ────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <TurnkeySection />
      <ServicesCta />
    </main>
  )
}
