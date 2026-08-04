import { X } from 'lucide-react';
import ContactForm from './ContactForm';
import { useModal } from '../context/ModalContext';
import { useEffect } from 'react';

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useModal();

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeContactModal();
      }
    };
    if (isContactModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen, closeContactModal]);

  if (!isContactModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={closeContactModal}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-[#C9A15D]/40 shadow-2xl rounded-sm p-8 z-10 animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={closeContactModal}
          className="absolute top-4 right-4 text-[#e8e6e3] hover:text-[#C9A15D] transition-colors"
          aria-label="Close Modal"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <p className="eyebrow-label mb-2 flex items-center gap-4 text-[#C9A15D]">
            SEND US A MESSAGE <span className="inline-block w-8 h-px bg-[#C9A15D]" />
          </p>
          <h2 className="font-heading text-2xl text-white">Let's Talk</h2>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}
