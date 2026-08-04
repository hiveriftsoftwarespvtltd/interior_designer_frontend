import { Link } from 'react-router-dom'
import { ArrowRight, Users, Layers, Trophy, PenTool, Globe, Settings, Star, Columns, AlignJustify, Image, Layout, ScanLine, Sofa, Armchair, Bed } from 'lucide-react'
import { GoldDivider, SectionHeader } from '../components/ui'
import aboutBanner from '../assets/about/about_banner.png'
import luxuryPhil from '../assets/about/luxury_isn\'t_just.png'
import infPenIcon from '../assets/about/infinity_standard_pen_icon.png'
import infGlobeIcon from '../assets/about/infinity_standard_global_icon.png'
import infSetIcon from '../assets/about/infinity_standard_setting_icon.png'
import infStarIcon from '../assets/about/infinity_standard_star_icon.png'

import curLux1 from '../assets/about/curated_luxury1.png'
import curLux2 from '../assets/about/curated_luxury2.png'
import curLux3 from '../assets/about/curated_luxury3.png'
import curLux4 from '../assets/about/curated_luxury4.png'
import curLux5 from '../assets/about/curated_luxury5.png'
import curLux6 from '../assets/about/curated_luxury6.png'
import curLux7 from '../assets/about/curated_luxury7.png'
import curLux8 from '../assets/about/curated_luxury8.png'
import ctaBg from '../assets/about/let\'s_create_somthing.png'

import prodIcon1 from '../assets/product/curtains&drapes.png'
import prodIcon2 from '../assets/product/Blinds.png'
import prodIcon3 from '../assets/product/Wallpapers.png'
import prodIcon4 from '../assets/product/wooden_flooring.png'
import prodIcon5 from '../assets/product/crapets.png'
import prodIcon6 from '../assets/product/upholstery.png'
import prodIcon7 from '../assets/product/customised_furniture.png'
import prodIcon8 from '../assets/product/mattresses.png'

import clientLogo1 from '../assets/home/udman hotel.svg'
import clientLogo2 from '../assets/home/eros group.svg'
import clientLogo3 from '../assets/home/select Group.svg'
import clientLogo4 from '../assets/home/the tivoli.svg'
import clientLogo5 from '../assets/home/lucky star.svg'
import clientLogo6 from '../assets/home/bigjos.svg'
import clientLogo7 from '../assets/home/Toeler.svg'
import clientLogo8 from '../assets/home/TURNER.svg'
import clientLogo9 from '../assets/home/Aarone.svg'
import clientLogo10 from '../assets/home/delhi_indira.svg'
import clientLogo11 from '../assets/home/fnp.svg'

// ─── HERO ─────────────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section className="relative min-h-[55vh] bg-luxury-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aboutBanner}
          alt="Luxury interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative section-container pt-32 pb-12 min-h-[55vh] flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl flex flex-col items-center">
          <p className="text-[#C9A15D] text-[16px] font-bold tracking-[0.1em] uppercase mb-4">
            About Us
          </p>
          <h1
            className="font-heading font-medium text-white leading-[1.2] tracking-wide"
            style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}
          >
            About Infinity Luxe <br /><span className='text-[#C9A15D]'>Spaces</span>
          </h1>
          <div className="flex items-center gap-3 w-64 my-8">
            <div className="h-px bg-[#C9A15D]/60 flex-1" />
            <div className="w-2 h-2 bg-[#C9A15D] rotate-45 flex-shrink-0" />
            <div className="h-px bg-[#C9A15D]/60 flex-1" />
          </div>
          <p className="font-sans text-[16px] text-[#e5e5e5] leading-relaxed max-w-3xl lg:max-w-4xl">
            Creating bespoke interiors where timeless craftsmanship, curated materials, and refined design come together to shape spaces that truly reflect your identity.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── OUR STORY ────────────────────────────────────────────────────────────────
