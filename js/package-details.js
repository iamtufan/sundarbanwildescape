/**
 * Sundarban Wild Escape - Master Package Details Engine
 * Comprehensive Google-optimized expedition layout packed with authentic imagery,
 * day-by-day visual itineraries, traditional culinary menus, vessel architecture,
 * watchtower guides, interactive photo lightbox, live guest pricing, and WhatsApp handoff.
 */

import { PACKAGES } from './packages-data.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Resolve Package from URL (?id=...)
  const urlParams = new URLSearchParams(window.location.search);
  const packageId = urlParams.get('id') || 'wilderness-signature-3d2n';

  let pkg = PACKAGES.find(p => p.id === packageId);
  if (!pkg) {
    pkg = PACKAGES.find(p => p.id === 'wilderness-signature-3d2n') || PACKAGES[0];
  }

  // 2. Update Browser Title & Meta Description
  document.title = `${pkg.title} (${pkg.duration}) | Sundarban Wild Escape`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${pkg.title}: ${pkg.summary.slice(0, 150)}... Book directly with local naturalists on +91 9564846891.`);
  }

  // Helper: Curated visual mapping per package
  const PACKAGE_VISUALS = {
    'day-explorer': {
      heroImage: 'assets/images/jangleboatiing.jpg',
      dayImages: [
        { img: 'assets/images/boatwithtraveler.jpg', title: 'Dawn Embarkation & River Navigation', caption: 'Motorized eco-cruiser cruising past the Gomor and Bidya river junctions.' }
      ],
      gallery: [
        { src: 'assets/images/jangleboatiing.jpg', title: 'Silent River Cruise', caption: 'Handcrafted cruiser navigating the tranquil mangrove creeks of Sajnekhali.' },
        { src: 'assets/images/boatwithtraveler.jpg', title: 'Open Viewing Deck', caption: 'Guests observing estuarine banks from the upper shaded observation platform.' },
        { src: 'assets/images/tiger.jpg', title: 'Royal Bengal Tiger', caption: 'Wild tiger patrol on the muddy low-tide banks of Sundarbans.' },
        { src: 'assets/images/corcodile.jpg', title: 'Estuarine Crocodile', caption: 'Massive saltwater crocodile basking under the delta morning sun.' },
        { src: 'assets/images/deer.jpg', title: 'Spotted Chital Deer', caption: 'Herds grazing peacefully near the Sajnekhali freshwater pond.' },
        { src: 'assets/images/morningforest.jpg', title: 'Mangrove Sunrise', caption: 'Misty golden hour over the dense UNESCO World Heritage mangrove canopy.' }
      ]
    },
    'mangrove-classic-2d1n': {
      heroImage: 'assets/images/boatwithtraveler.jpg',
      dayImages: [
        { img: 'assets/images/boatwithtraveler.jpg', title: 'Day 1: Mangrove Gateway & Sunset River Cruise', caption: 'Boarding at Godkhali, island transfer, and golden hour on the Gomor estuary.' },
        { img: 'assets/images/tiger.jpg', title: 'Day 2: Sudhanyakhali Watchtower & Creek Safaris', caption: 'Early morning predator tracking through Pirkhali, Gajikhali, and Sudhanyakhali.' }
      ],
      gallery: [
        { src: 'assets/images/boatwithtraveler.jpg', title: 'Riverboat Expedition', caption: 'Discerning guests cruising through the Sundarban Tiger Reserve buffer channels.' },
        { src: 'assets/images/tiger.jpg', title: 'Apex Predator', caption: 'Magnificent Royal Bengal Tiger prowling along the muddy shoreline.' },
        { src: 'assets/images/jhumur dance.jpg', title: 'Tribal Jhumur Dance', caption: 'Mesmerizing evening folk performance by local Santhali artists under lantern light.' },
        { src: 'assets/images/deer.jpg', title: 'Spotted Deer Herd', caption: 'Chital deer foraging alertly on pneumatophore mangrove roots.' },
        { src: 'assets/images/corcodile.jpg', title: 'Saltwater Crocodile', caption: 'Prehistoric estuarine crocodile basking on tidal sandbank at low tide.' },
        { src: 'assets/images/jangleboatiing.jpg', title: 'Mangrove Canal Cruising', caption: 'Quiet cruising under the overarching canopy of Sundari and Gewa trees.' },
        { src: 'assets/images/forest1.jpg', title: 'Pneumatophore Forest', caption: 'Intricate breathing roots characteristic of the Sundarbans mangrove biosphere.' },
        { src: 'assets/images/morningforest.jpg', title: 'Misty Dawn Canopy', caption: 'First morning light penetrating the mystical tidal forest.' }
      ]
    },
    'wilderness-signature-3d2n': {
      heroImage: 'assets/images/tiger.jpg',
      dayImages: [
        { img: 'assets/images/boatwithtraveler.jpg', title: 'Day 1: Embarkation, Sajnekhali & Twilight on the River', caption: 'Private boarding at Godkhali, check-in to riverside eco-cottages, and evening naturalist lecture.' },
        { img: 'assets/images/tiger.jpg', title: 'Day 2: Sudhanyakhali, Dobanki Canopy Walk & Netidhopani', caption: 'Core reserve safari, 496m elevated canopy walk, and 400-year-old historic Shiva temple ruins.' },
        { img: 'assets/images/fishcatching.jpg', title: 'Day 3: Narrow Creeks, Village Mawalis & Return', caption: 'Silent dawn creek cruising in Chokhakhali, traditional honey hunter lore, and return to Kolkata.' }
      ],
      gallery: [
        { src: 'assets/images/tiger.jpg', title: 'Royal Bengal Tiger', caption: 'The Lord of the Mangroves emerging quietly onto a low-tide mudflat.' },
        { src: 'assets/images/tiger2.jpg', title: 'Tiger Alert in the Fringe', caption: 'Direct gaze of the apex predator observed from the safety of our safari vessel.' },
        { src: 'assets/images/corcodile.jpg', title: 'Saltwater Crocodile', caption: 'Basking estuarine crocodile along the muddy bends of Pirkhali.' },
        { src: 'assets/images/deer.jpg', title: 'Axis Deer at Waterhole', caption: 'Spotted chital deer alertly quenching thirst at the sweet-water pond.' },
        { src: 'assets/images/jhumur dance.jpg', title: 'Jhumur Folk Performance', caption: 'Hypnotic traditional tribal music and folk dance in the resort courtyard.' },
        { src: 'assets/images/jangleboatiing.jpg', title: 'Custom Safari Cruiser', caption: 'Our motorized eco-cruiser designed specifically for silent mangrove navigation.' },
        { src: 'assets/images/honeycollection.jpg', title: 'Traditional Honey Hunter', caption: 'Mawali honey collector navigating the dense hetal palm forests.' },
        { src: 'assets/images/fishcatching.jpg', title: 'Delta Fishermen', caption: 'Centuries-old cast net fishing in the tidal backwaters of the Sundarbans.' }
      ]
    },
    'birdwatching-photography': {
      heroImage: 'assets/images/morningforest.jpg',
      dayImages: [
        { img: 'assets/images/morningforest.jpg', title: 'Day 1: Arrival & Twilight Avifauna Watch', caption: 'Silent dawn drift in Pakhiralay bird creek focusing on kingfishers and raptors.' },
        { img: 'assets/images/corcodile.jpg', title: 'Day 2: Intensive Core Channel & Hide Photography', caption: 'Paced with tidal low-water for mudflat waders, white-bellied sea eagles, and basking reptiles.' },
        { img: 'assets/images/fishcatching.jpg', title: 'Day 3: Narrow Creek Macro & Mangrove Reflections', caption: 'Chokhakhali backwaters capturing rare Brown-winged Kingfishers and delta light.' }
      ],
      gallery: [
        { src: 'assets/images/morningforest.jpg', title: 'Delta Dawn Light', caption: 'Ethereal morning conditions offering ideal soft light for telephoto lenses.' },
        { src: 'assets/images/corcodile.jpg', title: 'Basking Crocodile', caption: 'Texture and scale of estuarine crocodile captured from water level.' },
        { src: 'assets/images/tiger2.jpg', title: 'Wild Tiger in Brush', caption: 'Intimate portrait of Bengal tiger camouflaged behind mangrove foliage.' },
        { src: 'assets/images/deer.jpg', title: 'Alert Chital Doe', caption: 'Spotted deer listening intently to alarm calls in Sudhanyakhali.' },
        { src: 'assets/images/fishcatching.jpg', title: 'Artisanal Netting', caption: 'Golden reflections as local fisherman casts traditional net on calm creek.' },
        { src: 'assets/images/forest2.jpg', title: 'Tidal Backwater Mirror', caption: 'Mirror-like mangrove waterway reflections in the morning quiet.' }
      ]
    },
    'private-family-cruise': {
      heroImage: 'assets/images/boatwithtraveler.jpg',
      dayImages: [
        { img: 'assets/images/boatwithtraveler.jpg', title: 'Day 1: Private Boarding, Relaxation & Village Life', caption: 'Custom-paced cruise with private chef, family games on deck, and sunset tea.' },
        { img: 'assets/images/deer.jpg', title: 'Day 2: Watchtower Safaris & Farewell River Feast', caption: 'Gentle watchtower strolls, child-friendly wildlife briefings, and gourmet Bengali lunch.' }
      ],
      gallery: [
        { src: 'assets/images/boatwithtraveler.jpg', title: 'Family on River Deck', caption: 'Multi-generational travelers relaxing together on the upper observation terrace.' },
        { src: 'assets/images/jangleboatiing.jpg', title: 'Private Chartered Vessel', caption: 'Dedicated boat chartered exclusively for your party with private crew.' },
        { src: 'assets/images/jhumur dance.jpg', title: 'Private Cultural Night', caption: 'Special village Jhumur dance arranged exclusively for your family.' },
        { src: 'assets/images/deer.jpg', title: 'Deer at Sudhanyakhali', caption: 'Safe wildlife observation from protected elevated watchtowers.' },
        { src: 'assets/images/tiger.jpg', title: 'Tiger on Riverbank', caption: 'Thrilling moment of observing a wild tiger from the safety of the boat.' }
      ]
    },
    'honeymoon-retreat': {
      heroImage: 'assets/images/forest2.jpg',
      dayImages: [
        { img: 'assets/images/boatwithtraveler.jpg', title: 'Day 1: Private Transfer & Riverside Cottage Check-In', caption: 'Private boat transfer, candlelit riverside dinner, and silence of the mangrove night.' },
        { img: 'assets/images/forest2.jpg', title: 'Day 2: Dobanki Canopy Walk & Sunset High Tea', caption: 'Romantic stroll on the 496m elevated canopy walk and private boat tea under twilight.' },
        { img: 'assets/images/morningforest.jpg', title: 'Day 3: Quiet Creek Cruise & Return', caption: 'Sunrise coffee on the upper deck, leisurely breakfast, and smooth return journey.' }
      ],
      gallery: [
        { src: 'assets/images/forest2.jpg', title: 'Secluded Creek Mirror', caption: 'Quiet waterways and untouched mangrove nature for tranquil moments together.' },
        { src: 'assets/images/morningforest.jpg', title: 'Misty Dawn Romance', caption: 'Sun rising over the wild tidal delta witnessed from your private cabin.' },
        { src: 'assets/images/tiger.jpg', title: 'Wild Mangrove Tiger', caption: 'Unforgettable wildlife encounter in the pristine wilderness of the Sundarbans.' },
        { src: 'assets/images/boatwithtraveler.jpg', title: 'Quiet River Deck', caption: 'Sip fresh Darjeeling tea as cool river breezes drift through the open deck.' },
        { src: 'assets/images/jangleboatiing.jpg', title: 'Handcrafted Wooden Cruiser', caption: 'Cruising gently through calm estuarine backwaters.' }
      ]
    }
  };

  const currentVisuals = PACKAGE_VISUALS[pkg.id] || PACKAGE_VISUALS['wilderness-signature-3d2n'];
  const galleryItems = currentVisuals.gallery || [];

  // Update mobile bottom sticky bar price
  const mobileBarPrice = document.getElementById('mobileBarPrice');
  if (mobileBarPrice) mobileBarPrice.textContent = pkg.priceFormatted;

  // 3. Render Hero Banner
  const heroContainer = document.getElementById('packageHero');
  if (heroContainer) {
    heroContainer.innerHTML = `
      <section class="relative min-h-[520px] md:min-h-[580px] flex items-end pt-32 pb-16 px-6 lg:px-12 bg-cover bg-center overflow-hidden" style="background-image: linear-gradient(180deg, rgba(10,33,27,0.35) 0%, rgba(10,33,27,0.85) 60%, rgba(10,33,27,0.98) 100%), url('${currentVisuals.heroImage}');">
        
        <!-- Ambient forest gradient accent -->
        <div class="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto w-full relative z-10">
          
          <!-- Breadcrumb navigation -->
          <nav class="flex flex-wrap items-center text-xs text-[#DCE6DF]/80 mb-4 gap-2">
            <a href="index.html" class="hover:text-white transition-colors">Home</a>
            <span class="text-[#C8A66B]">&bull;</span>
            <a href="packages.html" class="hover:text-white transition-colors">Curated Expeditions</a>
            <span class="text-[#C8A66B]">&bull;</span>
            <span class="text-[#C8A66B] font-semibold">${pkg.title}</span>
          </nav>

          <!-- Badges & Ratings Row -->
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="bg-[#C8A66B] text-[#0A211B] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              ${pkg.badge || pkg.duration}
            </span>
            <span class="bg-white/10 backdrop-blur-md text-[#F7F3E9] text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
              ${pkg.styleLabel}
            </span>
            <div class="flex items-center gap-1 bg-[#123B2A]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#DCE6DF]/20 text-xs text-white">
              <span class="text-[#C8A66B]">★★★★★</span>
              <span class="font-bold">4.9 / 5</span>
              <span class="text-[#DCE6DF]/70 text-[10px] hidden sm:inline">(420+ Verified Reviews)</span>
            </div>
            <span class="text-xs text-[#DCE6DF]/80 flex items-center gap-1.5 ml-auto">
              <svg class="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span>Forest Dept. Registered</span>
            </span>
          </div>

          <!-- Main H1 Title -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white max-w-4xl leading-[1.15] mb-4">
            ${pkg.title}
          </h1>

          <!-- Editorial Subtitle -->
          <p class="text-base sm:text-lg md:text-xl text-[#DCE6DF]/90 max-w-3xl font-light leading-relaxed mb-6">
            ${pkg.subtitle}
          </p>

          <!-- Key Quick-Metric Chips -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl pt-4 border-t border-[#DCE6DF]/20 text-xs text-white/90">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#C8A66B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span><strong>Duration:</strong> ${pkg.duration}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#C8A66B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span><strong>Group:</strong> ${pkg.groupSize}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#C8A66B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span><strong>Pace:</strong> ${pkg.physicalDemand}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#C8A66B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span><strong>Depart:</strong> ${pkg.departurePoint.split('/')[0]}</span>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // 4. Render Main Package Content Sections
  const detailsContent = document.getElementById('packageMainContent');
  if (detailsContent) {
    detailsContent.innerHTML = `
      
      <!-- SECTION: PHOTO MOSAIC SHOWCASE & LIGHTBOX LAUNCHER -->
      <section id="section-gallery" class="scroll-mt-36">
        <div class="flex items-center justify-between mb-4">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block">Visual Expedition Archive</span>
            <h2 class="font-serif text-2xl font-bold text-[#0A211B]">Moments from the Mangrove Sanctuary</h2>
          </div>
          <button id="btnOpenFullLightbox" class="text-xs font-bold text-[#123B2A] hover:text-[#C8A66B] flex items-center gap-1.5 transition-colors focus:outline-none">
            <span>View All (${galleryItems.length}) Photos</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
          </button>
        </div>

        <!-- 5-Image Mosaic Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden border border-[#DCE6DF] bg-white p-2.5 shadow-sm">
          <!-- Large Feature Image (Left 2 cols) -->
          <div class="md:col-span-2 md:row-span-2 relative h-72 md:h-full min-h-[300px] rounded-xl overflow-hidden group cursor-pointer" data-lightbox-idx="0">
            <img src="${galleryItems[0]?.src || currentVisuals.heroImage}" alt="${galleryItems[0]?.title || 'Expedition Highlight'}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
              <span class="text-[10px] uppercase tracking-widest text-[#C8A66B] font-bold">Featured View</span>
              <h3 class="text-white font-serif font-bold text-lg">${galleryItems[0]?.title || 'Wild Delta'}</h3>
              <p class="text-white/80 text-xs line-clamp-1">${galleryItems[0]?.caption || ''}</p>
            </div>
          </div>

          <!-- 4 Smaller Thumbnail Grid (Right 2 cols) -->
          ${galleryItems.slice(1, 5).map((item, idx) => `
            <div class="relative h-40 rounded-xl overflow-hidden group cursor-pointer border border-[#DCE6DF]/60" data-lightbox-idx="${idx + 1}">
              <img src="${item.src}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <span class="text-white font-serif text-xs font-bold">${item.title}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- SECTION: VITAL EXPEDITION SPECIFICATIONS STRIP -->
      <section class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-5 bg-white rounded-2xl border border-[#DCE6DF] shadow-sm text-center">
        <div class="p-2 border-r border-[#DCE6DF]/60 last:border-0">
          <span class="text-[10px] uppercase tracking-wider text-[#426B50] font-bold block mb-1">Duration</span>
          <span class="text-xs font-bold text-[#0A211B] block">${pkg.duration}</span>
        </div>
        <div class="p-2 border-r border-[#DCE6DF]/60 last:border-0">
          <span class="text-[10px] uppercase tracking-wider text-[#426B50] font-bold block mb-1">Departure</span>
          <span class="text-xs font-bold text-[#0A211B] block">Godkhali / Kolkata</span>
        </div>
        <div class="p-2 border-r border-[#DCE6DF]/60 last:border-0">
          <span class="text-[10px] uppercase tracking-wider text-[#426B50] font-bold block mb-1">Safaris</span>
          <span class="text-xs font-bold text-[#0A211B] block">Silent Eco-Cruiser</span>
        </div>
        <div class="p-2 border-r border-[#DCE6DF]/60 last:border-0">
          <span class="text-[10px] uppercase tracking-wider text-[#426B50] font-bold block mb-1">Meals</span>
          <span class="text-xs font-bold text-[#0A211B] block">All Included (Bengali)</span>
        </div>
        <div class="p-2 border-r border-[#DCE6DF]/60 last:border-0">
          <span class="text-[10px] uppercase tracking-wider text-[#426B50] font-bold block mb-1">Permits</span>
          <span class="text-xs font-bold text-[#0A211B] block">100% STR Cleared</span>
        </div>
        <div class="p-2">
          <span class="text-[10px] uppercase tracking-wider text-[#426B50] font-bold block mb-1">Naturalist</span>
          <span class="text-xs font-bold text-[#0A211B] block">Govt. Certified</span>
        </div>
      </section>

      <!-- SECTION: OVERVIEW & ETHICAL WILDLIFE STEWARDSHIP -->
      <section id="section-overview" class="scroll-mt-36 bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
        <div class="mb-6">
          <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block mb-1">Curatorial Vision</span>
          <h2 class="text-2xl md:text-3xl font-serif font-bold text-[#0A211B] mb-3">Overview & What Sets This Expedition Apart</h2>
          <p class="text-[#202722]/90 leading-relaxed text-sm md:text-base font-light">
            ${pkg.summary}
          </p>
        </div>

        <!-- Key Highlights Grid -->
        <div class="bg-[#F7F3E9] p-6 rounded-xl border border-[#DCE6DF] mb-6">
          <h3 class="text-sm font-bold uppercase tracking-wider text-[#123B2A] mb-4 flex items-center gap-2">
            <svg class="w-4 h-4 text-[#C8A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Signature Inclusions & Distinctions</span>
          </h3>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-[#202722]">
            ${pkg.keyHighlights.map(hl => `
              <li class="flex items-start">
                <svg class="w-4 h-4 text-[#C8A66B] mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                <span>${hl}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Ethical Sighting Transparency Notice -->
        <div class="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
          <svg class="w-5 h-5 text-amber-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          <div>
            <strong>Authentic Tiger Reserve Ethics:</strong> We operate strictly within legal Sundarban Tiger Reserve corridors. In compliance with National Tiger Conservation Authority (NTCA) guidelines, <em>we never guarantee tiger sightings</em>. We guarantee expert local naturalists, optimal low-tide tracking schedules, and safe, silent observation without disturbing wildlife.
          </div>
        </div>
      </section>

      <!-- SECTION: DAY-BY-DAY VISUAL ITINERARY (WITH IMAGES FOR EACH DAY) -->
      <section id="section-itinerary" class="scroll-mt-36">
        <div class="flex items-center justify-between mb-6">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block">Paced With The Tides</span>
            <h2 class="text-2xl md:text-3xl font-serif font-bold text-[#0A211B]">Day-by-Day Expedition Timeline</h2>
          </div>
          <span class="text-xs bg-[#123B2A] text-white px-3.5 py-1.5 rounded-full font-semibold">
            ${pkg.itinerary.length} ${pkg.itinerary.length === 1 ? 'Day Schedule' : 'Days Total'}
          </span>
        </div>

        <!-- Itinerary Cards with Dedicated Imagery -->
        <div class="space-y-8">
          ${pkg.itinerary.map((day, dIdx) => {
            const visualDay = currentVisuals.dayImages[dIdx] || currentVisuals.dayImages[0];
            return `
              <div class="bg-white rounded-2xl border border-[#DCE6DF] overflow-hidden shadow-sm">
                
                <!-- Day Visual Header Card -->
                <div class="relative h-48 md:h-60 overflow-hidden group">
                  <img src="${visualDay.img}" alt="${visualDay.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0A211B] via-[#0A211B]/40 to-transparent flex flex-col justify-end p-6">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="bg-[#C8A66B] text-[#0A211B] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Day ${day.dayNumber}</span>
                      <span class="text-white/80 text-xs font-light">Morning to Evening Expedition</span>
                    </div>
                    <h3 class="text-white font-serif font-bold text-xl md:text-2xl">${day.dayTitle}</h3>
                    <p class="text-[#DCE6DF]/90 text-xs mt-1 font-light max-w-xl">${visualDay.caption}</p>
                  </div>
                </div>

                <!-- Timeline Schedule Breakdown -->
                <div class="p-6 md:p-8 divide-y divide-[#DCE6DF]/60">
                  ${day.timeline.map((item, itemIdx) => `
                    <div class="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-3 sm:gap-6 items-start">
                      <div class="w-28 shrink-0">
                        <span class="inline-flex items-center gap-1.5 bg-[#F7F3E9] text-[#123B2A] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#DCE6DF]">
                          <svg class="w-3 h-3 text-[#C8A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          ${item.time}
                        </span>
                      </div>
                      <div class="flex-1">
                        <h4 class="text-sm font-bold text-[#0A211B] mb-1">${item.activity}</h4>
                        <p class="text-xs md:text-sm text-[#202722]/85 leading-relaxed">${item.description}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>

              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- SECTION: PERMITTED FOREST WATCHTOWERS & COORDINATES (WITH PHOTOS) -->
      <section id="section-watchtowers" class="scroll-mt-36 bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block mb-1">Authorized Protected Enclaves</span>
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-[#0A211B] mb-2">Permitted Forest Watchtowers & Coordinates</h2>
        <p class="text-xs md:text-sm text-[#426B50] mb-6">Operated strictly within certified Sundarban Tiger Reserve (STR) corridors.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div class="border border-[#DCE6DF] rounded-xl p-5 bg-[#F7F3E9]/50">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
              <h3 class="font-serif font-bold text-base text-[#0A211B]">Sajnekhali Watchtower & Eco-Complex</h3>
            </div>
            <p class="text-xs text-[#202722]/80 leading-relaxed mb-3">
              Forest Department headquarters, visitor orientation museum, northern river terrapin project, and fresh-water crocodile breeding pond.
            </p>
            <span class="text-[10px] text-[#426B50] font-semibold bg-white border border-[#DCE6DF] px-2 py-1 rounded">Permit HQ & Bird Observation</span>
          </div>

          <div class="border border-[#DCE6DF] rounded-xl p-5 bg-[#F7F3E9]/50">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
              <h3 class="font-serif font-bold text-base text-[#0A211B]">Sudhanyakhali Watchtower</h3>
            </div>
            <p class="text-xs text-[#202722]/80 leading-relaxed mb-3">
              Prime tiger reserve station overlooking an expansive sweet-water pond. Famous for consistent sightings of chital deer herds, monitor lizards, and wild boars.
            </p>
            <span class="text-[10px] text-[#426B50] font-semibold bg-white border border-[#DCE6DF] px-2 py-1 rounded">Highest Predator Activity Zone</span>
          </div>

          <div class="border border-[#DCE6DF] rounded-xl p-5 bg-[#F7F3E9]/50">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
              <h3 class="font-serif font-bold text-base text-[#0A211B]">Dobanki 496m Canopy Walkway</h3>
            </div>
            <p class="text-xs text-[#202722]/80 leading-relaxed mb-3">
              Thrilling 496-meter elevated walking trail enclosed by 20-foot high iron net fencing, granting a bird’s eye perspective over the dense mangrove canopy.
            </p>
            <span class="text-[10px] text-[#426B50] font-semibold bg-white border border-[#DCE6DF] px-2 py-1 rounded">Elevated Aerial Forest View</span>
          </div>

          <div class="border border-[#DCE6DF] rounded-xl p-5 bg-[#F7F3E9]/50">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
              <h3 class="font-serif font-bold text-base text-[#0A211B]">Netidhopani & Panchamukhani</h3>
            </div>
            <p class="text-xs text-[#202722]/80 leading-relaxed mb-3">
              Historical 400-year-old terracotta Shiva temple ruins steeped in Bengali folklore, alongside the breathtaking 5-river meeting point where dolphins breach.
            </p>
            <span class="text-[10px] text-[#426B50] font-semibold bg-white border border-[#DCE6DF] px-2 py-1 rounded">Special Reserve Permit Only</span>
          </div>

        </div>
      </section>

      <!-- SECTION: ARTISANAL BENGALI CULINARY EXPERIENCE (WITH PHOTO) -->
      <section id="section-culinary" class="scroll-mt-36 bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-6">
          <div class="md:col-span-7">
            <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block mb-1">Riverboat Gastronomy</span>
            <h2 class="text-2xl md:text-3xl font-serif font-bold text-[#0A211B] mb-3">Authentic Bengal Heritage Cuisine</h2>
            <p class="text-xs md:text-sm text-[#202722]/85 leading-relaxed font-light mb-4">
              Meals in the Sundarbans are an integral part of the expedition. Prepared fresh on board by native village cooks using daily morning catches from Canning market and organic island produce.
            </p>
            <div class="flex flex-wrap gap-2 text-xs">
              <span class="bg-[#F7F3E9] text-[#123B2A] border border-[#DCE6DF] px-3 py-1 rounded-full font-semibold">Fresh Estuarine Catch</span>
              <span class="bg-[#F7F3E9] text-[#123B2A] border border-[#DCE6DF] px-3 py-1 rounded-full font-semibold">Pure Veg / Jain Available</span>
              <span class="bg-[#F7F3E9] text-[#123B2A] border border-[#DCE6DF] px-3 py-1 rounded-full font-semibold">Tender Green Coconuts</span>
            </div>
          </div>
          <div class="md:col-span-5 h-56 rounded-xl overflow-hidden border border-[#DCE6DF] shadow-sm relative group">
            <img src="assets/images/boatwithtraveler.jpg" alt="Bengali River Feast" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <span class="text-white text-xs font-serif italic">Freshly Cooked Mid-River Buffet</span>
            </div>
          </div>
        </div>

        <!-- Course Breakdown Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#DCE6DF]">
          
          <div class="p-4 bg-[#F7F3E9]/60 rounded-xl border border-[#DCE6DF]">
            <span class="text-[10px] uppercase font-bold text-[#C8A66B] block mb-1">Morning & Breakfast</span>
            <h4 class="font-serif font-bold text-sm text-[#0A211B] mb-2">Dawn Refreshment</h4>
            <ul class="text-xs text-[#202722]/80 space-y-1">
              <li>• Green coconut water (Daab)</li>
              <li>• Steaming Darjeeling tea / coffee</li>
              <li>• Hot fluffy Luchi & spicy Chholar Dal</li>
              <li>• Aloo Dum & fresh Sandesh</li>
            </ul>
          </div>

          <div class="p-4 bg-[#F7F3E9]/60 rounded-xl border border-[#DCE6DF]">
            <span class="text-[10px] uppercase font-bold text-[#C8A66B] block mb-1">Mid-River Safari Lunch</span>
            <h4 class="font-serif font-bold text-sm text-[#0A211B] mb-2">Grand Bengali Thali</h4>
            <ul class="text-xs text-[#202722]/80 space-y-1">
              <li>• Fragrant Gobindobhog rice & pure Ghee</li>
              <li>• Crispy Beguni & Moong Dal</li>
              <li>• Fresh Katla Kalia / River Bhetki Paturi</li>
              <li>• Golda Chingri (Tiger Prawn) Malai Curry</li>
              <li>• Sweet Tomato Chutney & Papad</li>
            </ul>
          </div>

          <div class="p-4 bg-[#F7F3E9]/60 rounded-xl border border-[#DCE6DF]">
            <span class="text-[10px] uppercase font-bold text-[#C8A66B] block mb-1">Sunset High Tea</span>
            <h4 class="font-serif font-bold text-sm text-[#0A211B] mb-2">Estuarine Sundowner</h4>
            <ul class="text-xs text-[#202722]/80 space-y-1">
              <li>• Spiced Ginger Masala Chai</li>
              <li>• Piping hot Onion Piyaji & Veg Pakoras</li>
              <li>• Crispy Chicken Pakoras (non-veg)</li>
              <li>• Traditional butter biscuits</li>
            </ul>
          </div>

          <div class="p-4 bg-[#F7F3E9]/60 rounded-xl border border-[#DCE6DF]">
            <span class="text-[10px] uppercase font-bold text-[#C8A66B] block mb-1">Courtyard Dinner</span>
            <h4 class="font-serif font-bold text-sm text-[#0A211B] mb-2">Sanctuary Banquet</h4>
            <ul class="text-xs text-[#202722]/80 space-y-1">
              <li>• Hand-rolled soft Tawa Rotis</li>
              <li>• Steaming Basmati Pulao</li>
              <li>• Slow-cooked Desi Chicken Kosha</li>
              <li>• Paneer Butter Masala (veg option)</li>
              <li>• Traditional Mishti Doi & Rosogolla</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- SECTION: SAFARI ECO-CRUISER: ANATOMY OF A SILENT VESSEL (WITH PHOTO) -->
      <section id="section-vessel" class="scroll-mt-36 bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-5 h-64 md:h-72 rounded-xl overflow-hidden border border-[#DCE6DF] shadow-md group">
            <img src="assets/images/jangleboatiing.jpg" alt="Safari Eco-Cruiser" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div class="md:col-span-7">
            <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block mb-1">Marine Engineering</span>
            <h2 class="text-2xl md:text-3xl font-serif font-bold text-[#0A211B] mb-3">Our Safari Eco-Cruiser: Silent River Travel</h2>
            <p class="text-xs md:text-sm text-[#202722]/85 leading-relaxed font-light mb-4">
              Unlike noisy commercial launches, our customized motorized wooden cruisers are engineered with sound-dampened 4-cylinder engines that minimize water reverberation—allowing silent approach toward wildlife on muddy shores.
            </p>
            <div class="grid grid-cols-2 gap-3 text-xs text-[#202722]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#C8A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Upper 360° Teak Sun Lounge</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#C8A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Western Flush Restroom</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#C8A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Camera Charging Hubs</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#C8A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>SOLAS Lifejackets & First Aid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: WILDERNESS ECO-RESORT & LODGING EXPERIENCE (WITH PHOTO) -->
      <section id="section-stay" class="scroll-mt-36 bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-7">
            <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block mb-1">Sanctuary Accommodations</span>
            <h2 class="text-2xl md:text-3xl font-serif font-bold text-[#0A211B] mb-3">Quiet Luxury Delta Cottages</h2>
            <p class="text-xs md:text-sm text-[#202722]/85 leading-relaxed font-light mb-4">
              ${pkg.accommodations}
            </p>
            <div class="grid grid-cols-2 gap-2 text-xs text-[#202722] mb-4">
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-[#C8A66B]"></span>Air-Conditioned Cottages</span>
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-[#C8A66B]"></span>Private Riverview Balcony</span>
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-[#C8A66B]"></span>24/7 Solar Backup Power</span>
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-[#C8A66B]"></span>En-suite Hot Showers</span>
            </div>
            <div class="p-3 bg-[#F7F3E9] rounded-lg border border-[#DCE6DF] text-xs text-[#426B50]">
              <strong>Seasonal Travel Note:</strong> ${pkg.seasonalAdvice}
            </div>
          </div>
          <div class="md:col-span-5 h-60 rounded-xl overflow-hidden border border-[#DCE6DF] shadow-sm group">
            <img src="assets/images/forest1.jpg" alt="Resort Mangrove Surroundings" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- SECTION: EVENING CULTURAL FOLKLORE: JHUMUR DANCE & BONBIBI PALA (WITH PHOTO) -->
      <section id="section-culture" class="scroll-mt-36 bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-5 h-64 rounded-xl overflow-hidden border border-[#DCE6DF] shadow-md group">
            <img src="assets/images/jhumur dance.jpg" alt="Jhumur Tribal Dance Performance" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div class="md:col-span-7">
            <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block mb-1">Delta Folk Heritage</span>
            <h2 class="text-2xl md:text-3xl font-serif font-bold text-[#0A211B] mb-3">Jhumur Folk Dance & Bonbibi Pala</h2>
            <p class="text-xs md:text-sm text-[#202722]/85 leading-relaxed font-light mb-4">
              As dusk falls over the forest, experience an authentic live cultural performance by local Santhali artists. Hypnotic beats of the Madal and Dhamsa drums accompany rhythmic Jhumur dances and musical reenactments of Maa Bonbibi—the guardian deity worshipped equally by Hindu and Muslim islanders for protection against tiger attacks.
            </p>
            <div class="p-3.5 bg-[#F7F3E9] rounded-lg border border-[#DCE6DF] text-xs text-[#123B2A] flex items-center gap-2">
              <svg class="w-4 h-4 text-[#C8A66B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Direct community stewardship: 100% of performance dues go directly to native island artist families.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: INCLUSIONS VS EXCLUSIONS CHECKLIST -->
      <section id="section-inclusions" class="scroll-mt-36 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Inclusions -->
        <div class="bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">✓</div>
            <h3 class="text-xl font-serif font-bold text-[#0A211B]">What Is Included</h3>
          </div>
          <ul class="space-y-3">
            ${pkg.inclusions.map(inc => `
              <li class="flex items-start text-xs md:text-sm text-[#202722]">
                <svg class="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                <span>${inc}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Exclusions -->
        <div class="bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 font-bold">✕</div>
            <h3 class="text-xl font-serif font-bold text-[#0A211B]">What Is Excluded</h3>
          </div>
          <ul class="space-y-3">
            ${pkg.exclusions.map(exc => `
              <li class="flex items-start text-xs md:text-sm text-[#202722]/80">
                <svg class="w-4 h-4 text-stone-400 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span>${exc}</span>
              </li>
            `).join('')}
          </ul>
        </div>

      </section>

      <!-- SECTION: PACKING GUIDE & FOREST DEPARTMENT RULES -->
      <section id="section-packing" class="scroll-mt-36 bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block mb-1">Field Readiness</span>
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-[#0A211B] mb-4">Expedition Packing & Forest Guidelines</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
          <div>
            <h4 class="font-serif font-bold text-base text-[#123B2A] mb-3">Recommended Gear & Attire</h4>
            <ul class="space-y-2 text-[#202722]/85">
              <li>• <strong>Earth-toned Clothing:</strong> Muted khakis, greens, and browns. Avoid bright reds/yellows.</li>
              <li>• <strong>Optics:</strong> Binoculars (8x42 or 10x42) and telephoto lenses (300mm–600mm) for birding.</li>
              <li>• <strong>Protection:</strong> Wide-brim hat, UV sunglasses, light sunscreen, and insect repellent.</li>
              <li>• <strong>Mandatory ID:</strong> Original Govt. Photo ID (Aadhaar / Voter ID / Passport) for forest permits.</li>
            </ul>
          </div>
          <div>
            <h4 class="font-serif font-bold text-base text-[#123B2A] mb-3">Sundarban Tiger Reserve Rules</h4>
            <ul class="space-y-2 text-[#202722]/85">
              <li>• <strong>Zero Single-Use Plastic:</strong> Do not discard plastic bottles or packets into the river.</li>
              <li>• <strong>Strict Silence:</strong> Loud music and screaming on boats is prohibited by law.</li>
              <li>• <strong>Permitted Corridors:</strong> Vessels must exit the core reserve by sunset (5:30 PM).</li>
              <li>• <strong>Safety Netting:</strong> Never lean over boat railings or enter unfenced forest embankments.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: VERIFIED TRAVELER REVIEWS -->
      <section id="section-reviews" class="scroll-mt-36 bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
        <div class="flex items-center justify-between mb-6">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block mb-1">Guest Experiences</span>
            <h2 class="text-2xl md:text-3xl font-serif font-bold text-[#0A211B]">What Discerning Travelers Say</h2>
          </div>
          <div class="flex items-center gap-1.5 text-xs text-[#0A211B] font-bold bg-[#F7F3E9] border border-[#DCE6DF] px-3.5 py-1.5 rounded-full">
            <span class="text-[#C8A66B]">★★★★★</span>
            <span>4.9 / 5 Rating</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div class="p-5 rounded-xl bg-[#F7F3E9]/50 border border-[#DCE6DF]">
            <div class="flex items-center gap-1 text-[#C8A66B] text-xs mb-2">★★★★★</div>
            <p class="text-xs text-[#202722]/90 italic leading-relaxed mb-4">
              "The silence of their boat engine is incredible compared to other loud launches on the river. We had a magnificent 20-minute sighting of a tigress near Sudhanyakhali. Food was royal!"
            </p>
            <div class="text-[11px]">
              <span class="font-bold text-[#0A211B] block">Dr. Sourav Sengupta</span>
              <span class="text-[#426B50]">Kolkata • Verified Traveler</span>
            </div>
          </div>

          <div class="p-5 rounded-xl bg-[#F7F3E9]/50 border border-[#DCE6DF]">
            <div class="flex items-center gap-1 text-[#C8A66B] text-xs mb-2">★★★★★</div>
            <p class="text-xs text-[#202722]/90 italic leading-relaxed mb-4">
              "As a wildlife photographer from the UK, the ethical pacing and low-angle stability of their vessel made all the difference. Spotted 7 species of kingfishers and dolphins."
            </p>
            <div class="text-[11px]">
              <span class="font-bold text-[#0A211B] block">Marcus Thorne</span>
              <span class="text-[#426B50]">London, UK • Wildlife Tour</span>
            </div>
          </div>

          <div class="p-5 rounded-xl bg-[#F7F3E9]/50 border border-[#DCE6DF]">
            <div class="flex items-center gap-1 text-[#C8A66B] text-xs mb-2">★★★★★</div>
            <p class="text-xs text-[#202722]/90 italic leading-relaxed mb-4">
              "The Dobanki canopy walk and evening Jhumur dance were mesmerizing. Our 8-year-old and 72-year-old mother were both completely comfortable and safe throughout."
            </p>
            <div class="text-[11px]">
              <span class="font-bold text-[#0A211B] block">Ananya & Rakesh Sharma</span>
              <span class="text-[#426B50]">Bengaluru • Family Expedition</span>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION: PACKAGE SPECIFIC FAQS -->
      <section id="section-faqs" class="scroll-mt-36 bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6DF] shadow-sm">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block mb-1">Clarity & Assistance</span>
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-[#0A211B] mb-6">Frequently Asked Questions</h2>

        <div class="space-y-4">
          
          <div class="faq-item border border-[#DCE6DF] rounded-xl overflow-hidden">
            <button class="faq-trigger w-full text-left p-4 bg-[#F7F3E9]/50 flex items-center justify-between font-serif font-bold text-sm text-[#0A211B] focus:outline-none">
              <span>Is Sundarban safe for children, families, and elderly travelers?</span>
              <svg class="w-4 h-4 text-[#C8A66B] faq-icon transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="faq-answer px-4 py-3 bg-white text-xs text-[#202722]/85 leading-relaxed">
              Absolutely. All tours take place aboard licensed motorized safari boats equipped with certified lifejackets and first aid equipment. On-land visits are strictly limited to fenced Forest Department watchtowers with 20-foot high iron netting.
            </div>
          </div>

          <div class="faq-item border border-[#DCE6DF] rounded-xl overflow-hidden">
            <button class="faq-trigger w-full text-left p-4 bg-[#F7F3E9]/50 flex items-center justify-between font-serif font-bold text-sm text-[#0A211B] focus:outline-none">
              <span>How are forest permits and boat clearances arranged?</span>
              <svg class="w-4 h-4 text-[#C8A66B] faq-icon transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="faq-answer px-4 py-3 bg-white text-xs text-[#202722]/85 leading-relaxed">
              We handle 100% of the government Forest Department paperwork, boat fees, and traveler entry permits at the Sajnekhali Range Office. Guests only need to provide valid photo ID details (Aadhaar/Passport) upon booking.
            </div>
          </div>

          <div class="faq-item border border-[#DCE6DF] rounded-xl overflow-hidden">
            <button class="faq-trigger w-full text-left p-4 bg-[#F7F3E9]/50 flex items-center justify-between font-serif font-bold text-sm text-[#0A211B] focus:outline-none">
              <span>What is the best season to book this expedition?</span>
              <svg class="w-4 h-4 text-[#C8A66B] faq-icon transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="faq-answer px-4 py-3 bg-white text-xs text-[#202722]/85 leading-relaxed">
              Late October through late March is considered the golden season with cool breezy weather, minimal rainfall, and animals basking on sunny riverbanks. Monsoons (July–September) offer dramatic lush greenery and dramatic cloudscapes for experiential travelers.
            </div>
          </div>

          <div class="faq-item border border-[#DCE6DF] rounded-xl overflow-hidden">
            <button class="faq-trigger w-full text-left p-4 bg-[#F7F3E9]/50 flex items-center justify-between font-serif font-bold text-sm text-[#0A211B] focus:outline-none">
              <span>Are pure vegetarian, vegan, and Jain meals accommodated?</span>
              <svg class="w-4 h-4 text-[#C8A66B] faq-icon transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="faq-answer px-4 py-3 bg-white text-xs text-[#202722]/85 leading-relaxed">
              Yes, our onboard cooks prepare pure vegetarian and Jain meals (without onion and garlic) in dedicated cookware upon prior notice.
            </div>
          </div>

          <div class="faq-item border border-[#DCE6DF] rounded-xl overflow-hidden">
            <button class="faq-trigger w-full text-left p-4 bg-[#F7F3E9]/50 flex items-center justify-between font-serif font-bold text-sm text-[#0A211B] focus:outline-none">
              <span>What is the cancellation and rescheduling policy?</span>
              <svg class="w-4 h-4 text-[#C8A66B] faq-icon transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="faq-answer px-4 py-3 bg-white text-xs text-[#202722]/85 leading-relaxed">
              Cancellations made 15+ days prior receive a 90% refund (less statutory forest entry permit fees). Rescheduling requests made 15 days in advance are accommodated free of charge based on vessel availability.
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION: RELATED CURATED EXPEDITIONS -->
      <section class="pt-6 border-t border-[#DCE6DF]">
        <div class="flex items-center justify-between mb-6">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-widest text-[#426B50] block mb-1">Alternative Itineraries</span>
            <h2 class="text-xl md:text-2xl font-serif font-bold text-[#0A211B]">Explore Other Curated Expeditions</h2>
          </div>
          <a href="packages.html" class="text-xs font-bold text-[#123B2A] hover:text-[#C8A66B] transition-colors">View All &rarr;</a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${PACKAGES.filter(p => p.id !== pkg.id).slice(0, 3).map(p => `
            <a href="package-details.html?id=${p.id}" class="bg-white rounded-xl border border-[#DCE6DF] overflow-hidden group shadow-sm hover:shadow-md transition-all">
              <div class="h-36 overflow-hidden relative">
                <img src="${p.thumbnail}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <span class="absolute top-2 left-2 bg-[#0A211B]/80 text-[#C8A66B] text-[10px] font-bold px-2 py-0.5 rounded">
                  ${p.duration}
                </span>
              </div>
              <div class="p-4">
                <h4 class="font-serif font-bold text-sm text-[#0A211B] group-hover:text-[#C8A66B] transition-colors line-clamp-1 mb-1">${p.title}</h4>
                <div class="flex items-baseline justify-between mt-2">
                  <span class="text-xs font-bold text-[#123B2A]">${p.priceFormatted}</span>
                  <span class="text-[10px] text-[#426B50] font-semibold">View Details &rarr;</span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

    `;
  }

  // 5. Setup Sticky Booking Card (Desktop)
  const bookingCardContainer = document.getElementById('stickyBookingCard');
  if (bookingCardContainer) {
    let guestCount = 2;
    const basePrice = pkg.priceStarting;

    const updateCalculator = () => {
      const totalEstimated = basePrice * guestCount;
      const formattedTotal = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(totalEstimated);
      
      const totalEl = document.getElementById('calcTotalEstimate');
      if (totalEl) totalEl.textContent = formattedTotal;

      const guestsDisplayEl = document.getElementById('calcGuestDisplay');
      if (guestsDisplayEl) guestsDisplayEl.textContent = `${guestCount} Guest${guestCount > 1 ? 's' : ''}`;
    };

    bookingCardContainer.innerHTML = `
      <div class="bg-white rounded-2xl border border-[#DCE6DF] shadow-xl p-6 sticky top-28">
        
        <!-- Header & Rate -->
        <div class="border-b border-[#DCE6DF] pb-4 mb-5">
          <div class="flex items-center justify-between mb-1">
            <span class="text-[11px] uppercase tracking-wider text-[#426B50] font-bold">All-Inclusive Rate</span>
            <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">100% Guaranteed Permit</span>
          </div>
          <div class="flex items-baseline gap-2 mt-1">
            <span class="text-3xl font-serif font-bold text-[#0A211B]">${pkg.priceFormatted}</span>
            <span class="text-xs text-[#202722]/70 font-medium">/ adult</span>
          </div>
          <span class="text-[11px] text-[#426B50] block mt-1 leading-snug">${pkg.priceNote}</span>
        </div>

        <!-- Trip Configurator Inputs -->
        <div class="space-y-4 mb-5">
          
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-[#0A211B] mb-1.5">Intended Travel Date</label>
            <input 
              type="date" 
              id="bookingDate" 
              class="w-full text-xs py-2.5 px-3 rounded-xl border border-[#DCE6DF] focus:border-[#C8A66B] focus:ring-1 focus:ring-[#C8A66B] focus:outline-none bg-[#F7F3E9]/30"
            />
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-[#0A211B] mb-1.5">Number of Guests</label>
            <div class="flex items-center justify-between border border-[#DCE6DF] rounded-xl p-1.5 bg-[#F7F3E9]/50">
              <button 
                id="btnGuestMinus" 
                class="w-8 h-8 rounded-lg bg-white border border-[#DCE6DF] text-sm font-bold text-[#123B2A] hover:bg-[#123B2A] hover:text-white transition-colors"
                type="button"
                aria-label="Decrease guest count"
              >
                -
              </button>
              <span id="calcGuestDisplay" class="text-xs font-bold text-[#0A211B]">2 Guests</span>
              <button 
                id="btnGuestPlus" 
                class="w-8 h-8 rounded-lg bg-white border border-[#DCE6DF] text-sm font-bold text-[#123B2A] hover:bg-[#123B2A] hover:text-white transition-colors"
                type="button"
                aria-label="Increase guest count"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-[#0A211B] mb-1.5">Pickup Location Preference</label>
            <select id="bookingPickup" class="w-full text-xs py-2.5 px-3 rounded-xl border border-[#DCE6DF] focus:border-[#C8A66B] focus:ring-1 focus:ring-[#C8A66B] focus:outline-none bg-white">
              <option value="Central Kolkata (Science City / Indian Museum)">Central Kolkata (Science City / Indian Museum)</option>
              <option value="Kolkata Airport (CCU Terminal 1 Arrival Lounge)">Kolkata Airport (CCU Terminal 1 Lounge)</option>
              <option value="Howrah / Sealdah Railway Station">Howrah / Sealdah Railway Station</option>
              <option value="Godkhali Ghat Direct Embarkation (Self-Drive)">Godkhali Ghat Direct (Self-Drive)</option>
            </select>
          </div>

        </div>

        <!-- Dynamic Total Calculation -->
        <div class="bg-[#F7F3E9] p-3.5 rounded-xl border border-[#DCE6DF] mb-5 flex items-center justify-between">
          <div>
            <span class="text-xs text-[#202722]/80 font-medium block">Estimated Package Value:</span>
            <span class="text-[10px] text-[#426B50]">Incl. permits, cruise & meals</span>
          </div>
          <span id="calcTotalEstimate" class="text-lg font-serif font-bold text-[#123B2A]">
            ₹${(basePrice * 2).toLocaleString('en-IN')}
          </span>
        </div>

        <!-- 1-Click WhatsApp Booking Generator -->
        <button 
          id="btnTriggerWhatsApp" 
          class="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs md:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all mb-3"
          type="button"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          Inquire Directly via WhatsApp
        </button>

        <!-- Direct Phone Call Trigger -->
        <a 
          href="tel:+919564846891" 
          class="w-full py-2.5 px-4 rounded-xl border border-[#DCE6DF] hover:bg-[#F7F3E9] text-xs font-bold text-[#123B2A] flex items-center justify-center gap-2 transition-colors mb-3"
        >
          <svg class="w-4 h-4 text-[#C8A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          <span>Call Reservations (+91 9564846891)</span>
        </a>

        <!-- Detailed Form Link -->
        <a 
          href="contact.html?package=${pkg.id}" 
          class="block text-center text-xs font-semibold text-[#123B2A] hover:underline"
        >
          Or submit detailed booking inquiry form &rarr;
        </a>

        <!-- Forest Dept Operator Badge -->
        <div class="mt-5 pt-4 border-t border-[#DCE6DF] text-[11px] text-[#426B50] flex items-center gap-2">
          <svg class="w-4 h-4 text-[#C8A66B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          <span>Licensed West Bengal Forest Department Ecotourism Operator</span>
        </div>

      </div>
    `;

    // Interactive counter handlers
    const btnMinus = document.getElementById('btnGuestMinus');
    const btnPlus = document.getElementById('btnGuestPlus');
    const btnWhatsApp = document.getElementById('btnTriggerWhatsApp');

    if (btnMinus) {
      btnMinus.addEventListener('click', () => {
        if (guestCount > 1) {
          guestCount--;
          updateCalculator();
        }
      });
    }

    if (btnPlus) {
      btnPlus.addEventListener('click', () => {
        if (guestCount < 20) {
          guestCount++;
          updateCalculator();
        }
      });
    }

    if (btnWhatsApp) {
      btnWhatsApp.addEventListener('click', () => {
        const dateVal = document.getElementById('bookingDate')?.value || 'Upcoming Dates';
        const pickupVal = document.getElementById('bookingPickup')?.value || 'Central Kolkata';
        const messageText = `*Expedition Inquiry - Sundarban Wild Escape*\n` +
          `• Package: ${pkg.title} (${pkg.duration})\n` +
          `• Guests: ${guestCount} Person(s)\n` +
          `• Preferred Date: ${dateVal}\n` +
          `• Pickup Hub: ${pickupVal}\n\n` +
          `Kindly confirm boat slot availability, accommodation, and forest department permit requirements.`;

        const whatsappUrl = `https://wa.me/919564846891?text=${encodeURIComponent(messageText)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      });
    }

    // Set today as minimum selectable date
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
      const todayStr = new Date().toISOString().split('T')[0];
      dateInput.min = todayStr;
    }

    updateCalculator();
  }

  // 6. Accessible Lightbox Engine for Package Details
  const lightboxModal = document.getElementById('packageLightboxModal');
  const lightboxImg = document.getElementById('packageLightboxImg');
  const lightboxTitle = document.getElementById('packageLightboxTitle');
  const lightboxCaption = document.getElementById('packageLightboxCaption');
  const lightboxCounter = document.getElementById('packageLightboxCounter');
  const lightboxClose = document.getElementById('packageLightboxClose');
  const lightboxPrev = document.getElementById('packageLightboxPrev');
  const lightboxNext = document.getElementById('packageLightboxNext');

  let currentLightboxIdx = 0;

  const showLightboxImage = (index) => {
    if (!lightboxModal || galleryItems.length === 0) return;
    currentLightboxIdx = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentLightboxIdx];
    
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxCounter) lightboxCounter.textContent = `${currentLightboxIdx + 1} / ${galleryItems.length}`;

    lightboxModal.classList.remove('hidden');
    // Force browser reflow for smooth opacity transition
    void lightboxModal.offsetWidth;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const hideLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    setTimeout(() => {
      lightboxModal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  };

  // Attach click handlers to mosaic images
  document.querySelectorAll('[data-lightbox-idx]').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.getAttribute('data-lightbox-idx'), 10) || 0;
      showLightboxImage(idx);
    });
  });

  const btnOpenFull = document.getElementById('btnOpenFullLightbox');
  if (btnOpenFull) {
    btnOpenFull.addEventListener('click', () => showLightboxImage(0));
  }

  if (lightboxClose) lightboxClose.addEventListener('click', hideLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => showLightboxImage(currentLightboxIdx - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => showLightboxImage(currentLightboxIdx + 1));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') hideLightbox();
    if (e.key === 'ArrowLeft') showLightboxImage(currentLightboxIdx - 1);
    if (e.key === 'ArrowRight') showLightboxImage(currentLightboxIdx + 1);
  });

  // Click outside to close
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) hideLightbox();
    });
  }

  // 7. FAQ Accordion Interaction
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (item) {
        const isActive = item.classList.contains('active');
        // Close other items
        document.querySelectorAll('.faq-item').forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active', !isActive);
      }
    });
  });

  // 8. Sticky Sub-Nav Active Spy on Scroll
  const subNavLinks = document.querySelectorAll('#packageSubNavContainer nav a');
  const sections = Array.from(subNavLinks).map(link => {
    const id = link.getAttribute('href')?.replace('#', '');
    return document.getElementById(id);
  }).filter(Boolean);

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 180;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        const id = sec.getAttribute('id');
        subNavLinks.forEach(l => {
          if (l.getAttribute('href') === `#${id}`) {
            l.classList.add('text-[#C8A66B]', 'font-bold');
            l.classList.remove('text-[#DCE6DF]/80');
          } else {
            l.classList.remove('text-[#C8A66B]', 'font-bold');
            l.classList.add('text-[#DCE6DF]/80');
          }
        });
      }
    });
  }, { passive: true });
});
