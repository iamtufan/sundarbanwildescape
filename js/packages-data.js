/**
 * Sundarban Wild Escape - Master Packages Data Store
 * Authentic West Bengal Ecotourism & Sundarban Tiger Reserve Expeditions
 * Exclusively Indian Sundarbans (South & North 24 Parganas)
 */

export const PACKAGES = [
  {
    id: "day-explorer",
    title: "The Dawn-to-Dusk Delta Explorer",
    subtitle: "High-yield 1-day river safari into the Sundarban Tiger Reserve buffer and core channels",
    duration: "1 Day (14 Hours)",
    durationDays: 1,
    durationNights: 0,
    durationCategory: "day-trip",
    style: "classic",
    styleLabel: "Classic Safari / Day Excursion",
    priceStarting: 2850,
    priceFormatted: "₹2,850",
    priceNote: "per adult (all-inclusive from Godkhali) / ₹3,650 with Kolkata AC transfer",
    badge: "Quick Wilderness Escape",
    isFeatured: true,
    heroImage: "assets/images/jangleboatiing.jpg",
    thumbnail: "assets/images/jangleboatiing.jpg",
    gallery: [
      "assets/images/jangleboatiing.jpg",
      "assets/images/boatwithtraveler.jpg",
      "assets/images/tiger.jpg",
      "assets/images/corcodile.jpg"
    ],
    summary: "Designed for travelers short on time who refuse to compromise on wildlife authenticity. Depart Kolkata before sunrise, board our customized motorized eco-cruiser at Godkhali Ghat, and navigate through the misty confluence of the Gomor, Bidya, and Hogol rivers. Explore Sajnekhali and Sudhanyakhali watchtowers with our government-certified forest naturalist.",
    keyHighlights: [
      "Round-trip AC conveyance option from Kolkata (Science City / Indian Museum)",
      "Dedicated motorized wooden safari vessel with open viewing deck & washroom",
      "Visit Sajnekhali Forest HQ, Mangrove Interpretation Center & Crocodile Pond",
      "Ascend Sudhanyakhali Watchtower overlooking the primary freshwater pond",
      "Freshly prepared Bengali breakfast, riverboat lunch, and high tea served on board",
      "Sundarban Tiger Reserve entry permits and Forest Department guide included"
    ],
    watchtowersCovered: ["Sajnekhali Complex", "Sudhanyakhali Watchtower", "Pirkhali Creeks"],
    bestFor: "Weekend getaways, business travelers visiting Kolkata, school/educational day trips",
    physicalDemand: "Low (Paved wooden boardwalks and watchtower stairwells)",
    groupSize: "Small group (max 18 guests on spacious 35-seat licensed vessel)",
    departurePoint: "5:30 AM Kolkata Pickup / 8:30 AM Godkhali Ghat Embarkation",
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Kolkata to Estuarine Heartlands & Return",
        timeline: [
          {
            time: "05:30 AM",
            activity: "Kolkata Departure",
            description: "Prompt departure from designated central Kolkata hub (Indian Museum / Science City) in comfortable AC transport via Baruipur and Canning."
          },
          {
            time: "08:30 AM",
            activity: "Godkhali Ghat Boarding & Welcome",
            description: "Arrive at Godkhali Ghat—the historic gateway to the delta. Board our private tourist safari boat. Welcome drink of tender coconut water and steaming Darjeeling tea with authentic Bengali breakfast (Luchi, Chholar Dal, sweets)."
          },
          {
            time: "09:45 AM",
            activity: "Gosaba & Sajnekhali Forest Department HQ",
            description: "Cruise past Sir Daniel Hamilton’s historic estate in Gosaba. Arrive at Sajnekhali to clear forest permits. Visit the Mangrove Interpretation Centre, Sweet-water Crocodile Pond, and Turtle Pond."
          },
          {
            time: "12:30 PM",
            activity: "Sudhanyakhali Watchtower & Creek Safari",
            description: "Navigate the silent creeks of Pirkhali and Sundarkhali. Arrive at Sudhanyakhali Watchtower. Observe spotted chital deer, wild boar, and monitor lizards congregating at the sweet-water watering hole."
          },
          {
            time: "01:45 PM",
            activity: "Traditional Bengali Feast on the River",
            description: "Sumptuous hot lunch served on the lower dining deck: fragrant Gobindobhog rice, ghee, seasonal river fish (Rui/Katla/Bhetki curry), coastal tiger prawn curry, fresh vegetable labra, chutney, and papad."
          },
          {
            time: "03:15 PM",
            activity: "Panchamukhani Confluence & Dolphin Spotting",
            description: "Cruise towards the majestic 5-river junction (Panchamukhani). Keep binoculars focused on tidal mudflats for Gangetic dolphins and diverse kingfishers (Pied, White-throated, Brown-winged)."
          },
          {
            time: "05:00 PM",
            activity: "Sunset Disembarkation at Godkhali",
            description: "Arrive back at Godkhali as golden hour illuminates the mangrove horizon. Evening tea and snacks. Board AC transfer back to Kolkata."
          },
          {
            time: "08:30 PM",
            activity: "Arrival in Kolkata",
            description: "Disembark at original Kolkata drop-off location with indelible memories of the wild delta."
          }
        ]
      }
    ],
    inclusions: [
      "Exclusive motorized riverboat charter with upper observation deck and western sanitation",
      "Sundarban Tiger Reserve forest entry tickets and mandatory government boat permits",
      "State Forest Department authorized local village naturalist and tracker",
      "Full board meals: Morning tea, hot Bengali breakfast, mid-river buffet lunch, evening tea with snacks",
      "Mineral drinking water (refill station to minimize plastic waste)",
      "Standard lifejackets, first aid kit, and emergency marine safety equipment"
    ],
    exclusions: [
      "Kolkata-to-Godkhali AC vehicle transfer (available as ₹800 add-on per person)",
      "Video camera / professional telephoto lens fees levied by STR Forest Dept (if applicable)",
      "Personal expenses, room service, or tips for boatmen and guides",
      "Travel or health insurance coverage"
    ],
    accommodations: "Day tour (No overnight stay). Day rest berths and clean private washrooms available on board the vessel.",
    seasonalAdvice: "Ideal between September and April for calm waters and comfortable deck cruising. Carry light layers for misty early mornings."
  },
  {
    id: "mangrove-classic-2d1n",
    title: "Mangrove Classic Overnighter",
    subtitle: "The quintessential 2-Day/1-Night immersive mangrove safari with rustic luxury cottage stay",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    durationNights: 1,
    durationCategory: "2d1n",
    style: "classic",
    styleLabel: "Classic Safari / Eco-Lodge",
    priceStarting: 5450,
    priceFormatted: "₹5,450",
    priceNote: "per adult (double occupancy) / ₹6,850 with Kolkata roundtrip AC transport",
    badge: "Most Popular Itinerary",
    isFeatured: true,
    heroImage: "assets/images/boatwithtraveler.jpg",
    thumbnail: "assets/images/boatwithtraveler.jpg",
    gallery: [
      "assets/images/boatwithtraveler.jpg",
      "assets/images/jhumur dance.jpg",
      "assets/images/deer.jpg",
      "assets/images/jangleboatiing.jpg"
    ],
    summary: "Slow down to the primal rhythm of the tides. This 2-day journey invites you to witness both the twilight hush and misty sunrise over the world’s largest mangrove forest. Overnight in an authentic eco-resort nestled on Pakhiralay island, complete with an evening village walk, traditional Bonbibi folk drama, and intensive safaris to Sajnekhali and Sudhanyakhali.",
    keyHighlights: [
      "Overnight stay in air-conditioned deluxe riverfront eco-cottages in Pakhiralay/Dayapur",
      "Evening Bonbibi Palagaan (traditional folk theatre depicting the forest goddess Bonbibi)",
      "Two dedicated full-day river safaris covering core reserve channels",
      "In-depth watchtower visits to Sajnekhali and Sudhanyakhali",
      "Guided stroll through an indigenous delta village to understand clay embankments & paddy farming",
      "Lavish Bengal culinary program: Bhetki paturi, Chingri malaikari, and authentic country chicken"
    ],
    watchtowersCovered: ["Sajnekhali Complex", "Sudhanyakhali Watchtower", "Pakhiralay Creeks", "Pirkhali Canal"],
    bestFor: "Couples, wildlife enthusiasts, families wanting balanced travel without exhausting transit",
    physicalDemand: "Moderate (Gentle watchtower stairs and island village stroll)",
    groupSize: "Intimate group (average 10-14 travelers)",
    departurePoint: "7:00 AM Kolkata / 10:00 AM Godkhali Ghat",
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Kolkata to Mangrove Gateway & Sunset River Cruise",
        timeline: [
          {
            time: "07:00 AM",
            activity: "Kolkata Departure",
            description: "Scenic drive through Bengal countryside from Kolkata toward Godkhali Ghat with packed breakfast."
          },
          {
            time: "10:30 AM",
            activity: "Boarding at Godkhali & River Cruise to Pakhiralay",
            description: "Board our luxury wooden safari cruiser. Glide along the Gomor and Durgaduani rivers towards Dayapur/Pakhiralay. Check into your riverfront eco-cottage."
          },
          {
            time: "01:00 PM",
            activity: "Traditional Dining at the Resort",
            description: "Relish an authentic lunch prepared with organic delta produce and locally sourced freshwater fish."
          },
          {
            time: "03:00 PM",
            activity: "Afternoon Creek Safari & Sajnekhali HQ",
            description: "Board the safari boat to visit Sajnekhali Forest HQ. Observe the crocodile sanctuary, Batagur baska turtle breeding station, and the bird watchtower."
          },
          {
            time: "05:30 PM",
            activity: "Golden Hour on the Estuary",
            description: "Watch the red sun sink behind the dense mangrove canopy while sipping ginger tea with local hot pakoras."
          },
          {
            time: "07:30 PM",
            activity: "Bonbibi Folk Theatrical Performance & Campfire",
            description: "Gather under the starlit sky to experience 'Bonbibi Palagaan', a centuries-old musical performance celebrating the protector goddess of the jungle."
          },
          {
            time: "09:00 PM",
            activity: "Dinner & Overnight Rest",
            description: "Dinner buffet featuring slow-cooked Desi chicken or seasonal fish curry, followed by quiet night rest in your AC cottage."
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Deep Delta Safaris, Sudhanyakhali & Journey Home",
        timeline: [
          {
            time: "06:00 AM",
            activity: "Sunrise Boat Safari & Forest Entry",
            description: "Early morning boarding into the core buffer channels of Sudhanyakhali as the morning fog lifts. Fresh breakfast served on the water."
          },
          {
            time: "08:30 AM",
            activity: "Sudhanyakhali Watchtower Station",
            description: "Disembark under armed forest guard supervision. Climb the 3-story watchtower. High chances to observe axis deer herds, monitor lizards, and wild boars at the fresh sweet-water pond."
          },
          {
            time: "11:30 AM",
            activity: "Cruising Pirkhali, Gajikhali & Deulbharani",
            description: "Navigate narrow tidal creeks where trees like Sundari, Goran, and Gewa form archways. Quiet propulsion allows listening for warning calls of monkeys and deer."
          },
          {
            time: "01:30 PM",
            activity: "Royal Lunch on the River",
            description: "Savor a memorable farewell banquet on the sun-deck featuring royal Chingri Malaikari (tiger prawns in coconut cream) and Kolkata mishti doi."
          },
          {
            time: "04:30 PM",
            activity: "Godkhali Disembarkation & Return Transfer",
            description: "Reach Godkhali Ghat. Transfer to your AC vehicle for return to Kolkata by approximately 8:00 PM."
          }
        ]
      }
    ],
    inclusions: [
      "1 Night stay in Deluxe AC river-view cottage / eco-lodge (twin sharing)",
      "All meals starting from Day 1 breakfast to Day 2 afternoon tea (6 wholesome meals)",
      "2 Days dedicated forest cruising on customized motorized vessel with upper viewing deck",
      "All West Bengal Forest Department entry fees, boat registration, and camera permits",
      "Government-licensed local tiger tracker & certified English/Hindi/Bengali naturalist guide",
      "Cultural Bonbibi Palagaan performance by village artists",
      "All jetty toll taxes and village entry charges"
    ],
    exclusions: [
      "Roundtrip Kolkata AC vehicle transfers (optional ₹1,400 add-on per guest)",
      "Special commercial documentary filmmaking permit fees",
      "Personal telephone calls, laundry, and beverage charges outside regular tea/coffee",
      "Custom tips for boat captain and hotel staff"
    ],
    accommodations: "Selected eco-sanctuary resort on Pakhiralay or Dayapur island. Equipped with solar-backed electricity, en-suite western bathrooms, premium cotton linens, and riverfront veranda.",
    seasonalAdvice: "October through March offers crisp mornings, migratory water birds, and peak predator activity on mudflats."
  },
  {
    id: "wilderness-signature-3d2n",
    title: "Wilderness Signature Sanctuary Expedition",
    subtitle: "The definitive 3-Day/2-Night deep-reserve safari covering Dobanki Canopy Walk and Netidhopani ruins",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    durationCategory: "3d2n",
    style: "luxury",
    styleLabel: "Quiet Luxury / Deep Forest",
    priceStarting: 9800,
    priceFormatted: "₹9,800",
    priceNote: "per adult (double occupancy) / ₹11,800 with private Kolkata doorstep transfer",
    badge: "Flagship Expedition",
    isFeatured: true,
    heroImage: "assets/images/tiger.jpg",
    thumbnail: "assets/images/tiger.jpg",
    gallery: [
      "assets/images/tiger.jpg",
      "assets/images/tiger2.jpg",
      "assets/images/corcodile.jpg",
      "assets/images/deer.jpg",
      "assets/images/jangleboatiing.jpg"
    ],
    summary: "Our hallmark expedition designed for discerning naturalists and eco-luxury seekers. Spanning three comprehensive days, this voyage reaches beyond ordinary tourist loops into the historic ruins of 400-year-old Netidhopani and the celebrated 496-meter Dobanki Canopy Walk. Savor quiet luxury riverside accommodations, private naturalist lectures, and artisanal Bengali cuisine.",
    keyHighlights: [
      "Permitted access to the legendary Netidhopani watchtower and 400-year-old terracotta temple ruins",
      "Walk among the treetops on the 496m elevated Dobanki Canopy Walk enclosed by safety netting",
      "2 Nights premium riverside eco-resort with organic garden-to-table cuisine",
      "Exploration of the iconic Panchamukhani 5-river confluence and Pirkhali channels",
      "Evening wildlife lecture and interactive Q&A with veteran tiger trackers",
      "Extended early dawn safaris when estuarine crocodiles and deer warm themselves on low-tide mudflats"
    ],
    watchtowersCovered: ["Sajnekhali Complex", "Sudhanyakhali Watchtower", "Dobanki Canopy Walk", "Netidhopani Ruins", "Pirkhali", "Panchamukhani"],
    bestFor: "Wildlife photographers, international travelers, families seeking unhurried deep-immersion",
    physicalDemand: "Moderate (Boardwalk canopy walk, boat embarkations, watchtower climbs)",
    groupSize: "Small luxury group (max 10 guests for optimal silence & viewing)",
    departurePoint: "6:30 AM Kolkata / 9:30 AM Godkhali Ghat",
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Embarkation, Mangrove Flora & Twilight at Sajnekhali",
        timeline: [
          {
            time: "06:30 AM",
            activity: "Kolkata Luxury Departure",
            description: "Chauffeured pickup from your Kolkata residence, hotel, or airport in private AC vehicle."
          },
          {
            time: "09:30 AM",
            activity: "Private Boarding at Godkhali",
            description: "Warm reception by your Expedition Naturalist. Board our teak-trimmed river cruiser. Fresh welcome elixir and chef-crafted breakfast."
          },
          {
            time: "12:30 PM",
            activity: "Check-in at Luxury Wilderness Lodge",
            description: "Arrive at Dayapur/Pakhiralay. Unwind in your air-conditioned wooden cottage overlooking the Gomor river. Freshly curated artisanal lunch."
          },
          {
            time: "03:30 PM",
            activity: "Sajnekhali Interpretation Centre & Bird Sanctuary",
            description: "Cruise to Sajnekhali. Explore the deep biological herbarium, observe the endemic northern river terrapin project, and scan water edges for kingfishers."
          },
          {
            time: "06:30 PM",
            activity: "Naturalist Briefing & Documentary Screening",
            description: "Evening session on the ecology of the Mangrove Tiger with our lead biologist, accompanied by roasted snacks and artisanal tea."
          },
          {
            time: "08:30 PM",
            activity: "Courtyard Candlelit Dinner",
            description: "Gourmet multi-course dinner featuring Bengal river delicacies and fresh village harvests."
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Deep Delta: Sudhanyakhali, Dobanki Canopy Walk & Netidhopani",
        timeline: [
          {
            time: "05:45 AM",
            activity: "Dawn Cruise into Core Reserve",
            description: "Silent cruising into the morning mist. Freshly brewed estate tea served on the open observation deck."
          },
          {
            time: "07:30 AM",
            activity: "Sudhanyakhali Observation Point",
            description: "Early morning watch from the 3-tier tower. Pristine natural acoustics reveal tiger pugmarks, barking deer calls, and raptors circling the canopy."
          },
          {
            time: "10:30 AM",
            activity: "Dobanki 496m Canopy Walkway",
            description: "Traverse the 496-meter enclosed canopy walk elevated 20 feet above the forest floor. Safely observe the mangrove crown, deer herds, and exotic butterflies below."
          },
          {
            time: "01:00 PM",
            activity: "Panchamukhani Confluence & Gourmet River Lunch",
            description: "Cruise across the breath-taking meeting of five roaring tidal rivers. Lavish lunch served hot while drifting gently on the water."
          },
          {
            time: "02:30 PM",
            activity: "Historic Netidhopani Watchtower & Ancient Ruins",
            description: "Subject to Forest Department daily permits, land at Netidhopani. Inspect the mystical 400-year-old Shiva temple ruins tied to the folklore of Behula-Lakhindar."
          },
          {
            time: "06:00 PM",
            activity: "Return to Lodge & Bonbibi Theatrical Evening",
            description: "Evening cultural performance celebrating the syncretic delta spirit, followed by a riverside dinner under starlit skies."
          }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Narrow Creeks, Village Life & Journey to Kolkata",
        timeline: [
          {
            time: "06:30 AM",
            activity: "Chokhakhali Silent Creek Safari",
            description: "Glide through the tranquil creeks of Chokhakhali. Spot juvenile monitor lizards and colorful kingfishers foraging along the mudbanks."
          },
          {
            time: "09:30 AM",
            activity: "Local Honey Hunters & Village Immersion",
            description: "Gentle guided walk through a riverside village. Learn about the legendary Mawalis (traditional wild honey collectors) and tidal dyke maintenance."
          },
          {
            time: "12:00 PM",
            activity: "Farewell Grand Feast on Board",
            description: "Concluding banquet celebrating traditional Bengali flavors, fresh Bhetki fish, and traditional sweets."
          },
          {
            time: "02:30 PM",
            activity: "Godkhali Disembarkation & Return Transfer",
            description: "Return to Godkhali Ghat. Smooth private transfer back to Kolkata, arriving by 6:00 PM."
          }
        ]
      }
    ],
    inclusions: [
      "2 Nights luxury cottage accommodation with private balcony and air-conditioning",
      "All meals (Breakfast, lunch, high tea, multi-course dinner) from Day 1 breakfast to Day 3 high tea",
      "Full private boat access across 3 full expedition days with dedicated captain & crew",
      "All Forest Department permits including special clearance for Netidhopani & Dobanki",
      "Senior wildlife naturalist and veteran village tiger tracker",
      "Traditional Bonbibi cultural theatrical performance and private evening slide lectures",
      "Refillable copper water canisters and organic sanitation amenities",
      "Taxes, tolls, and environmental conservation fees"
    ],
    exclusions: [
      "Door-to-door Kolkata AC transport (optional ₹2,000 add-on per person)",
      "High-end telephoto camera fees levied directly by Forest Department",
      "Personal items, alcoholic beverages (dry eco-zone regulations apply), and room service"
    ],
    accommodations: "Premier riverfront cottages at our partner eco-sanctuary resort on Dayapur island. Handcrafted bamboo & teak furnishings, silent AC, panoramic river-view verandas, and 24/7 hot water.",
    seasonalAdvice: "Best from late October to late March. Low humidity, clear starry nights, and optimal wildlife movements on exposed sandbanks."
  },
  {
    id: "birdwatching-photography",
    title: "Delta Avifauna & Wildlife Photography Special",
    subtitle: "Curated 3-Day/2-Night expedition for serious ornithologists, birders, and professional photographers",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    durationCategory: "3d2n",
    style: "photography",
    styleLabel: "Specialist Photography / Birding",
    priceStarting: 12500,
    priceFormatted: "₹12,500",
    priceNote: "per photographer (strictly limited to 8 participants for clear sightlines)",
    badge: "Ornithologist Favorite",
    isFeatured: true,
    heroImage: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1200&q=80",
      "assets/images/corcodile.jpg",
      "assets/images/deer.jpg",
      "assets/images/tiger2.jpg"
    ],
    summary: "Created specifically for wildlife photographers, cinematographers, and serious birders. With strictly capped group sizes, low-vibration boat propulsion, custom bean-bag camera mounts, and an expert ornithologist guide, this tour prioritizes early morning golden hour light and silent creek drifting to document the delta’s rare raptors, 9 kingfisher species, and elusive predators.",
    keyHighlights: [
      "Strict limit of 8 photographers per vessel ensuring 360-degree unobstructed sightlines",
      "Specially fitted beanbag gunwale mounts and tripod stabilization clamps",
      "Focus on the 9 Sundarban Kingfishers: Brown-winged, Black-capped, Collared, Ruddy, Pied, and more",
      "Timed low-tide creek drifting for mudflat raptors (White-bellied Sea Eagle, Osprey, Peregrine Falcon)",
      "Exclusive access to remote creeks: Chokhakhali, Pirkhali, and Burir Dabri buffer corridors",
      "Daily evening RAW workflow and wildlife photography critique sessions with our lead specialist"
    ],
    watchtowersCovered: ["Dobanki Canopy Walk", "Sudhanyakhali", "Sajnekhali Bird Sanctuary", "Burir Dabri Corridors", "Chokhakhali Creeks"],
    bestFor: "Wildlife photographers, ornithologists, videographers, visual storytellers",
    physicalDemand: "Moderate (Longer silent deck sits, low-light early starts)",
    groupSize: "Strictly capped at 8 photographers",
    departurePoint: "5:30 AM Kolkata Pickup / 8:30 AM Godkhali Ghat",
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Low Angle Estuary Drifting & Sajnekhali Bird Sanctuaries",
        timeline: [
          {
            time: "05:30 AM",
            activity: "Prompt Photography Transfer",
            description: "Direct pickup from Kolkata to reach Godkhali during morning soft light."
          },
          {
            time: "08:30 AM",
            activity: "Boarding & Rigging Equipment",
            description: "Set up tripods, camera gimbals, and beanbags on the spacious upper safari deck."
          },
          {
            time: "10:30 AM",
            activity: "Sajnekhali Mangrove Channels",
            description: "Targeting Brown-winged Kingfisher and Black-capped Kingfisher perching on pneumatophores."
          },
          {
            time: "02:00 PM",
            activity: "Pakhiralay Check-in & Midday Edit",
            description: "Check into eco-resort. Charging stations and high-speed card backup facilities available."
          },
          {
            time: "03:30 PM",
            activity: "Golden Hour Creek Stalking",
            description: "Drift silently past mudflats to capture Lesser Adjutant Stork, Pacific Golden Plovers, and estuarine crocodiles basking in late afternoon sun."
          },
          {
            time: "07:30 PM",
            activity: "Masterclass: Sundarbans Low-Light Shooting & Ethics",
            description: "Interactive session discussing animal behavior anticipation and ethical non-intrusive photography."
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Dobanki High Canopy & Tidal Mudflats",
        timeline: [
          {
            time: "05:15 AM",
            activity: "Pre-Dawn Boat Departure",
            description: "Catch the first rays illuminating misty waters. Coffee and hot breakfast served in shooting positions."
          },
          {
            time: "07:30 AM",
            activity: "Dobanki 496m Canopy Photography",
            description: "Eye-level birding from the canopy walkway. Perfect vantage for Mangrove Pitta, Flycatchers, and raptors roosting high in Sundari crowns."
          },
          {
            time: "11:30 AM",
            activity: "Sudhanyakhali Fresh-Water Hide",
            description: "Extended session at the primary hide overlooking the forest watering hole. Ideal vantage for chital stags, wild boars, and apex predators."
          },
          {
            time: "03:30 PM",
            activity: "Narrow Mangrove Creek Creep",
            description: "Engine cutoff; silent electric/oar drifting into tiny side canals where Irrawaddy dolphins and kingfishers hunt unperturbed."
          },
          {
            time: "07:30 PM",
            activity: "Evening Photo Review & Peer Critiques",
            description: "Review day captures on high-resolution monitors over local snacks and tea."
          }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Burir Dabri Corridors & Return",
        timeline: [
          {
            time: "06:00 AM",
            activity: "Dawn Raptor Pursuit",
            description: "Early search for White-bellied Sea Eagles and Brahminy Kites hunting along the river currents."
          },
          {
            time: "10:00 AM",
            activity: "Mudflat Macro & Small Fauna",
            description: "Photograph fascinating red fiddler crabs, mudskippers, and breathing mangrove roots at extreme low tide."
          },
          {
            time: "01:30 PM",
            activity: "Celebratory River Banquet",
            description: "Conclude with an authentic coastal meal as the boat navigates back toward Godkhali."
          },
          {
            time: "03:30 PM",
            activity: "Disembarkation & Return to Kolkata",
            description: "Seamless AC vehicle transfer back to Kolkata, arriving by early evening."
          }
        ]
      }
    ],
    inclusions: [
      "2 Nights eco-resort stay with dedicated battery charging stations and quiet rooms",
      "Specialized photography-adapted boat charter with low guest density (max 8)",
      "High-density beanbags and deck clamps for heavy telephoto lenses (400mm-800mm)",
      "Lead Naturalist with 12+ years ornithological field experience in West Bengal",
      "All meals, filtered water, hot snacks, and continuous deck tea/coffee",
      "All Forest Department permits, guide charges, and jetty entry taxes"
    ],
    exclusions: [
      "Commercial cinematography fees (if shooting for commercial broadcast)",
      "Camera bodies and lenses (personal gear required)",
      "Optional private Kolkata roundtrip conveyance (₹2,000 add-on)"
    ],
    accommodations: "Selected cottage lodging with air-conditioning, stable power backups for battery recharging, and work desks.",
    seasonalAdvice: "November to February is the pinnacle birding window with over 200 resident and winter migratory species active."
  },
  {
    id: "private-family-cruise",
    title: "Heritage Family Private River Charter",
    subtitle: "Custom-paced private boat charter exclusively for your family or closed party",
    duration: "2 Days / 1 Night (Customizable to 3D/2N)",
    durationDays: 2,
    durationNights: 1,
    durationCategory: "2d1n",
    style: "family",
    styleLabel: "Private Charter / Multi-Generational",
    priceStarting: 28000,
    priceFormatted: "₹28,000",
    priceNote: "all-inclusive for entire private boat (up to 6 family members) / ₹3,500 per extra guest",
    badge: "Exclusive Vessel Charter",
    isFeatured: false,
    heroImage: "assets/images/boatwithtraveler.jpg",
    thumbnail: "assets/images/boatwithtraveler.jpg",
    gallery: [
      "assets/images/boatwithtraveler.jpg",
      "assets/images/deer.jpg",
      "assets/images/jangleboatiing.jpg"
    ],
    summary: "Enjoy complete privacy, uncompromised safety, and flexible scheduling on your own private Sundarban river vessel. Tailored with care for multi-generational families with elderly grandparents and young children. Includes kid-friendly and mild Bengali menu options, child lifejackets, safe vessel side netting, and personalized pacing without rushing.",
    keyHighlights: [
      "Exclusive private wooden motor cruiser—no mixing with other tour groups",
      "Child safety netting on deck railings and certified child-sized life vests",
      "Personalized culinary preferences: non-spicy options, Jain meals, or specific dietary requests",
      "Flexible departure times from Godkhali to suit family comfort",
      "Choice of Sajnekhali and Sudhanyakhali watchtowers with gentle ramp access where available",
      "Private Bonbibi folk drama or acoustic folk music evening organized just for your family"
    ],
    watchtowersCovered: ["Sajnekhali Complex", "Sudhanyakhali Watchtower", "Pirkhali Creeks", "Gosaba Island"],
    bestFor: "Families with young children, senior citizens, intimate friend circles",
    physicalDemand: "Low (Paced entirely to your family’s comfort)",
    groupSize: "Private vessel (up to 6 guests included, expandable up to 15)",
    departurePoint: "Godkhali Ghat (Flexible boarding time) or private Kolkata home pickup",
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Private Embarkation & Family River Cruise",
        timeline: [
          {
            time: "08:00 AM",
            activity: "Comfortable Departure from Kolkata",
            description: "Private AC Innova or Tempo Traveller pickup from your family home in Kolkata."
          },
          {
            time: "11:00 AM",
            activity: "Private Vessel Boarding at Godkhali",
            description: "Board your private vessel. Welcome gifts for children, soothing tea for seniors, and custom hot brunch."
          },
          {
            time: "01:30 PM",
            activity: "Check-in at Private Family Villa / Cottages",
            description: "Arrive at family-friendly eco-resort. Rest in adjoining air-conditioned cottages."
          },
          {
            time: "03:30 PM",
            activity: "Gentle Sajnekhali Discovery",
            description: "Visit the crocodile pond and mangrove museum. Informative, engaging storytelling by our guide tailored for kids."
          },
          {
            time: "07:00 PM",
            activity: "Private Cultural Evening & Campfire",
            description: "Exclusive acoustic Bengali folk music or Bonbibi storytelling session with evening snacks."
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Sudhanyakhali Wildlife Watch & Relaxed Homeward Cruise",
        timeline: [
          {
            time: "07:30 AM",
            activity: "Relaxed Breakfast on the River",
            description: "Enjoy hot pancakes, toast, eggs, or traditional Puri-Sabji as the vessel glides smoothly."
          },
          {
            time: "09:00 AM",
            activity: "Sudhanyakhali Watchtower Safari",
            description: "Safe, guided walk across the protected fenced pathway to the observation tower. Observe deer herds and birds."
          },
          {
            time: "01:00 PM",
            activity: "Family Banquet on Board",
            description: "Special multi-course feast featuring family favorite dishes and fresh mango/pineapple chutney."
          },
          {
            time: "04:00 PM",
            activity: "Godkhali Disembarkation",
            description: "Seamless return to Godkhali Ghat. Private vehicle transfer back to your doorstep in Kolkata."
          }
        ]
      }
    ],
    inclusions: [
      "Entire private motorized tourist cruiser exclusively for your group",
      "1 Night stay in 2-3 deluxe AC rooms/cottages at our eco-resort (based on family size)",
      "All meals customized to your dietary preferences (mild spices, Jain/Vegan upon request)",
      "All Forest Department permits, private guide, and boat toll fees",
      "Private cultural entertainment session",
      "Unlimited bottled water, juices, and tea/coffee on board"
    ],
    exclusions: [
      "Kolkata private vehicle round-trip transfer (arranged upon request at transparent rates)",
      "Personal shopping and souvenirs in local villages",
      "Staff gratuities"
    ],
    accommodations: "Family cottages or interconnecting eco-suites with hot water, mosquito nets, and power backup.",
    seasonalAdvice: "Available year-round. Winter months (Oct-Feb) offer the most pleasant daytime temperatures for kids and seniors."
  },
  {
    id: "honeymoon-retreat",
    title: "River Mist Wilderness Honeymoon Retreat",
    subtitle: "Secluded 3-Day/2-Night romantic mangrove sanctuary experience for couples",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    durationCategory: "3d2n",
    style: "romantic",
    styleLabel: "Quiet Luxury / Couples Retreat",
    priceStarting: 22500,
    priceFormatted: "₹22,500",
    priceNote: "per couple (all-inclusive private package with luxury cottage stay)",
    badge: "Romantic Seclusion",
    isFeatured: false,
    heroImage: "assets/images/jangleboatiing.jpg",
    thumbnail: "assets/images/jangleboatiing.jpg",
    gallery: [
      "assets/images/jangleboatiing.jpg",
      "assets/images/boatwithtraveler.jpg",
      "assets/images/deer.jpg"
    ],
    summary: "Immerse in the serene poetry of the world’s most enigmatic river country. Stay in our premier secluded river-view suite with an expansive private deck overlooking the tranquil waters. Savor candlelit dinners on a moored wooden vessel, sunset high teas at the five-river confluence, and private naturalist boat safaris through the heart of the mangrove wilderness.",
    keyHighlights: [
      "Exclusive stay in the Premier Riverfront Honeymoon Suite with private veranda",
      "Private candlelit dinner on the upper boat deck under pristine starry skies",
      "Sunset champagne or artisanal Bengal estate tea ceremony at Panchamukhani confluence",
      "Private naturalist and dedicated captain for unhurried couple safaris",
      "Couples visit to Dobanki Canopy Walk and Sajnekhali Sanctuary",
      "Complimentary floral welcome, artisanal chocolates, and Bengal honey gift hamper"
    ],
    watchtowersCovered: ["Dobanki Canopy Walk", "Sudhanyakhali", "Sajnekhali", "Panchamukhani Confluence"],
    bestFor: "Honeymooners, wedding anniversaries, romantic wilderness getaways",
    physicalDemand: "Low to Moderate (Relaxed pacing)",
    groupSize: "Private for 2 guests (Couple)",
    departurePoint: "Private doorstep pickup from Kolkata / Godkhali Ghat",
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Private Transfer & Romantic Sunset on the Gomor River",
        timeline: [
          {
            time: "08:00 AM",
            activity: "Chauffeured Kolkata Departure",
            description: "Private executive sedan transfer directly from Kolkata to Godkhali."
          },
          {
            time: "11:00 AM",
            activity: "Champagne & Coconut Welcome",
            description: "Board private wooden cruiser decorated with seasonal marigolds. Cruise toward Dayapur."
          },
          {
            time: "01:00 PM",
            activity: "Check-in: Honeymoon Sanctuary Suite",
            description: "Settle into your riverfront haven with king bed and panoramic river vistas. Private gourmet lunch."
          },
          {
            time: "04:30 PM",
            activity: "Golden Hour Confluence Cruise",
            description: "Sunset cruise with sparkling juice or estate tea and artisanal savories."
          },
          {
            time: "08:00 PM",
            activity: "Candlelit Deck Dining Under Delta Stars",
            description: "Four-course private dinner served on the moored boat deck serenaded by the quiet river current."
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Dobanki Canopy Walkway & Secluded Creeks",
        timeline: [
          {
            time: "07:00 AM",
            activity: "Champagne Breakfast on the Water",
            description: "Fresh berries, French toast, artisanal cheeses, or warm Bengali delicacies on deck."
          },
          {
            time: "09:30 AM",
            activity: "Dobanki Canopy Walk Experience",
            description: "Stroll high above the mangrove canopy holding hands, observing the vast wilderness below."
          },
          {
            time: "01:30 PM",
            activity: "River Feast & Afternoon Repose",
            description: "Special slow-cooked royal delicacy lunch, followed by downtime in your private veranda."
          },
          {
            time: "05:00 PM",
            activity: "Private Bonfire & Acoustic Serenade",
            description: "Riverside evening campfire with traditional acoustic Baul and Bhatiyali folk songs."
          }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Sudhanyakhali Sunrise & Gentle Return",
        timeline: [
          {
            time: "06:30 AM",
            activity: "Early Morning Wildlife Hide",
            description: "Search for wildlife at Sudhanyakhali watchtower during quiet morning light."
          },
          {
            time: "11:00 AM",
            activity: "Farewell Brunch & Honey Tasting",
            description: "Savor raw organic mangrove honey harvested by Sundarban Mawalis."
          },
          {
            time: "01:30 PM",
            activity: "Godkhali Return & Kolkata Drop",
            description: "Return transfer to Kolkata with drop-off at your hotel or residence."
          }
        ]
      }
    ],
    inclusions: [
      "2 Nights in Premier Honeymoon Suite with river-facing balcony",
      "Private chauffeured AC sedan transfer from Kolkata to Godkhali & return",
      "Private boat charter with dedicated crew and lead naturalist",
      "All curated gourmet meals including private candlelit deck dinner",
      "Forest Department permits, guide charges, and entry passes",
      "Artisanal Sundarban raw forest honey souvenir box"
    ],
    exclusions: [
      "Personal laundry or special external requests",
      "Professional photo session crew (available as add-on)",
      "Staff gratuities"
    ],
    accommodations: "Our premier riverfront suite boasting teak woodwork, expansive floor-to-ceiling river windows, rain shower, and secluded patio.",
    seasonalAdvice: "October through March provides balmy romantic breezes and mesmerizing starry nights."
  }
];

export const WATCHTOWERS_DATA = [
  {
    name: "Sajnekhali Complex",
    tagline: "Forest Department Headquarters & Interpretation Centre",
    description: "The administrative heart of the Sundarban Tiger Reserve. Houses the comprehensive Mangrove Interpretation Centre, Sweet-water Crocodile Pond, Batagur baska turtle breeding pool, and a multi-level watchtower overlooking a freshwater pond.",
    features: ["Mangrove Museum", "Saltwater Crocodile Enclosure", "Freshwater Pond", "Forest Permit Clearance"],
    image: "assets/images/boatwithtraveler.jpg"
  },
  {
    name: "Sudhanyakhali Watchtower",
    tagline: "Prime Tiger Reserve Observation Post",
    description: "Strategically located along the intersection of major tiger territories. The elevated 3-story steel tower overlooks a perennial sweet-water pond where spotted chital deer, wild boar, and apex predators gather to drink.",
    features: ["Sweet-water Watering Hole", "High-frequency Deer Sightings", "Elevated Viewing Deck", "Protected Fenced Walkway"],
    image: "assets/images/deer.jpg"
  },
  {
    name: "Dobanki Canopy Walk",
    tagline: "496-Meter Elevated Treetop Walkway",
    description: "A triumph of eco-engineering. Suspended 20 feet above the tidal mudflats and stretching 496 meters, this walkway is fully enclosed by 20-foot-high heavy net-wire fencing, allowing guests to walk above the mangrove crown safely.",
    features: ["496m Elevated Walkway", "20ft High Safety Enclosure", "Canopy Level Birding", "Deer & Predator Views Below"],
    image: "assets/images/jangleboatiing.jpg"
  },
  {
    name: "Netidhopani Watchtower",
    tagline: "400-Year-Old Terracotta Temple Ruins",
    description: "Steeped in Bengali legend and deep wilderness. Features the remains of a 400-year-old historic brick temple associated with the Manasamangal narrative. Access is strictly controlled under limited forest quota permits.",
    features: ["Historical Temple Ruins", "Controlled Permit Access", "Apex Predator Habitat", "Freshwater Basin"],
    image: "assets/images/tiger.jpg"
  }
];

export const WILDLIFE_DATA = [
  {
    commonName: "Royal Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    conservationStatus: "Endangered (Apex Predator)",
    description: "The only swimming tiger population in the world, adapted to drink saline waters and master tidal currents. Cryptic and revered by locals as the lord of the forest.",
    image: "assets/images/tiger.jpg",
    sightingNote: "Sightings are rare and wild; never guaranteed. Tracking involves reading fresh pugmarks and monitoring deer alarm calls."
  },
  {
    commonName: "Estuarine Crocodile",
    scientificName: "Crocodylus porosus",
    conservationStatus: "Vulnerable / Protected",
    description: "The largest living reptile on Earth. Can be seen basking on exposed mudbanks during low tides, particularly between November and February.",
    image: "assets/images/corcodile.jpg",
    sightingNote: "Frequent sightings during sunny winter middays along exposed muddy riverbanks."
  },
  {
    commonName: "Spotted Chital Deer",
    scientificName: "Axis axis",
    conservationStatus: "Abundant / Vital Prey Base",
    description: "Graceful herds graze on fresh mangrove shoots and sweet-water grasses, sharing a mutualistic alarm-call partnership with Rhesus macaques.",
    image: "assets/images/deer.jpg",
    sightingNote: "Very commonly observed around Sudhanyakhali, Dobanki, and Sajnekhali watering basins."
  },
  {
    commonName: "Sundarban Kingfishers",
    scientificName: "Alcedinidae (9 Species)",
    conservationStatus: "Protected Delta Resident",
    description: "The delta is world-renowned for hosting 9 distinct kingfisher species including Brown-winged, Black-capped, Collared, Ruddy, and Pied kingfishers.",
    image: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=800&q=80",
    sightingNote: "Abundant along narrow creeks (Pirkhali, Chokhakhali) during morning and late afternoon boat drifts."
  },
  {
    commonName: "Gangetic & Irrawaddy Dolphins",
    scientificName: "Platanista gangetica / Orcaella brevirostris",
    conservationStatus: "Endangered Aquatic Mammals",
    description: "Surfacing gracefully at the meeting of sweet river water and salty sea currents, especially around the wide Panchamukhani confluence.",
    image: "assets/images/jangleboatiing.jpg",
    sightingNote: "Best spotted during calm early morning tides at broad river junctions."
  },
  {
    commonName: "Water Monitor Lizard",
    scientificName: "Varanus salvator",
    conservationStatus: "Protected Reptile",
    description: "Reaching lengths exceeding two meters, these formidable semi-aquatic lizards swim effortlessly and forage along tangled mangrove root networks.",
    image: "assets/images/corcodile.jpg",
    sightingNote: "Often seen crawling over pneumatophores or sunning on fallen timber along creek banks."
  }
];

export const GALLERY_DATA = [
  {
    id: 1,
    title: "Cruising the Silent Creeks",
    category: "tidal-rivers",
    categoryLabel: "Tidal Rivers",
    caption: "Our handcrafted wooden safari vessel navigates misty morning channels through the Sundarban Tiger Reserve.",
    image: "assets/images/jangleboatiing.jpg",
    location: "Gomor River Confluence"
  },
  {
    id: 2,
    title: "Royal Bengal Tiger on Riverbank",
    category: "wildlife",
    categoryLabel: "Wildlife",
    caption: "A magnificent adult tiger photographed resting near the waterline along the Sudhanyakhali channel.",
    image: "assets/images/tiger.jpg",
    location: "Sudhanyakhali Buffer"
  },
  {
    id: 3,
    title: "Estuarine Saltwater Crocodile Basking",
    category: "wildlife",
    categoryLabel: "Wildlife",
    caption: "A massive saltwater crocodile warming in the winter sun along an exposed silt embankment.",
    image: "assets/images/corcodile.jpg",
    location: "Netidhopani Approach"
  },
  {
    id: 4,
    title: "Spotted Chital Deer Herd",
    category: "wildlife",
    categoryLabel: "Wildlife",
    caption: "Axis deer grazing peacefully on tender mangrove foliage near a freshwater pond.",
    image: "assets/images/deer.jpg",
    location: "Sudhanyakhali Station"
  },
  {
    id: 5,
    title: "Guests Aboard Safari Vessel",
    category: "safari-boats",
    categoryLabel: "Safari Boats",
    caption: "Travelers enjoying 360-degree panoramic sights and fresh sea breezes from the open observation deck.",
    image: "assets/images/boatwithtraveler.jpg",
    location: "Pirkhali Riverway"
  },
  {
    id: 6,
    title: "Mawalis Collecting Wild Mangrove Honey",
    category: "forest-life",
    categoryLabel: "Forest Life",
    caption: "Generations of brave honey collectors navigating the dense Gewa and Sundari canopy during harvest season.",
    image: "assets/images/honeycollection.jpg",
    location: "Sajnekhali Sector"
  },
  {
    id: 7,
    title: "Traditional Estuarine Fishing",
    category: "forest-life",
    categoryLabel: "Forest Life",
    caption: "Local fishermen reading tidal currents and casting traditional nets in the brackish waterways.",
    image: "assets/images/fishcatching.jpg",
    location: "Gosaba Delta"
  },
  {
    id: 8,
    title: "Cultural Jhumur & Folk Performance",
    category: "forest-life",
    categoryLabel: "Forest Life",
    caption: "Local artists performing traditional delta dance and songs of Bonbibi under the evening stars.",
    image: "assets/images/jhumur dance.jpg",
    location: "Pakhiralay Island"
  },
  {
    id: 9,
    title: "Royal Bengal Tiger Glancing at Estuary",
    category: "wildlife",
    categoryLabel: "Wildlife",
    caption: "The apex predator of Bengal emerging briefly through tangled mangrove stilt roots.",
    image: "assets/images/tiger2.jpg",
    location: "Core Reserve Corridor"
  }
];

export const FAQS_DATA = [
  {
    question: "How do we travel from Kolkata to the Sundarbans embarkation point?",
    answer: "The primary embarkation point for all authorized tourist cruises in the Indian Sundarbans is Godkhali Ghat (approx. 85 km southeast of Kolkata). By private AC car, the scenic drive through Baruipur and Canning takes 2.5 to 3.5 hours. Alternatively, local suburban trains depart every hour from Sealdah Station to Canning (1 hour 15 mins), followed by a 40-minute shared auto or private car ride to Godkhali. We provide door-to-door AC transfers directly from your Kolkata residence, hotel, or Netaji Subhash Chandra Bose International Airport."
  },
  {
    question: "Are tiger sightings guaranteed on Sundarban expeditions?",
    answer: "No ethical operator will ever guarantee a Royal Bengal Tiger sighting. The Sundarbans is a vast, dense, tidal mangrove jungle spanning over 10,000 square kilometers across the delta, where tigers are master swimmers and cryptic stalkers. Sightings are pure, un-baited, and authentic wilderness privileges. Our senior local trackers and naturalists maximize your chances by monitoring fresh pugmarks, deer alarm calls, and seasonal waterhole patterns."
  },
  {
    question: "Is it safe for senior citizens and young children?",
    answer: "Yes, absolutely. All our safaris are conducted on licensed, stable wooden motor vessels fitted with marine safety equipment, railing safety nets, and approved lifejackets for both adults and children. Watchtowers at Sajnekhali, Sudhanyakhali, and the Dobanki 496m Canopy Walk feature secure 20-foot perimeter fencing and paved boardwalks. We also offer private custom charters with flexible schedules and non-spicy meals for families."
  },
  {
    question: "What forest permits are required, and who arranges them?",
    answer: "Foreign and domestic travelers must obtain mandatory permits from the West Bengal Forest Department to enter the Sundarban Tiger Reserve (STR). For foreign nationals, passport and valid Indian visa details are required at least 48 hours prior. We handle 100% of the forest clearance permits, boat licenses, and camera tokens so you can travel without administrative friction."
  },
  {
    question: "What is the best season to visit the Sundarbans?",
    answer: "The optimum season is from mid-October to late March when weather is pleasantly cool (14°C to 26°C), skies are crystal clear, and estuarine crocodiles, deer, and monitor lizards emerge on sunlit mudflats to warm themselves. Winter is also peak season for migratory raptors and shorebirds. Monsoon months (July-September) present dramatic emerald green landscapes and swollen rivers for intrepid nature enthusiasts."
  },
  {
    question: "What food is served during the expedition?",
    answer: "We take immense pride in our authentic Bengal culinary heritage. Meals are freshly cooked by our on-board chefs using organic village harvests and fresh catch. Delicacies include Gobindobhog rice, Bhetki paturi, Chingri malaikari (prawn curry in coconut cream), seasonal vegetable curries, dal, Beguni, and traditional Kolkata desserts. Pure vegetarian, Jain, and mild child-friendly meals are happily accommodated with prior notice."
  }
];
