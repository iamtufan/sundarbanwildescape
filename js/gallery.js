/**
 * Sundarban Wild Escape - Expedition Gallery & Accessible Lightbox Engine
 * Handles category filtering, masonry grid rendering, full-screen lightbox modal,
 * touch/keyboard navigation (Esc, Arrow Left, Arrow Right).
 */

import { GALLERY_DATA } from './packages-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');

  // Lightbox DOM Elements
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxLocation = document.getElementById('lightboxLocation');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentCategory = 'all';
  let activeItems = [...GALLERY_DATA];
  let currentIndex = 0;

  // 1. Render Gallery Grid
  const renderGallery = () => {
    if (!galleryGrid) return;

    activeItems = GALLERY_DATA.filter(item => {
      return currentCategory === 'all' || item.category === currentCategory;
    });

    galleryGrid.innerHTML = activeItems.map((item, index) => `
      <div 
        class="group relative rounded-xl overflow-hidden border border-[#DCE6DF] bg-white cursor-pointer card-hover-lift break-inside-avoid mb-6" 
        data-index="${index}"
      >
        <div class="overflow-hidden image-zoom-container">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            loading="lazy" 
            class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#0A211B]/90 via-[#0A211B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span class="text-[11px] font-bold uppercase tracking-widest text-[#C8A66B] mb-1">
            ${item.location} • ${item.categoryLabel}
          </span>
          <h3 class="text-lg font-serif font-bold text-white mb-1.5">
            ${item.title}
          </h3>
          <p class="text-xs text-[#DCE6DF]/90 line-clamp-2 mb-3">
            ${item.caption}
          </p>
          <div class="flex items-center text-xs font-semibold text-white/90 gap-1.5">
            <span>View Full Frame</span>
            <svg class="w-4 h-4 text-[#C8A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click handlers to items
    galleryGrid.querySelectorAll('[data-index]').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(idx);
      });
    });
  };

  // 2. Lightbox Open / Update / Close
  const openLightbox = (index) => {
    if (!lightbox || activeItems.length === 0) return;
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  const updateLightboxContent = () => {
    const item = activeItems[currentIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.title;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxLocation) lightboxLocation.textContent = `${item.location} • ${item.categoryLabel}`;
    if (lightboxCounter) lightboxCounter.textContent = `${currentIndex + 1} of ${activeItems.length}`;
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % activeItems.length;
    updateLightboxContent();
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + activeItems.length) % activeItems.length;
    updateLightboxContent();
  };

  // 3. Event Listeners for Filters
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-[#123B2A]', 'text-[#F7F3E9]', 'border-[#123B2A]');
        b.classList.add('bg-white', 'text-[#202722]', 'border-[#DCE6DF]');
      });
      btn.classList.add('bg-[#123B2A]', 'text-[#F7F3E9]', 'border-[#123B2A]');
      btn.classList.remove('bg-white', 'text-[#202722]', 'border-[#DCE6DF]');
      currentCategory = btn.getAttribute('data-category');
      renderGallery();
    });
  });

  // 4. Lightbox Controls
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

  // Close on backdrop click
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Initial render
  renderGallery();
});

