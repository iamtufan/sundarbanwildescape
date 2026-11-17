/**
 * Sundarban Wild Escape - Contact, Booking & WhatsApp Integration Engine
 * Validates reservation details, builds formatted WhatsApp inquiry handoffs,
 * manages route transit switchers, and powers the accessible FAQ accordion.
 */

import { FAQS_DATA, PACKAGES } from './packages-data.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Populate Package Selector from PACKAGES data
  const packageSelect = document.getElementById('inquiryPackage');
  if (packageSelect) {
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedPkg = urlParams.get('package');

    PACKAGES.forEach(pkg => {
      const option = document.createElement('option');
      option.value = pkg.title;
      option.textContent = `${pkg.title} (${pkg.duration})`;
      if (preselectedPkg && (pkg.id === preselectedPkg || pkg.title.toLowerCase().includes(preselectedPkg.toLowerCase()))) {
        option.selected = true;
      }
      packageSelect.appendChild(option);
    });
  }

  // Set minimum date for booking input to today
  const travelDateInput = document.getElementById('inquiryDate');
  if (travelDateInput) {
    const today = new Date().toISOString().split('T')[0];
    travelDateInput.min = today;
  }

  // 2. Booking Inquiry Form Submission & WhatsApp Generator
  const inquiryForm = document.getElementById('bookingInquiryForm');
  const formSuccessBanner = document.getElementById('formSuccessBanner');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('inquiryName')?.value.trim();
      const phone = document.getElementById('inquiryPhone')?.value.trim();
      const email = document.getElementById('inquiryEmail')?.value.trim();
      const travelDate = document.getElementById('inquiryDate')?.value;
      const guests = document.getElementById('inquiryGuests')?.value || '2';
      const packageChosen = document.getElementById('inquiryPackage')?.value || 'Custom Expedition';
      const pickup = document.getElementById('inquiryPickup')?.value || 'Kolkata Central';
      const dietary = document.getElementById('inquiryDietary')?.value.trim() || 'Standard Bengali & Continental';
      const messageNotes = document.getElementById('inquiryNotes')?.value.trim() || 'None';

      // Validation
      const phoneRegex = /^[0-9+-\s]{8,16}$/;
      if (!name) {
        alert('Please enter your full name.');
        return;
      }
      if (!phone || !phoneRegex.test(phone)) {
        alert('Please enter a valid phone or WhatsApp number with area code.');
        return;
      }
      if (!travelDate) {
        alert('Please select your preferred departure date.');
        return;
      }

      // Format WhatsApp Message String
      const formattedMessage = 
`*NEW EXPEDITION INQUIRY — SUNDARBAN WILD ESCAPE*
----------------------------------------
*Guest Name:* ${name}
*Phone / WhatsApp:* ${phone}
*Email:* ${email || 'Not provided'}
*Selected Package:* ${packageChosen}
*Travel Date:* ${travelDate}
*Number of Guests:* ${guests}
*Pickup Point:* ${pickup}
*Dietary Preference:* ${dietary}
*Special Notes:* ${messageNotes}
----------------------------------------
_Please confirm boat allocation, forest department permits, and pricing quotation._`;

      const whatsappURL = `https://wa.me/919564846891?text=${encodeURIComponent(formattedMessage)}`;

      // Show confirmation banner
      if (formSuccessBanner) {
        formSuccessBanner.classList.remove('hidden');
        formSuccessBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Open WhatsApp window
      setTimeout(() => {
        window.open(whatsappURL, '_blank', 'noopener,noreferrer');
      }, 700);
    });
  }

  // 3. Render Travel FAQ Accordion
  const faqContainer = document.getElementById('faqAccordionContainer');
  if (faqContainer) {
    faqContainer.innerHTML = FAQS_DATA.map((faq, index) => `
      <div class="faq-item border border-[#DCE6DF] rounded-xl bg-white overflow-hidden transition-all duration-300">
        <button 
          type="button" 
          class="faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-[#0A211B] text-base md:text-lg hover:text-[#123B2A] focus:outline-none"
          aria-expanded="false"
          aria-controls="faq-desc-${index}"
        >
          <span>${faq.question}</span>
          <span class="faq-icon shrink-0 w-8 h-8 rounded-full bg-[#F7F3E9] flex items-center justify-center text-[#123B2A] transition-transform duration-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
        </button>
        <div id="faq-desc-${index}" class="faq-answer px-6 pb-6 text-sm text-[#202722]/80 leading-relaxed">
          <div class="pt-2 border-t border-[#DCE6DF]/50">
            ${faq.answer}
          </div>
        </div>
      </div>
    `).join('');

    // Attach accordion click handlers
    const items = faqContainer.querySelectorAll('.faq-item');
    items.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close others for clean single-view accordion
        items.forEach(i => {
          i.classList.remove('active');
          i.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Open first FAQ by default
    if (items.length > 0) {
      items[0].classList.add('active');
      items[0].querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'true');
    }
  }

  // 4. Transit Route Guide Tabs
  const routeButtons = document.querySelectorAll('.route-tab-btn');
  const routePanels = document.querySelectorAll('.route-tab-panel');

  routeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-route');

      routeButtons.forEach(b => {
        b.classList.remove('bg-[#123B2A]', 'text-[#F7F3E9]', 'border-[#123B2A]');
        b.classList.add('bg-white', 'text-[#202722]', 'border-[#DCE6DF]');
      });
      btn.classList.add('bg-[#123B2A]', 'text-[#F7F3E9]', 'border-[#123B2A]');
      btn.classList.remove('bg-white', 'text-[#202722]', 'border-[#DCE6DF]');

      routePanels.forEach(panel => {
        if (panel.id === `route-${target}`) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });
});

