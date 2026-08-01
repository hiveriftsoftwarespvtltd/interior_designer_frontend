import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import heroBanner from '../assets/home/hero_banner.png'
import icon25Years from '../assets/home/25+ years.png'
import iconCategories from '../assets/home/categories.png'
import icon11Clients from '../assets/home/11+ clients.png'
import iconTurnkey from '../assets/home/Turnkey.png'
import prod1 from '../assets/product/home_product.png'
import prod2 from '../assets/product/home_product2.png'
import prod3 from '../assets/product/home_product3.png'
import prod4 from '../assets/product/wooden_florring.png'
import prod5 from '../assets/product/home_product4.png'
import prod6 from '../assets/product/home_product5.png'
import prod7 from '../assets/product/customized_furniture.png'
import prod8 from '../assets/product/matress&sleep.png'
import prodIcon1 from '../assets/product/curtains&drapes.png'
import prodIcon2 from '../assets/product/Blinds.png'
import prodIcon3 from '../assets/product/Wallpapers.png'
import prodIcon4 from '../assets/product/wooden_flooring.png'
import prodIcon5 from '../assets/product/crapets.png'
import prodIcon6 from '../assets/product/upholstery.png'
import prodIcon7 from '../assets/product/customised_furniture.png'
import prodIcon8 from '../assets/product/mattresses.png'
import clientUdman from '../assets/home/prestigious _clients_udman_hotel.png'
import clientAarone from '../assets/home/prestigious _clients_aarone.png'
import clientEros from '../assets/home/prestigious _clients_eros_group.png'
import clientIgi from '../assets/home/prestigious _clients_igi_airport.png'
import clientSelect from '../assets/home/prestigious _clients_select_infra.png'
import clientTivoli from '../assets/home/prestigious _clients_tivoli.png'
import aboutCrafting from '../assets/home/crafting_space.png'
import ctaBg from "../assets/home/Let's_create.png"
import whyIcon1 from '../assets/home/luxury_difference_desgin.png'
import whyIcon2 from '../assets/home/luxury_difference_diamond.png'
import whyIcon3 from '../assets/home/luxury_difference_setting.png'
import whyIcon4 from '../assets/home/luxury_difference_star.png'


// ─── REUSABLE: GOLD EYEBROW ────────────────────────────────────────────────
function Eyebrow({ text, centered = false }) {
  return (
    <p className={`font-sans text-[11px] font-semibold tracking-wider uppercase text-gold-primary ${centered ? 'text-center' : ''}`}>
      {text}
    </p>
  )
}

// ─── REUSABLE: GOLD DIAMOND DIVIDER ───────────────────────────────────────
function DiamondDivider({ centered = false }) {
  return (
    <div className={`flex items-center gap-3 my-2 ${centered ? 'justify-center' : ''}`}>
      <span className="block h-px bg-gold-border/50 w-12" />
      <span className="block w-1.5 h-1.5 bg-gold-primary rotate-45 flex-shrink-0" />
      <span className="block h-px bg-gold-border/50 w-12" />
    </div>
  )
}

// ─── REUSABLE: SECTION DIVIDER ──────────────────────────────────────────────
function SectionDivider() {
  return (
    <div className="w-full h-[1px]" style={{ backgroundColor: 'rgba(201, 161, 93, 0.3)' }} />
  )
}