function OurStory() {
  return (
    <section className="bg-luxury-black py-12 lg:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Our Story"
              heading="Where Craft Meets Comfort, Infinitely"
            />
            <div className="flex flex-col gap-4 mt-2">
              <p className="font-sans text-[16px] text-text-paragraph leading-relaxed">
                At Infinity Luxe Spaces, we believe every space should be a true reflection of the people who live and work within it. We specialize in bespoke interiors and premium furnishing solutions that seamlessly blend timeless elegance, functionality, and exceptional craftsmanship.
              </p>
              <p className="font-sans text-[16px] text-text-paragraph leading-relaxed">
                Driven by 25+ years of combined leadership expertise, we combine innovative design thinking, curated global materials, and precision execution to create refined residential, commercial, and hospitality environments. Every project is thoughtfully crafted to deliver enduring quality, sophisticated aesthetics, and a personalized experience that feels uniquely yours.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0 mt-10 lg:mt-24">
            {[
              { icon: <Users size={44} className="text-[#C9A15D] transition-transform duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer" strokeWidth={1} />, value: '25+', label: 'Years Combined\nLeadership Expertise' },
              { icon: <Layers size={44} className="text-[#C9A15D] transition-transform duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer" strokeWidth={1} />, value: '10+', label: 'Bespoke Craft\nCategories' },
              { icon: <Trophy size={44} className="text-[#C9A15D] transition-transform duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer" strokeWidth={1} />, value: '11+', label: 'Prestigious Clients\nAcross Sectors' },
            ].map((s, i) => (
              <div key={i} className={`flex flex-col items-center text-center gap-3 px-2 lg:px-4 ${i > 0 ? 'sm:border-l border-[#C9A15D]/30' : ''}`}>
                {s.icon}
                <p className="font-heading text-4xl font-semibold text-white mt-1">{s.value}</p>
                <p className="font-sans text-[16px] text-[#B6B6B6] leading-snug whitespace-pre-line">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PHILOSOPHY ───────────────────────────────────────────────────────────────
function Philosophy() {
  return (
    <section className="bg-luxury-black py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[500px]">
        {/* Image */}
        <div className="relative">
          <img
            src={luxuryPhil}
            alt="Philosophy"
            className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
          />
        </div>

        {/* Text */}
        <div className="bg-luxury-black flex flex-col justify-center px-6 lg:px-12 py-10 lg:py-16">
          <p className="text-[#C9A15D] text-[10px] tracking-wider uppercase mb-4 flex items-center gap-3 font-semibold">
            Our Philosophy <span className="w-8 h-px bg-[#C9A15D]/40" />
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-text-heading leading-tight">
            Luxury Isn't Just<br />What You See
          </h2>
          <div className="text-[#C9A15D] text-6xl font-serif leading-none mt-10 mb-2">“</div>
          <p className="font-heading text-2xl lg:text-3xl text-[#C9A15D] italic leading-relaxed">
            "Luxury isn't just what you see — it's what you feel every day."
          </p>
          <div className="w-10 h-px bg-[#C9A15D]/40 my-8" />
          <p className="font-sans text-[16px] text-text-paragraph leading-relaxed">
            At Infinity Luxe Spaces, every stitch, plank, texture, and finish is carefully selected to create spaces that inspire, endure, and belong uniquely to their owners.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── THE INFINITY STANDARD ────────────────────────────────────────────────────
const standards = [
  {
    title: 'Bespoke Design Approach',
    desc: 'Every space is designed around your lifestyle, requirements, and aesthetic vision.',
    icon: <img src={infPenIcon} alt="Design Approach" className="w-16 h-16 object-contain scale-[2.2] transition-transform duration-300 hover:scale-[2.4] cursor-pointer" />,
  },
  {
    title: 'Premium Global Materials',
    desc: 'Carefully sourced materials and finishes that meet international quality standards.',
    icon: <img src={infGlobeIcon} alt="Global Materials" className="w-16 h-16 object-contain scale-[2.2] transition-transform duration-300 hover:scale-[2.4] cursor-pointer" />,
  },
  {
    title: 'Turnkey Project Execution',
    desc: 'From consultation and material selection to final handover, we manage it all.',
    icon: <img src={infSetIcon} alt="Turnkey Execution" className="w-16 h-16 object-contain scale-[2.2] transition-transform duration-300 hover:scale-[2.4] cursor-pointer" />,
  },
  {
    title: 'Timeless Craftsmanship',
    desc: 'Luxury solutions crafted with precision, built to maintain their elegance for years to come.',
    icon: <img src={infStarIcon} alt="Craftsmanship" className="w-16 h-16 object-contain scale-[2.2] transition-transform duration-300 hover:scale-[2.4] cursor-pointer" />,
  },
]

function InfinityStandard() {
  return (
    <section className="bg-luxury-black py-12">
      <div className="section-container">
        <div className="text-center mb-6 flex flex-col items-center">
          <p className="text-[#C9A15D] text-[10px] tracking-wider uppercase flex items-center gap-4 font-semibold mb-3">
            <span className="w-8 h-px bg-[#C9A15D]/40" /> What Makes Us Different <span className="w-8 h-px bg-[#C9A15D]/40" />
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">The Infinity Standard</h2>
          <div className="flex items-center gap-3 justify-center my-2">
            <span className="block h-px bg-[#C9A15D]/40 w-10" />
            <span className="block w-1.5 h-1.5 bg-[#C9A15D] rotate-45 flex-shrink-0" />
            <span className="block h-px bg-[#C9A15D]/40 w-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          {standards.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center px-4 pt-10 pb-4 gap-6">
              {/* Floating inner vertical divider perfectly matching reference */}
              {i > 0 && (
                <div className="hidden sm:block absolute left-0 top-6 bottom-6 w-px bg-[#C9A15D]/30" />
              )}
              {item.icon}
              <h3 className="font-heading text-[13px] font-semibold text-[#C9A15D]">{item.title}</h3>
              <p className="font-sans text-[16px] text-[#B6B6B6] leading-relaxed -mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── EXPERTISE / PRODUCT CARDS ────────────────────────────────────────────────
const expertiseItems = [
  { label: 'Customised\nCurtains & Drapes', icon: prodIcon1, img: curLux1 },
  { label: 'Premium\nBlinds', icon: prodIcon2, img: curLux2 },
  { label: 'Exclusive\nWallpapers', icon: prodIcon3, img: curLux3 },
  { label: 'Wooden\nFlooring', icon: prodIcon4, img: curLux4 },
  { label: 'Carpets & Rugs', icon: prodIcon5, img: curLux5 },
  { label: 'Upholstery &\nLeatherettes', icon: prodIcon6, img: curLux6 },
  { label: 'Customised\nFurniture', icon: prodIcon7, img: curLux7 },
  { label: 'Mattresses &\nSleep Solutions', icon: prodIcon8, img: curLux8 },
]

function Expertise() {
  return (
    <section className="bg-luxury-black py-12 lg:py-20">
      <div className="section-container">
        <div className="text-center mb-12 flex flex-col items-center">
          <p className="text-[#C9A15D] text-[10px] tracking-wider uppercase mb-4 flex items-center gap-3 font-semibold">
            OUR EXPERTISE
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-text-heading leading-tight">
            Curated Luxury Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-2 lg:px-4">
          {expertiseItems.map((item, i) => (
            <div key={i} className="relative group overflow-hidden border border-[#C9A15D]/40 aspect-[4/3] rounded-[2px] cursor-pointer">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

              <div className="absolute inset-0 flex items-end p-5">
                <div className="flex items-center gap-4">
                  <img src={item.icon} alt={item.label} className="h-14 w-auto object-contain flex-shrink-0 transition-transform duration-300 scale-[2.0] group-hover:scale-[2.2]" />
                  <p className="font-sans text-[16px] font-semibold text-white whitespace-pre-line leading-snug relative z-10">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Link to="/products" className="border border-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#050505] px-8 py-3 text-[11px] font-semibold tracking-widest uppercase text-[#C9A15D] transition-colors duration-300 inline-flex items-center gap-3 group">
            Explore All Products <ArrowRight size={14} className="text-[#C9A15D] group-hover:text-[#050505] transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── LEADERSHIP ───────────────────────────────────────────────────────────────
const leaders = [
  {
    name: 'Tapan Ahuja',
    role: 'Co-Founder & Director',
    bio: '25+ Years in Luxury Furnishings & Project Execution. Leads the company with deep industry expertise and a strong understanding of luxury project delivery.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
  },
  {
    name: 'Surendra Rawat',
    role: 'Co-Founder & Director',
    bio: '15+ Years in Sourcing, Materials & Design Consultation, ensuring every project meets the highest quality standards.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80',
  },
  {
    name: 'Gaurav Juneja',
    role: 'Director – Operations & Design Curation',
    bio: 'Operations & Design Curation specialist focused on seamless execution and delivering exceptional client experiences.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
  },
]

function Leadership() {
  return (
    <section className="bg-luxury-black py-12 lg:py-20">
      <div className="section-container">
        <div className="text-center mb-14 flex flex-col items-center">
          <p className="text-[#C9A15D] text-[10px] tracking-[0.2em] uppercase font-bold mb-3">LEADERSHIP</p>
          <h2 className="font-heading text-3xl lg:text-4xl text-[#f0e8d4] font-medium tracking-wide">
            Meet The Vision Behind Infinity Luxe Spaces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <div key={i} className="flex flex-col xl:flex-row border border-[#C9A15D]/60 rounded-[3px] overflow-hidden bg-luxury-black transition-all hover:border-[#C9A15D] group">
              {/* Image side */}
              <div className="w-full xl:w-[45%] flex-shrink-0 aspect-square xl:aspect-auto">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text side */}
              <div className="w-full xl:w-[55%] p-5 lg:p-6 flex flex-col justify-center">
                <h3 className="font-sans text-[15px] lg:text-[16px] font-semibold text-[#C9A15D] tracking-wide mb-1.5">{leader.name}</h3>
                <p className="font-sans text-[16px] lg:text-[16px] font-medium text-[#D4AF37] mb-4">{leader.role}</p>

                <div className="w-10 h-[1px] bg-[#C9A15D]/50 mb-5" />

                <p className="font-sans text-[10px] lg:text-[12px] text-[#e0e0e0] leading-[1.7]">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CLIENTS ─────────────────────────────────────────────────────────────────
const clientLogos = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo8,
  clientLogo9,
  clientLogo10,
  clientLogo11,
]

function AboutClients() {
  return (
    <section className="bg-luxury-black py-10 lg:py-16">
      <div className="section-container">
        <p className="text-[#C9A15D] text-[10px] tracking-wider uppercase mb-4 text-center font-semibold">Trusted by Industry Leaders</p>
        <h2 className="font-heading text-3xl font-semibold text-text-heading text-center mb-10">Our Prestigious Clients</h2>

        <div className="clients-marquee-wrapper mt-12 mb-8">
          <div className="clients-marquee-track gap-10 lg:gap-16">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0 px-6 md:px-12"
              >
                <img 
                  src={logo} 
                  alt="Client Logo" 
                  className="h-[80px] md:h-[110px] w-auto max-w-none object-contain scale-[1.5] md:scale-[1.8] transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-[1.7] md:hover:scale-[2] cursor-pointer" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT CTA ────────────────────────────────────────────────────────────────
function AboutCta() {
  return (
    <section className="relative bg-luxury-black py-10 lg:py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaBg}
          alt="CTA background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative section-container flex justify-end">
        <div className="w-full lg:w-2/3 xl:w-3/5 text-center flex flex-col items-center">
          <h2
            className="font-heading font-medium text-white mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
          >
            Let's Create Something Exceptional
          </h2>
          <p className="font-sans text-[16px] text-[#e5e5e5] max-w-lg leading-relaxed mb-10">
            Whether you're designing a luxury residence, a hospitality destination, or a corporate environment, our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/contact"
              className="px-8 py-3.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-3 text-black shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(to right, #D4AF37, #C9A15D)' }}
            >
              Schedule Consultation <ArrowRight size={14} className="text-black" />
            </Link>
            <Link
              to="/products"
              className="border border-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#050505] text-[#C9A15D] px-8 py-3.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-3 hover:-translate-y-0.5 group"
            >
              Explore Products <ArrowRight size={14} className="text-[#C9A15D] group-hover:text-[#050505] transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION DIVIDER ──────────────────────────────────────────────────────────
function SectionDivider() {
  return (
    <div className="w-full h-[1px]" style={{ backgroundColor: 'rgba(201, 161, 93, 0.3)' }} />
  )
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
export default function About() {
  return (
    <main className="bg-luxury-black">
      <AboutHero />
      <SectionDivider />
      <OurStory />
      <SectionDivider />
      <Philosophy />
      <SectionDivider />
      <InfinityStandard />
      <SectionDivider />
      <Leadership />
      <SectionDivider />
      <AboutClients />
      <SectionDivider />
      <AboutCta />
    </main>
  )
}
