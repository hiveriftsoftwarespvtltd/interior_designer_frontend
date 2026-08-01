import { Link } from 'react-router-dom'
import { ArrowRight, Layout, Columns } from 'lucide-react'
import { GoldDivider, SectionHeader } from '../components/ui'

import prodIcon1 from '../assets/product/curtains&drapes.png'
import prodIcon2 from '../assets/product/Blinds.png'
import prodIcon3 from '../assets/product/Wallpapers.png'
import prodIcon4 from '../assets/product/wooden_flooring.png'
import prodIcon5 from '../assets/product/crapets.png'
import prodIcon6 from '../assets/product/upholstery.png'
import prodIcon7 from '../assets/product/customised_furniture.png'
import prodIcon8 from '../assets/product/mattresses.png'

import catImg1 from '../assets/product/home_product3.png' // Curtains
import catImg2 from '../assets/product/home_product2.png' // Blinds
import catImg3 from '../assets/product/home_product.png' // Wallpapers
import catImg4 from '../assets/product/wooden_florring.png' // Flooring
import catImg5 from '../assets/product/home_product5.png' // Carpets
import catImg6 from '../assets/product/browse_by_category7.png' // Upholstery
import catImg7 from '../assets/product/customized_furniture.png' // Furniture
import catImg8 from '../assets/product/matress&sleep.png' // Mattresses

import funcEle1 from '../assets/product/functional_elegance1.png'
import funcEle2 from '../assets/product/functional_elegance2.png'
import kitchenIcon from '../assets/product/modular_kitchen.png'
import wardrobeIcon from '../assets/product/wordrobes.png'

import featIcon1 from '../assets/product/premium_qaulity.png'
import featIcon2 from '../assets/product/exculsive_global.png'
import featIcon3 from '../assets/product/bespoke_custamisation.png'
import featIcon4 from '../assets/product/end_to_end.png'
import featIcon5 from '../assets/product/durability.png'

import ctaBgImage from '../assets/product/let_create_somthing.png'
import heroBgImage from '../assets/product/product_banner.png'

