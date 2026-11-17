/**
 * Sundarban Wild Escape - Core Global JavaScript
 * Handles navigation header transitions, mobile drawer, trip planner interactions,
 * floating WhatsApp button, and global UI enhancements.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide icons if available
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // 2. Global Header Scroll Effect
  const header = document.getElementById('mainHeader');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('bg-[#0A211B]/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-[#DCE6DF]/10', 'py-3');
        header.classList.remove('bg-transparent', 'py-5');
      } else {
        header.classList.remove('bg-[#0A211B]/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-[#DCE6DF]/10', 'py-3');
        header.classList.add('bg-transparent', 'py-5');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger initial check
  }

  // 3. Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');

  const openMobileMenu = () => {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.remove('translate-x-full');
    if (mobileNavBackdrop) {
      mobileNavBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      mobileNavBackdrop.classList.add('opacity-100');
    }
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.add('translate-x-full');
    if (mobileNavBackdrop) {
      mobileNavBackdrop.classList.remove('opacity-100');
      mobileNavBackdrop.classList.add('opacity-0', 'pointer-events-none');
    }
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }
  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close mobile drawer when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavDrawer && !mobileNavDrawer.classList.contains('translate-x-full')) {
      closeMobileMenu();
    }
  });

  // 4. Quick Trip-Planner on Homepage
  const quickTripForm = document.getElementById('quickTripForm');
  if (quickTripForm) {
    quickTripForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const duration = document.getElementById('quickDuration')?.value || '';
      const guests = document.getElementById('quickGuests')?.value || '2';
      const travelDate = document.getElementById('quickDate')?.value || '';

      const queryParams = new URLSearchParams();
      if (duration && duration !== 'all') queryParams.append('duration', duration);
      if (guests) queryParams.append('guests', guests);
      if (travelDate) queryParams.append('date', travelDate);

      window.location.href = `packages.html?${queryParams.toString()}`;
    });
  }

  // 5. Dynamic Footer Year
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = currentYear;
  });

  // 6. Global Quick WhatsApp Booking triggers
  document.querySelectorAll('[data-whatsapp-inquiry]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const packageName = btn.getAttribute('data-package-name') || 'Curated Safari Expedition';
      const msg = `Hello Sundarban Wild Escape, I am interested in inquiring about the "${packageName}". Please share itinerary details, dates, and availability.`;
      const url = `https://wa.me/919564846891?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  // 7. Automatic 3-Image Banner Slider with Mobile Touch Swipe
  const initHeroSlider = () => {
    const heroSlider = document.getElementById('heroSlider');
    if (!heroSlider) return;

    const slides = heroSlider.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('#sliderDots .slider-dot');
    const prevBtn = document.getElementById('sliderPrevBtn');
    const nextBtn = document.getElementById('sliderNextBtn');

    if (!slides.length) return;

    let currentIndex = 0;
    let slideInterval = null;
    const intervalDuration = 5000; // 5 seconds per slide

    const updateSlide = (newIndex) => {
      // Normalize index (wrap around)
      if (newIndex >= slides.length) {
        currentIndex = 0;
      } else if (newIndex < 0) {
        currentIndex = slides.length - 1;
      } else {
        currentIndex = newIndex;
      }

      // Update slide elements
      slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
          slide.classList.add('active', 'opacity-100');
          slide.classList.remove('opacity-0', 'pointer-events-none');
        } else {
          slide.classList.remove('active', 'opacity-100');
          slide.classList.add('opacity-0', 'pointer-events-none');
        }
      });

      // Update dots indicator
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.classList.remove('active');
          dot.removeAttribute('aria-current');
        }
      });
    };

    const nextSlide = () => {
      updateSlide(currentIndex + 1);
    };

    const prevSlide = () => {
      updateSlide(currentIndex - 1);
    };

    const startAutoSlide = () => {
      stopAutoSlide();
      slideInterval = setInterval(nextSlide, intervalDuration);
    };

    const stopAutoSlide = () => {
      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }
    };

    const resetAutoSlide = () => {
      stopAutoSlide();
      startAutoSlide();
    };

    // Controls listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
      });
    }

    // Dot indicators click
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        updateSlide(idx);
        resetAutoSlide();
      });
    });

    // Pause on hover on desktop
    const heroSection = document.getElementById('heroSection') || heroSlider;
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);

    // Mobile touch swipe gestures
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Ensure horizontal swipe is dominant and exceeds threshold
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          // Swipe left -> next slide
          nextSlide();
        } else {
          // Swipe right -> prev slide
          prevSlide();
        }
        resetAutoSlide();
      }
    };

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (document.activeElement && (heroSection.contains(document.activeElement) || document.activeElement === document.body)) {
        if (e.key === 'ArrowRight') {
          nextSlide();
          resetAutoSlide();
        } else if (e.key === 'ArrowLeft') {
          prevSlide();
          resetAutoSlide();
        }
      }
    });

    // Initialize initial state and start auto-sliding
    updateSlide(0);
    startAutoSlide();
  };

  initHeroSlider();
});