// ─── SECTION 1: HERO ──────────────────────────────────────────────────────
function Hero() {
  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-center pt-32 pb-12 lg:pt-40 lg:pb-20 flex-grow">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-14 flex flex-col justify-center w-full">
        <div style={{ maxWidth: '650px' }}>
          {/* H1 — elegant serif, lighter weight, uppercase */}
          <h1
            className="text-text-heading uppercase tracking-normal"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(36px, 8vw, 92px)',
              fontWeight: 300,
              lineHeight: 1.15,
            }}
          >
            WHERE<br />
            CRAFT MEETS<br />
            COMFORT,<br />
            <span
              style={{
                color: '#C9A15D',
              }}
            >
              INFINITELY
            </span>
          </h1>

          {/* Custom Diamond Underline for INFINITELY */}
          <div className="flex items-center gap-3 mt-4 w-full sm:w-auto">
            <span className="block h-[1px] bg-[#C9A15D] w-24 sm:w-32 md:w-48" />
            <span className="block w-2 h-2 bg-[#C9A15D] rotate-45 flex-shrink-0" />
            <span className="block h-[1px] bg-[#C9A15D] w-24 sm:w-32 md:w-48" />
          </div>

          {/* Tagline row */}
          <div className="flex flex-col gap-2 mt-10">
            <p className="font-sans text-[14px] lg:text-[15px] font-normal tracking-wide text-text-secondary flex flex-wrap items-center gap-2 sm:gap-3">
              Bespoke Interiors <span className="text-gold-primary text-[10px]">◆</span> Premium Furnishings
            </p>
            <p className="font-sans text-[15px] font-normal tracking-wide text-text-secondary">
              Turnkey Design Solutions
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mt-10 flex-wrap">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center font-sans font-bold text-[12px] lg:text-[13px] tracking-wider uppercase px-6 lg:px-8 py-4 transition-all duration-300 hover:opacity-90 w-full sm:w-auto sm:min-w-[240px]"
              style={{ background: 'linear-gradient(90deg, #E6C78A 0%, #C9A15D 100%)', color: '#050505' }}
            >
              EXPLORE OUR CRAFT
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-sans font-bold text-[12px] lg:text-[13px] tracking-wider uppercase px-6 lg:px-8 py-4 transition-all duration-300 hover:bg-gold-primary hover:text-luxury-black w-full sm:w-auto sm:min-w-[240px]"
              style={{ border: '1px solid #C9A15D', color: '#F5F2EB' }}
            >
              SCHEDULE CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── SECTION 2: STATS BAR ─────────────────────────────────────────────────
const statsData = [
  {
    svgIcon: (
      <img src={icon25Years} alt="25+ years" className="w-16 md:w-24 h-auto -my-2 md:-my-6" />
    ),
    value: '25+',
    label: 'Years of Combined\nLeadership Expertise',
  },
  {
    svgIcon: (
      <img src={iconCategories} alt="10+ categories" className="w-16 md:w-24 h-auto -my-2 md:-my-6" />
    ),
    value: '10+',
    label: 'Categories of\nBespoke Craftsmanship',
  },
  {
    svgIcon: (
      <img src={icon11Clients} alt="11+ clients" className="w-16 md:w-24 h-auto -my-2 md:-my-6" />
    ),
    value: '11+',
    label: 'Prestigious Clients\nAcross Sectors',
  },
  {
    svgIcon: (
      <img src={iconTurnkey} alt="Turnkey solutions" className="w-16 md:w-24 h-auto -my-2 md:-my-6" />
    ),
    value: 'Turnkey',
    label: 'End-to-End\nSolutions',
  },
]

function StatsBar() {
  return (
    <div className="border-t border-gold-border/30 relative z-10 -mt-1 bg-luxury-black/60 lg:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {statsData.map((s, i) => (
            <div key={i} className="flex items-center gap-5">
              <div className="flex-shrink-0 text-gold-primary">{s.svgIcon}</div>
              <div className="flex flex-col">
                <p
                  className="text-text-heading"
                  style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, fontSize: '22px', lineHeight: 1.1 }}
                >
                  {s.value}
                </p>
                <p className="font-sans text-[11px] text-text-paragraph leading-relaxed mt-1 whitespace-pre-line">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── SECTION 3: ABOUT PREVIEW ─────────────────────────────────────────────
function AboutPreview() {
  return (
    <section className="bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-5">
            {/* Eyebrow with perfect diamond underline */}
            <div className="flex flex-col gap-2 w-max">
              <Eyebrow text="About Infinity Luxe Spaces" />
              <div className="flex items-center gap-2 w-full">
                <span className="h-px bg-[#C9A15D] flex-grow" />
                <span className="w-1.5 h-1.5 bg-[#C9A15D] rotate-45 flex-shrink-0" />
                <span className="h-px bg-[#C9A15D] flex-grow" />
              </div>
            </div>

            <h2
              className="text-text-heading"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 400,
                fontSize: 'clamp(28px, 3vw, 42px)',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                color: '#f0e8d4ff',
              }}
            >
              Crafting Spaces That<br />Reflect Your Identity
            </h2>

            <div className="flex flex-col gap-4 mt-1">
              <p className="font-sans text-[13px] text-text-paragraph leading-relaxed">
                Infinity Luxe Spaces is a premium furnishing and interior solutions firm redefining luxury living through bespoke design and timeless craftsmanship.
              </p>
              <p className="font-sans text-[13px] text-text-paragraph leading-relaxed">
                With a legacy of trust and taste, we bring together design intelligence, curated global materials, and precision execution — transforming residential, commercial, and hospitality spaces into environments that feel unmistakably yours.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center w-fit font-sans font-semibold text-[10px] tracking-[0.2em] uppercase px-7 py-3 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-luxury-black transition-all duration-200 mt-2"
            >
              Know More About Us
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="overflow-hidden border-2 border-[#C9A15D]" style={{ aspectRatio: '4/3' }}>
              <img
                src={aboutCrafting}
                alt="Crafting Spaces"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 4: PRODUCTS / CRAFT GRID ────────────────────────────────────