// ─── HERO ─────────────────────────────────────────────────────────────────────
function ProductsHero() {
  return (
    <section className="relative min-h-[70vh] bg-[#050505] overflow-hidden border-b border-[#C9A15D]/50">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Products Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#050505]/40" />
      </div>
      <div className="relative section-container pt-32 pb-12 lg:pt-40 lg:pb-20 min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-xl">
          <p className="eyebrow-label mb-4">Our Products</p>
          <h1 className="font-heading font-semibold text-4xl lg:text-6xl text-text-heading leading-tight">
            Curated Luxury.<br />
            <span className="text-[#C9A15D]">Crafted for You.</span>
          </h1>
          <div className="flex items-center gap-2 mt-8 mb-8 w-[240px] lg:w-[340px]">
            <span className="h-px bg-[#C9A15D] flex-grow" />
            <span className="w-2 h-2 bg-[#C9A15D] rotate-45 flex-shrink-0" />
            <span className="h-px bg-[#C9A15D] flex-grow" />
          </div>
          <p className="font-sans text-sm text-text-paragraph leading-relaxed max-w-md">
            Explore our exclusive range of premium furnishings and materials, chosen for their quality, elegance, and timeless appeal.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── CATEGORY GRID ────────────────────────────────────────────────────────────
const categories = [
  {
    label: 'Customised\nCurtains & Drapes',
    img: catImg1,
    icon: prodIcon1,
  },
  {
    label: 'Premium\nBlinds',
    img: catImg2,
    icon: prodIcon2,
  },
  {
    label: 'Exclusive\nWallpapers',
    img: catImg3,
    icon: prodIcon3,
  },
  {
    label: 'Wooden\nFlooring',
    img: catImg4,
    icon: prodIcon4,
  },
  {
    label: 'Carpets &\nRugs',
    img: catImg5,
    icon: prodIcon5,
  },
  {
    label: 'Upholstery &\nLeatherettes',
    img: catImg6,
    icon: prodIcon6,
  },
  {
    label: 'Customised\nFurniture',
    img: catImg7,
    icon: prodIcon7,
  },
  {
    label: 'Mattresses &\nSleep Solutions',
    img: catImg8,
    icon: prodIcon8,
  },
]

function CategoryGrid() {
  return (
    <section className="bg-[#0a0a0a] py-12 lg:py-20 border-b border-[#C9A15D]/50">
      <div className="section-container">
        <div className="flex items-center justify-center gap-6 mb-12">
          <span className="block h-px bg-gold-border/40 flex-1 max-w-24" />
          <p className="eyebrow-label">Browse By Category</p>
          <span className="block h-px bg-gold-border/40 flex-1 max-w-24" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 lg:px-0">
          {categories.map((cat, i) => (
            <div key={i} className="relative group overflow-hidden cursor-pointer border border-[#C9A15D]/40 rounded-[2px] transition-colors duration-300 hover:border-[#C9A15D]">
              <div className="aspect-[4/5] lg:aspect-[4/5.2]">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Center Top Icon */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[52px] h-[52px] rounded-full border border-[#C9A15D] bg-[#050505]/60 flex items-center justify-center">
                <img src={cat.icon} alt="Icon" className="w-[64px] h-[64px] object-contain max-w-none transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Bottom Left Text */}
              <div className="absolute bottom-6 left-6 pr-4">
                <p className="font-sans text-[15px] font-semibold text-[#f0e8d4] whitespace-pre-line leading-[1.3] group-hover:text-[#C9A15D] transition-colors duration-300">
                  {cat.label}
                </p>
                <span className="block mt-3 text-[#C9A15D] text-lg leading-none transition-transform duration-300 group-hover:translate-x-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PREMIUM ADDITIONS ────────────────────────────────────────────────────────
function PremiumAdditions() {
  return (
    <section className="bg-[#050505] py-12 lg:py-20 border-b border-[#C9A15D]/50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center">
          {/* Text */}
          <div className="flex flex-col justify-center py-4 lg:py-8 lg:pr-8">
            <p className="text-[#C9A15D] text-[10px] font-bold tracking-[0.15em] uppercase mb-4">
              PREMIUM ADDITIONS
            </p>
            <h2 className="font-heading text-[32px] lg:text-[40px] font-medium text-[#f0e8d4] leading-[1.2] mb-6">
              Functional Elegance<br />for Modern Living
            </h2>
            <div className="flex items-center gap-2 w-[140px]">
              <span className="h-px bg-[#C9A15D]/60 flex-grow" />
              <span className="w-1.5 h-1.5 bg-[#C9A15D] rotate-45 flex-shrink-0" />
              <span className="h-px bg-[#C9A15D]/60 flex-grow" />
            </div>
          </div>

          {/* Modular Kitchens */}
          <div className="relative group overflow-hidden border border-[#C9A15D]/30 rounded-[2px]">
            <div className="aspect-[1.2]">
              <img
                src={funcEle1}
                alt="Modular Kitchens"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-6 left-6">
              <div className="w-[56px] h-[56px] rounded-full border border-[#C9A15D] bg-[#050505]/60 flex items-center justify-center mb-4">
                <img src={kitchenIcon} alt="Kitchen Icon" className="w-[64px] h-[64px] object-contain max-w-none transition-transform duration-300 hover:scale-110 cursor-pointer" />
              </div>
              <p className="font-sans text-[15px] font-semibold text-[#f0e8d4] whitespace-pre-line leading-[1.3]">
                Modular Kitchens
              </p>
            </div>
          </div>

          {/* Wardrobes */}
          <div className="relative group overflow-hidden border border-[#C9A15D]/30 rounded-[2px]">
            <div className="aspect-[1.2]">
              <img
                src={funcEle2}
                alt="Wardrobes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-6 left-6">
              <div className="w-[56px] h-[56px] rounded-full border border-[#C9A15D] bg-[#050505]/60 flex items-center justify-center mb-4">
                <img src={wardrobeIcon} alt="Wardrobe Icon" className="w-[64px] h-[64px] object-contain max-w-none transition-transform duration-300 hover:scale-110 cursor-pointer" />
              </div>
              <p className="font-sans text-[15px] font-semibold text-[#f0e8d4] whitespace-pre-line leading-[1.3]">
                Wardrobes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FEATURES BAR ─────────────────────────────────────────────────────────────
const features = [
  { icon: featIcon1, label: 'Premium Quality\nMaterials' },
  { icon: featIcon2, label: 'Exclusive Global\nCollections' },
  { icon: featIcon3, label: 'Bespoke Customisation\nOptions' },
  { icon: featIcon4, label: 'End-to-End\nSupport' },
  { icon: featIcon5, label: 'Durability &\nTimeless Appeal' },
]

function FeaturesBar() {
  return (
    <section className="bg-[#050505] border-y border-[#C9A15D]/20">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-6">
          {features.map((f, i) => (
            <div key={i} className={`flex flex-col items-center text-center px-4 ${i < 4 ? 'lg:border-r border-[#C9A15D]/20' : ''}`}>
              <div className="relative h-[56px] w-full mb-1">
                <img src={f.icon} alt={f.label} className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[132px] object-contain max-w-none transition-transform duration-300 hover:scale-110 cursor-pointer" />
              </div>
              <p className="font-sans text-[13px] md:text-[14px] font-medium text-[#f0e8d4] whitespace-pre-line leading-[1.4] relative z-10">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CUSTOM CTA ───────────────────────────────────────────────────────────────
function ProductsCta() {
  return (
    <section className="bg-[#050505] border-y border-[#C9A15D]/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px]">
        {/* Image - Left Side */}
        <div className="relative">
          <img
            src={ctaBgImage}
            alt="Custom CTA"
            className="w-full h-full object-cover min-h-[350px]"
          />
          {/* Blend Gradients */}
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none hidden lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none block lg:hidden" />
        </div>

        {/* Text - Right Side */}
        <div className="flex flex-col justify-center px-6 py-12 lg:px-16 lg:py-16">
          <p className="font-sans text-[11px] md:text-[12px] font-bold text-[#C9A15D] tracking-[0.15em] uppercase mb-4">
            CAN'T FIND WHAT YOU'RE LOOKING FOR?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-medium text-[#f0e8d4] leading-tight mb-5">
            Let's Create Something<br />Truly Yours
          </h2>
          <p className="font-sans text-[13px] text-[#a3a3a3] leading-relaxed mb-8 max-w-[420px]">
            Get in touch with our experts for customised solutions<br className="hidden sm:block" />
            tailored to your unique style and space.
          </p>
          <Link
            to="/contact"
            className="border border-[#C9A15D] text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#050505] px-6 py-3 text-[11px] font-bold tracking-[0.15em] uppercase flex items-center gap-3 w-fit transition-colors group"
          >
            SCHEDULE A CONSULTATION
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── PRODUCTS PAGE ────────────────────────────────────────────────────────────
export default function Products() {
  return (
    <main>
      <ProductsHero />
      <CategoryGrid />
      <PremiumAdditions />
      <FeaturesBar />
      <ProductsCta />
    </main>
  )
}
