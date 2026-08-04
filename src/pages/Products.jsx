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
    <section className="relative min-h-[45vh] bg-[#050505] overflow-hidden border-b border-[#C9A15D]/50">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Products Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#050505]/40" />
      </div>
      <div className="relative section-container pt-28 pb-12 min-h-[45vh] flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl flex flex-col items-center">
          <p className="text-[#C9A15D] text-[16px] font-bold tracking-[0.1em] uppercase mb-4">
            Our Products
          </p>
          <h1
            className="font-heading font-medium text-white leading-[1.2] tracking-wide"
            style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}
          >
            Curated Luxury.<br />
            <span className="text-[#C9A15D]">Crafted for You.</span>
          </h1>
          <div className="flex items-center gap-3 w-64 my-8">
            <div className="h-px bg-[#C9A15D]/60 flex-1" />
            <div className="w-2 h-2 bg-[#C9A15D] rotate-45 flex-shrink-0" />
            <div className="h-px bg-[#C9A15D]/60 flex-1" />
          </div>
          <p className="font-sans text-[16px] text-[#e5e5e5] leading-relaxed max-w-3xl lg:max-w-4xl">
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
    label: 'Curtains',
    img: catImg1,
    icon: prodIcon1,
    slug: 'curtains-drapes'
  },
  {
    label: 'Blinds',
    img: catImg2,
    icon: prodIcon2,
    slug: 'premium-blinds'
  },
  {
    label: 'Wallpapers',
    img: catImg3,
    icon: prodIcon3,
    slug: 'exclusive-wallpapers'
  },
  {
    label: 'Wooden Flooring',
    img: catImg4,
    icon: prodIcon4,
    slug: 'wooden-flooring'
  },
  {
    label: 'Carpets',
    img: catImg5,
    icon: prodIcon5,
    slug: 'carpets-rugs'
  },
  {
    label: 'Upholstery',
    img: catImg6,
    icon: prodIcon6,
    slug: 'upholstery-leatherettes'
  },
  {
    label: 'Furniture',
    img: catImg7,
    icon: prodIcon7,
    slug: 'customised-furniture'
  },
  {
    label: 'Mattresses',
    img: catImg8,
    icon: prodIcon8,
    slug: 'mattresses-sleep'
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
            <Link to={`/products/${cat.slug}`} key={i} className="relative group overflow-hidden cursor-pointer border border-[#C9A15D]/40 rounded-[2px] transition-colors duration-300 hover:border-[#C9A15D] block">
              <div className="aspect-[4/5] lg:aspect-[4/5.2]">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Center Top Icon */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[52px] h-[52px] rounded-full border border-[#C9A15D] bg-[#050505]/60 flex items-center justify-center">
                <img src={cat.icon} alt="Icon" className="w-[64px] h-[64px] object-contain max-w-none scale-[1.2] transition-transform duration-300 group-hover:scale-[1.3]" />
              </div>

              {/* Bottom Left Text */}
              <div className="absolute bottom-6 left-6 pr-4">
                <p className="font-sans text-[16px] font-semibold text-[#f0e8d4] whitespace-pre-line leading-[1.3] group-hover:text-[#C9A15D] transition-colors duration-300">
                  {cat.label}
                </p>
                <span className="block mt-3 text-[#C9A15D] text-lg leading-none transition-transform duration-300 group-hover:translate-x-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PREMIUM ADDITIONS ────────────────────────────────────────────────────────
function PremiumAdditions() {
  return (
    <section id="functional-elegance" className="bg-[#050505] py-12 lg:py-20 border-b border-[#C9A15D]/50">
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
          <Link to="/products/modular-kitchens" className="relative group overflow-hidden border border-[#C9A15D]/30 rounded-[2px] block cursor-pointer">
            <div className="aspect-[1.2]">
              <img
                src={funcEle1}
                alt="Modular Kitchens"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-6 left-6 pr-4">
              <div className="w-[56px] h-[56px] rounded-full border border-[#C9A15D] bg-[#050505]/60 flex items-center justify-center mb-4">
                <img src={kitchenIcon} alt="Kitchen Icon" className="w-[64px] h-[64px] object-contain max-w-none scale-[1.2] transition-transform duration-300 group-hover:scale-[1.3]" />
              </div>
              <p className="font-sans text-[16px] font-semibold text-[#f0e8d4] whitespace-pre-line leading-[1.3] group-hover:text-[#C9A15D] transition-colors duration-300">
                Modular Kitchens
              </p>
              <span className="block mt-3 text-[#C9A15D] text-lg leading-none transition-transform duration-300 group-hover:translate-x-2">→</span>
            </div>
          </Link>

          {/* Wardrobes */}
          <Link to="/products/wardrobes" className="relative group overflow-hidden border border-[#C9A15D]/30 rounded-[2px] block cursor-pointer">
            <div className="aspect-[1.2]">
              <img
                src={funcEle2}
                alt="Wardrobes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-6 left-6 pr-4">
              <div className="w-[56px] h-[56px] rounded-full border border-[#C9A15D] bg-[#050505]/60 flex items-center justify-center mb-4">
                <img src={wardrobeIcon} alt="Wardrobe Icon" className="w-[64px] h-[64px] object-contain max-w-none scale-[1.2] transition-transform duration-300 group-hover:scale-[1.3]" />
              </div>
              <p className="font-sans text-[16px] font-semibold text-[#f0e8d4] whitespace-pre-line leading-[1.3] group-hover:text-[#C9A15D] transition-colors duration-300">
                Wardrobes
              </p>
              <span className="block mt-3 text-[#C9A15D] text-lg leading-none transition-transform duration-300 group-hover:translate-x-2">→</span>
            </div>
          </Link>
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
              <p className="font-sans text-[16px] md:text-[16px] font-medium text-[#f0e8d4] whitespace-pre-line leading-[1.4] relative z-10">
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
          <p className="font-sans text-[16px] md:text-[16px] font-bold text-[#C9A15D] tracking-[0.15em] uppercase mb-4">
            CAN'T FIND WHAT YOU'RE LOOKING FOR?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-medium text-[#f0e8d4] leading-tight mb-5">
            Let's Create Something<br />Truly Yours
          </h2>
          <p className="font-sans text-[16px] text-[#a3a3a3] leading-relaxed mb-8 max-w-[420px]">
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