const productItems = [
  {
    title: 'Customised\nCurtains & Drapes',
    desc: 'Tailored to your light,\nmood, and architecture',
    img: prod1,
    icon: prodIcon1,
  },
  {
    title: 'Premium Blinds',
    desc: 'Venetian, Roller, Zebra,\nRoman & Honeycomb\n– sunscreen & blackout\nmaterials',
    img: prod2,
    icon: prodIcon2,
  },
  {
    title: 'Exclusive\nWallpapers',
    desc: 'International collections\nplus made-to-order\ndesigns',
    img: prod3,
    icon: prodIcon3,
  },
  {
    title: 'Wooden\nFlooring',
    desc: 'Warmth, durability,\nand a refined finish',
    img: prod4,
    icon: prodIcon4,
  },
  {
    title: 'Carpets & Rugs',
    desc: 'Wall-to-wall, carpet tiles,\nrugs, vinyl & sports\nflooring for every\nspecification',
    img: prod5,
    icon: prodIcon5,
  },
  {
    title: 'Upholstery &\nLeatherettes',
    desc: 'Rich textures for sofas,\nchairs, and headboards\n– including luxurious,\nsupple & resilient\nleatherettes',
    img: prod6,
    icon: prodIcon6,
  },
  {
    title: 'Customised\nFurniture',
    desc: 'Statement pieces built\nto fit your space\nand style',
    img: prod7,
    icon: prodIcon7,
  },
  {
    title: 'Mattresses &\nSleep Solutions',
    desc: 'All types, from the best\nbrands, for residential\n& hospitality use',
    img: prod8,
    icon: prodIcon8,
  },
]

function ProductsGrid() {
  return (
    <section className="bg-luxury-black py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        {/* Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <Eyebrow text="Our Craft & Curations" centered />

          {/* Custom Diamond Underline below Eyebrow */}
          <div className="flex items-center justify-center gap-2 mt-3 mb-1" style={{ width: '100%', maxWidth: '120px' }}>
            <span style={{ display: 'block', height: '1px', backgroundColor: '#C9A15D', flexGrow: 1 }} />
            <span style={{ display: 'block', width: '6px', height: '6px', backgroundColor: '#C9A15D', transform: 'rotate(45deg)', flexShrink: 0 }} />
            <span style={{ display: 'block', height: '1px', backgroundColor: '#C9A15D', flexGrow: 1 }} />
          </div>

          <h2
            className="text-text-heading mt-3"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 400,
              fontSize: 'clamp(26px, 3vw, 40px)',
              letterSpacing: '-0.01em',
              color: '#f0e8d4ff',
            }}
          >
            Luxury Furnishings, Curated for Every Detail
          </h2>

          {/* Custom Diamond Underline matching Hero exactly */}
          <div className="flex items-center justify-center gap-3 mt-5" style={{ width: '100%', maxWidth: '300px' }}>
            <span style={{ display: 'block', height: '1px', backgroundColor: '#C9A15D', flexGrow: 1 }} />
            <span style={{ display: 'block', width: '8px', height: '8px', backgroundColor: '#C9A15D', transform: 'rotate(45deg)', flexShrink: 0 }} />
            <span style={{ display: 'block', height: '1px', backgroundColor: '#C9A15D', flexGrow: 1 }} />
          </div>
        </div>

        {/* 4-column grid, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productItems.map((item, i) => (
            <div
              key={i}
              className="relative group overflow-hidden cursor-pointer border"
              style={{ aspectRatio: '1 / 1', borderColor: '#C9A15D', borderWidth: '2px' }}
            >
              {/* Background image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-[#050505]/60 transition-colors duration-500" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                {/* Icon */}
                <div className="mb-4 w-16 h-16 rounded-full border-2 border-[#C9A15D] flex items-center justify-center overflow-hidden">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-cover" />
                </div>

                {/* Heading */}
                <h3
                  className="text-text-heading whitespace-pre-line mb-2"
                  style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, fontSize: '13px', lineHeight: 1.3 }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-text-paragraph whitespace-pre-line"
                  style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 400, fontSize: '10px', lineHeight: 1.4 }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center font-sans font-semibold text-[10px] tracking-[0.2em] uppercase px-7 py-3 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-luxury-black transition-all duration-200"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 5: WHY CHOOSE US ─────────────────────────────────────────────
