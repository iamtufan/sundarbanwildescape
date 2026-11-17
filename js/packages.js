/**
 * Sundarban Wild Escape - Tour Catalog Filtering & Rendering Engine
 * Filters packages dynamically by Duration, Travel Style, and Search query.
 */

import { PACKAGES } from './packages-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('packagesGrid');
  const durationFilters = document.querySelectorAll('.filter-duration');
  const styleFilters = document.querySelectorAll('.filter-style');
  const searchInput = document.getElementById('packageSearch');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const resultsCount = document.getElementById('resultsCount');

  let currentDuration = 'all';
  let currentStyle = 'all';
  let searchQuery = '';

  // 1. Read URL Parameters for pre-selection (e.g. from quick planner)
  const urlParams = new URLSearchParams(window.location.search);
  const initialDuration = urlParams.get('duration');
  if (initialDuration) {
    currentDuration = initialDuration;
    durationFilters.forEach(btn => {
      if (btn.getAttribute('data-duration') === initialDuration) {
        btn.classList.add('bg-[#C8A66B]', 'text-[#0A211B]', 'border-[#C8A66B]', 'font-bold');
        btn.classList.remove('bg-[#0A211B]', 'text-[#DCE6DF]', 'border-[#DCE6DF]/20');
      } else {
        btn.classList.remove('bg-[#C8A66B]', 'text-[#0A211B]', 'border-[#C8A66B]', 'font-bold');
        btn.classList.add('bg-[#0A211B]', 'text-[#DCE6DF]', 'border-[#DCE6DF]/20');
      }
    });
  }

  // Visual mapping for overlapping circular card bubble thumbnails (from reference design)
  const BUBBLE_MAP = {
    'day-explorer': ['assets/images/boatwithtraveler.jpg', 'assets/images/corcodile.jpg'],
    'mangrove-classic-2d1n': ['assets/images/morningforest.jpg', 'assets/images/jhumur dance.jpg'],
    'wilderness-signature-3d2n': ['assets/images/boatwithtraveler.jpg', 'assets/images/forest1.jpg'],
    'birdwatching-photography': ['assets/images/corcodile.jpg', 'assets/images/fishcatching.jpg'],
    'private-family-cruise': ['assets/images/jhumur dance.jpg', 'assets/images/deer.jpg'],
    'honeymoon-retreat': ['assets/images/forest2.jpg', 'assets/images/morningforest.jpg']
  };

  // 2. Package Card Template Generator
  const renderCard = (pkg) => {
    const bubbles = BUBBLE_MAP[pkg.id] || ['assets/images/boatwithtraveler.jpg', 'assets/images/forest1.jpg'];

    return `
      <article class="bg-[#0D2A20] rounded-3xl overflow-hidden border border-[#DCE6DF]/20 shadow-xl card-hover-lift flex flex-col justify-between" data-duration="${pkg.durationCategory}" data-style="${pkg.style}">
        <div>
          <!-- Thumbnail & Overlapping Circular Bubbles -->
          <div class="relative h-60 overflow-hidden">
            <img 
              src="${pkg.thumbnail}" 
              alt="${pkg.title}" 
              loading="lazy" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0D2A20] via-transparent to-transparent"></div>
            
            <!-- Top Badges -->
            <div class="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              <span class="bg-[#123B2A]/90 backdrop-blur-sm text-[#F7F3E9] text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border border-[#DCE6DF]/20">
                ${pkg.duration}
              </span>
              ${pkg.badge ? `
                <span class="bg-[#C8A66B] text-[#0A211B] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  ${pkg.badge}
                </span>
              ` : ''}
            </div>

            <!-- Overlapping Circular Thumbnails (Signature Reference Style) -->
            <div class="absolute -bottom-6 left-6 flex items-center z-10">
              <div class="w-14 h-14 rounded-full border-2 border-white shadow-xl overflow-hidden bg-[#0A211B]">
                <img src="${bubbles[0]}" alt="Highlight 1" class="w-full h-full object-cover">
              </div>
              <div class="w-14 h-14 -ml-4 rounded-full border-2 border-[#C8A66B] shadow-xl overflow-hidden bg-[#0A211B]">
                <img src="${bubbles[1]}" alt="Highlight 2" class="w-full h-full object-cover">
              </div>
            </div>
          </div>

          <!-- Body Content -->
          <div class="p-6 md:p-8 pt-8">
            
            <!-- Amenity Icons Strip -->
            <div class="flex items-center justify-between text-[#C8A66B] bg-[#0A211B]/80 py-2.5 px-4 rounded-xl border border-[#DCE6DF]/15 mb-5 text-xs">
              <div class="flex items-center gap-1" title="Accommodation / Rest Cabins">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <div class="flex items-center gap-1" title="AC Transport">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </div>
              <div class="flex items-center gap-1" title="All Fresh Meals">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <div class="flex items-center gap-1" title="Safari Cruiser Vessel">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div class="flex items-center gap-1" title="Forest Permit & Naturalist">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
            </div>

            <!-- Title & Excerpt -->
            <h3 class="text-2xl font-serif font-bold text-white mb-2 leading-snug">
              <a href="package-details.html?id=${pkg.id}" class="hover:text-[#C8A66B] transition-colors">
                ${pkg.title}
              </a>
            </h3>

            <p class="text-xs sm:text-sm text-[#DCE6DF]/80 leading-relaxed mb-6 font-light line-clamp-3">
              ${pkg.summary}
            </p>

            <!-- Price & Details Button Row -->
            <div class="flex items-center justify-between border-t border-[#DCE6DF]/15 pt-4">
              <div>
                <span class="text-[10px] text-[#C8A66B] uppercase font-bold block">Starting from</span>
                <span class="text-xl font-serif font-bold text-white">${pkg.priceFormatted}</span>
                <span class="text-[10px] text-[#DCE6DF]/70">/ person</span>
              </div>
              <div class="flex items-center gap-2">
                <a 
                  href="https://wa.me/919564846891?text=${encodeURIComponent(`Hello Sundarban Wild Escape, I want to inquire about the package: "${pkg.title}" (${pkg.duration}).`)}"
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="p-2.5 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/20 transition-all"
                  title="Inquire directly on WhatsApp"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
                <a href="package-details.html?id=${pkg.id}" class="btn-gold py-2.5 px-5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:scale-105 transition-all">
                  <span>View Details</span>
                  <span class="text-base leading-none">➔</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>
    `;
  };

  // 3. Filtering Logic
  const filterAndRender = () => {
    if (!container) return;

    const filtered = PACKAGES.filter(pkg => {
      // Duration Match
      const matchesDuration = currentDuration === 'all' || pkg.durationCategory === currentDuration;
      // Style Match
      const matchesStyle = currentStyle === 'all' || pkg.style === currentStyle;
      // Search Match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        pkg.title.toLowerCase().includes(query) ||
        pkg.summary.toLowerCase().includes(query) ||
        pkg.watchtowersCovered.some(w => w.toLowerCase().includes(query)) ||
        pkg.keyHighlights.some(h => h.toLowerCase().includes(query));

      return matchesDuration && matchesStyle && matchesSearch;
    });

    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} of ${PACKAGES.length} curated expeditions`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 px-6 text-center bg-white rounded-2xl border border-[#DCE6DF]">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F7F3E9] flex items-center justify-center text-[#426B50]">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-serif font-bold text-[#0A211B] mb-2">No expeditions match your current filters</h3>
          <p class="text-[#202722]/80 text-sm max-w-md mx-auto mb-6">
            Try adjusting your duration or style selections, or contact our lead expedition director for a bespoke custom river charter.
          </p>
          <button id="clearFiltersInline" class="btn-gold py-2.5 px-6 rounded-lg text-sm font-semibold">
            Reset All Filters
          </button>
        </div>
      `;
      document.getElementById('clearFiltersInline')?.addEventListener('click', resetAll);
      return;
    }

    container.innerHTML = filtered.map(renderCard).join('');
  };

  // 4. Event Listeners for Filters
  durationFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      durationFilters.forEach(b => {
        b.classList.remove('bg-[#C8A66B]', 'text-[#0A211B]', 'border-[#C8A66B]', 'font-bold');
        b.classList.add('bg-[#0A211B]', 'text-[#DCE6DF]', 'border-[#DCE6DF]/20');
      });
      btn.classList.add('bg-[#C8A66B]', 'text-[#0A211B]', 'border-[#C8A66B]', 'font-bold');
      btn.classList.remove('bg-[#0A211B]', 'text-[#DCE6DF]', 'border-[#DCE6DF]/20');
      currentDuration = btn.getAttribute('data-duration');
      filterAndRender();
    });
  });

  styleFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      styleFilters.forEach(b => {
        b.classList.remove('bg-[#C8A66B]', 'text-[#0A211B]', 'border-[#C8A66B]', 'font-bold');
        b.classList.add('bg-[#0A211B]', 'text-[#DCE6DF]', 'border-[#DCE6DF]/20');
      });
      btn.classList.add('bg-[#C8A66B]', 'text-[#0A211B]', 'border-[#C8A66B]', 'font-bold');
      btn.classList.remove('bg-[#0A211B]', 'text-[#DCE6DF]', 'border-[#DCE6DF]/20');
      currentStyle = btn.getAttribute('data-style');
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  const resetAll = () => {
    currentDuration = 'all';
    currentStyle = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';

    durationFilters.forEach((b, index) => {
      if (index === 0) {
        b.classList.add('bg-[#C8A66B]', 'text-[#0A211B]', 'border-[#C8A66B]', 'font-bold');
        b.classList.remove('bg-[#0A211B]', 'text-[#DCE6DF]', 'border-[#DCE6DF]/20');
      } else {
        b.classList.remove('bg-[#C8A66B]', 'text-[#0A211B]', 'border-[#C8A66B]', 'font-bold');
        b.classList.add('bg-[#0A211B]', 'text-[#DCE6DF]', 'border-[#DCE6DF]/20');
      }
    });

    styleFilters.forEach((b, index) => {
      if (index === 0) {
        b.classList.add('bg-[#C8A66B]', 'text-[#0A211B]', 'border-[#C8A66B]', 'font-bold');
        b.classList.remove('bg-[#0A211B]', 'text-[#DCE6DF]', 'border-[#DCE6DF]/20');
      } else {
        b.classList.remove('bg-[#C8A66B]', 'text-[#0A211B]', 'border-[#C8A66B]', 'font-bold');
        b.classList.add('bg-[#0A211B]', 'text-[#DCE6DF]', 'border-[#DCE6DF]/20');
      }
    });

    filterAndRender();
  };

  if (resetBtn) {
    resetBtn.addEventListener('click', resetAll);
  }

  // Initial Render
  filterAndRender();
});

