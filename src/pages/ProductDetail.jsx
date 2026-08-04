import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ChevronLeft, CheckCircle2 } from 'lucide-react'
import { productsData } from '../data/productsData'
import { useModal } from '../context/ModalContext'

function SectionDivider() {
  return (
    <div className="w-full h-[1px]" style={{ backgroundColor: 'rgba(201, 161, 93, 0.3)' }} />
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = productsData[slug]
  const { openContactModal } = useModal()

  if (!product) {
    return <Navigate to="/products" replace />
  }

  return (
    <main className="bg-[#050505] min-h-screen text-[#e5e5e5] pt-[116px]">
      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[45vh] flex flex-col justify-center items-center overflow-hidden border-b border-[#C9A15D]/50">
        <div className="absolute inset-0 z-0">
          <img
            src={product.heroImg}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050505]/60" />
        </div>
        
        <div className="relative z-10 section-container pt-20 pb-12 min-h-[45vh] flex flex-col justify-center items-center text-center">
          <Link
            to="/products"
            className="absolute top-6 sm:top-10 left-4 sm:left-6 lg:left-14 inline-flex items-center gap-2 text-white text-[10px] sm:text-[12px] font-bold tracking-widest uppercase hover:-translate-x-1 transition-transform"
          >
            <ChevronLeft size={16} /> Back to Products
          </Link>
          
          <div className="max-w-3xl flex flex-col items-center mt-4 sm:mt-0">
            <p className="text-[#C9A15D] text-[12px] sm:text-[14px] lg:text-[16px] font-bold tracking-[0.1em] uppercase mb-4 flex items-center gap-2 sm:gap-3 justify-center">
              {product.subtitle}
            </p>
            
            <h1 
              className="font-heading font-medium text-white leading-[1.2] tracking-wide whitespace-pre-line px-4"
              style={{ fontSize: 'clamp(28px, 6vw, 56px)',color:"#f0e8d4ff" }}
            >
              {product.title}
            </h1>
            
            <div className="flex items-center gap-2 sm:gap-3 w-48 sm:w-64 my-6 sm:my-8">
              <div className="h-px bg-[#C9A15D]/60 flex-1" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#C9A15D] rotate-45 flex-shrink-0" />
              <div className="h-px bg-[#C9A15D]/60 flex-1" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTENT SECTION ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image with Luxury Framing */}
          <div className="relative group w-full max-w-md mx-auto lg:max-w-none">
            {/* Background offset frame */}
            <div className="absolute inset-0 border border-[#C9A15D]/30 translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden border border-[#C9A15D] z-10 p-2 bg-[#0a0a0a]">
              <img
                src={product.heroImg}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#C9A15D] z-20"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#C9A15D] z-20"></div>
          </div>

          {/* Right: Text & Details */}
          <div className="flex flex-col">
            <h2 
              className="font-heading font-semibold text-[#C9A15D] leading-tight mb-8"
              style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
            >
              {product.heading || product.title.replace('\n', ' ')}
            </h2>
            
            <p className="font-sans text-[15px] lg:text-[16px] text-text-paragraph leading-relaxed mb-6">
              {product.description}
            </p>
            
            <p className="font-sans text-[15px] lg:text-[16px] text-text-paragraph leading-relaxed mb-12">
              {product.extendedDescription}
            </p>

            {/* Features Grid */}
            <div className="mb-12">
              <p className="eyebrow-label mb-6">Key Specifications</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <CheckCircle2 className="text-[#C9A15D] flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" size={22} />
                    <div>
                      <h4 className="font-sans font-semibold text-[#f0e8d4] text-[14px] uppercase tracking-wider mb-1">{feature.title}</h4>
                      <p className="font-sans text-text-paragraph text-[13px] leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#C9A15D]/20">
              <button
                onClick={openContactModal}
                className="inline-flex items-center gap-3 font-sans font-bold text-[12px] tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:opacity-90 w-full sm:w-auto justify-center"
                style={{ background: 'linear-gradient(90deg, #E6C78A 0%, #C9A15D 100%)', color: '#050505' }}
              >
                Inquire About Collection <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
    </main>
  )
}