const whyItems = [
  {
    icon: whyIcon1,
    title: 'Bespoke Design\nApproach',
    desc: 'Every project begins with\nunderstanding your lifestyle\nand aspirations.',
  },
  {
    icon: whyIcon2,
    title: 'Premium Global\nMaterials',
    desc: 'Curated collections sourced\nfor elegance, performance\nand longevity.',
  },
  {
    icon: whyIcon3,
    title: 'End-to-End\nExecution',
    desc: 'From concept and material\nselection to installation,\nwe handle it all.',
  },
  {
    icon: whyIcon4,
    title: 'Timeless\nCraftsmanship',
    desc: 'Designed to look exceptional\ntoday and for many\nyears to come.',
  },
]

function WhyUs() {
  return (
    <section className="bg-luxury-black py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        {/* Header */}
        <div className="text-center mb-10">
          <Eyebrow text="Why Choose Us" centered />
          <h2
            className="text-text-heading mt-3"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 400,
              fontSize: 'clamp(26px, 3vw, 40px)',
              letterSpacing: '-0.01em',
              color: '#f0e8d4ff',
            }}
          >
            The Luxury Difference
          </h2>
          <div className="my-6">
            <DiamondDivider centered />
          </div>
        </div>

        {/* 4-col grid without outer border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 mb-8">
          {whyItems.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center px-6 py-12 gap-5"
            >
              {/* Floating inner vertical divider */}
              {i > 0 && (
                <div className="hidden sm:block absolute left-0 top-16 bottom-16 w-px bg-[#C9A15D]/30" />
              )}

              {/* Custom Image Icon */}
              <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain scale-[2.2]" />
              <h3
                className="whitespace-pre-line"
                style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, fontSize: '13px', color: '#C9A15D', lineHeight: 1.4 }}
              >
                {item.title}
              </h3>
              <p
                className="whitespace-pre-line"
                style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 400, fontSize: '11px', color: '#B6B6B6', lineHeight: 1.6 }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 6: PORTFOLIO PREVIEW ─────────────────────────────────────────
const portfolioItems = [
  { label: 'Luxury Residences', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=800&q=85' },
  { label: 'Hospitality Projects', img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=85' },
  { label: 'Corporate Interiors', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85' },
  { label: 'Signature Furnishing', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=85' },
]

function PortfolioPreview() {
  return (
    <section className="bg-luxury-black py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-14">
        {/* Header */}
        <div className="text-center mb-8">
          <Eyebrow text="Featured Projects" centered />
          <h2
            className="text-text-heading mt-3"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 400,
              fontSize: 'clamp(26px, 3vw, 40px)',
              color: '#f0e8d4ff',
            }}
          >
            Spaces We Have Transformed
          </h2>
          <DiamondDivider centered />
        </div>

        {/* Portfolio carousel row */}
        <div className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {portfolioItems.map((item, i) => (
              <div key={i} className="relative group overflow-hidden cursor-pointer">
                {/* Image: 3:4 portrait ratio matching reference */}
                <div style={{ aspectRatio: '3/4' }} className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Bottom overlay with label */}
                <div
                  className="absolute inset-0 flex items-end"
                  style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.3) 45%, transparent 100%)' }}
                >
                  <p
                    className="px-4 pb-4 w-full text-text-secondary"
                    style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '12px' }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Left / Right arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-9 h-9 border border-gold-border/40 bg-luxury-black/80 flex items-center justify-center text-gold-primary hover:border-gold-primary transition-all z-10">
            <ChevronLeft size={16} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-9 h-9 border border-gold-border/40 bg-luxury-black/80 flex items-center justify-center text-gold-primary hover:border-gold-primary transition-all z-10">
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center font-sans font-semibold text-[10px] tracking-[0.2em] uppercase px-7 py-3 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-luxury-black transition-all duration-200"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 7: CLIENTS STRIP ─────────────────────────────────────────────
const clientLogos = [
  clientUdman,
  clientAarone,
  clientEros,
  clientIgi,
  clientSelect,
  clientTivoli,
]

function ClientsStrip() {
  return (
    <section className="bg-luxury-black py-14">
      <div className="max-w-7xl mx-auto px-8 lg:px-14">
        <Eyebrow text="Our Prestigious Clients" centered />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {clientLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center transition-colors duration-300 group"
              style={{ height: '100px' }}
            >
              <div
                className="w-full h-full scale-[2.2] bg-[#C9A15D] opacity-80 group-hover:opacity-100 group-hover:scale-[2.5] transition-all duration-700 ease-out flex-shrink-0"
                style={{
                  WebkitMaskImage: `url(${logo})`,
                  maskImage: `url(${logo})`,
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-7">
          <Link
            to="/clients"
            className="inline-flex items-center font-sans font-semibold text-[10px] tracking-[0.2em] uppercase px-7 py-3 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-luxury-black transition-all duration-200"
          >
            View All Clients
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 8: CTA ───────────────────────────────────────────────────────
function HomeCta() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={ctaBg}
          alt="Luxury space CTA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(5,5,5,0.5)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="text-text-heading"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#f0e8d4ff',
              }}
            >
              Let's Create Your<br />Next Space Together
            </h2>
            <p className="font-sans text-[13px] text-text-paragraph leading-relaxed mt-4" style={{ maxWidth: '400px' }}>
              Whether you're designing a luxury residence, a hospitality destination, or a corporate environment, our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center font-sans font-semibold text-[10px] tracking-[0.18em] uppercase px-6 py-3.5 transition-all duration-200 hover:opacity-90"
                style={{ background: '#C9A15D', color: '#050505' }}
              >
                Book a Design Consultation
              </Link>
              <button className="inline-flex items-center gap-3 font-sans font-medium text-[11px] tracking-wider uppercase text-text-secondary hover:text-gold-primary transition-colors duration-200 group">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-[#C9A15D] text-[#C9A15D] flex-shrink-0 group-hover:bg-[#C9A15D] group-hover:text-luxury-black transition-all duration-300"
                >
                  <span style={{ marginLeft: '2px' }}>▶</span>
                </span>
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Right: Contact info + social */}
          <div className="bg-luxury-black border border-[#C9A15D] p-10 flex flex-col gap-7 lg:ml-4 shadow-2xl relative z-10">
            
            {/* Phone */}
            <div className="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9A15D" stroke="#C9A15D" strokeWidth="0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" /></svg>
              <span className="font-sans font-medium text-[14px] text-text-secondary">+91 98765 43210</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9A15D" stroke="#C9A15D" strokeWidth="0"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              <span className="font-sans font-medium text-[14px] text-text-secondary">info@infinityluxespaces.com</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9A15D" stroke="#C9A15D" strokeWidth="0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
              <span className="font-sans font-medium text-[14px] text-text-secondary">New Delhi, India</span>
            </div>

            <div className="mt-5">
              <p
                className="uppercase tracking-wider mb-5"
                style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 600, fontSize: '11px', color: '#C9A15D' }}
              >
                Follow Us
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-[#C9A15D] flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-luxury-black transition-all duration-300">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#C9A15D] flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-luxury-black transition-all duration-300">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#C9A15D] flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-luxury-black transition-all duration-300">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#C9A15D] flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-luxury-black transition-all duration-300">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <section className="relative w-full flex flex-col justify-between" style={{ minHeight: '80vh' }}>
        {/* Shared background image for Hero and Stats */}
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Luxury interior design"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-10">
          <Hero />
          <StatsBar />
        </div>
      </section>

      <SectionDivider />
      <AboutPreview />

      <SectionDivider />
      <ProductsGrid />

      <SectionDivider />
      <WhyUs />

      <SectionDivider />
      <ClientsStrip />

      <SectionDivider />
      <HomeCta />
    </main>
  )
}
