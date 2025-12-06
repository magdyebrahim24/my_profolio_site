

import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "maghsool",
    title: "Maghsool",
    category: "Services",
    company: "Moltaqa Software House",
    companyUrl: "https://moltaqa.net/",
    shortDescription: "Multi-Vendor Laundry & Delivery Platform (3 Apps: User, Provider, Delivery).",
    fullDescription: "A cross-platform multi-role service app built with Flutter (using flavors) and Laravel backend. It allows users to order laundry services, providers to manage requests, and delivery agents to fulfill orders. The system includes order management, real-time tracking with Google Maps, and role-based flows.",
    thumbnail: "https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=2071&auto=format&fit=crop", // Laundry/Clothes placeholder
    images: [
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517677208171-0bc6799a4c3d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517677208171-0bc6799a4c3d?q=80&w=2070&auto=format&fit=crop"
    ],
    techStack: ["Flutter", "Laravel", "Google Maps", "Flavors", "Bloc", "Clean Architecture"],
    links: {
      playStore: "#",
      appStore: "#"
    },
    apps: [
      {
        name: "User App",
        links: { playStore: "#", appStore: "#" }
      },
      {
        name: "Provider App",
        links: { playStore: "#", appStore: "#" }
      },
      {
        name: "Delivery App",
        links: { playStore: "#", appStore: "#" }
      }
    ],
    features: [
      { title: "Multi-Role", description: "Distinct apps for Users, Providers, and Delivery agents using Flutter Flavors.", icon: "group_work" },
      { title: "Real-time Tracking", description: "Live tracking of orders and delivery agents via Google Maps.", icon: "location_on" },
      { title: "Order Management", description: "Comprehensive flow for placing, processing, and delivering laundry orders.", icon: "inventory" }
    ],
    role: "Contributed to app architecture and core features. Implemented role-based flows and map tracking."
  },
  {
    id: "modo",
    title: "Modo",
    category: "Services",
    company: "Moltaqa Software House",
    companyUrl: "https://moltaqa.net/",
    shortDescription: "Multi-Vendor Delivery Platform (User, Provider, Delivery).",
    fullDescription: "A full delivery system consisting of three role-based apps developed using Flutter and flavors: User, Provider, and Delivery. Supports order placement, live tracking via Google Maps, and provider tools to manage stores and products.",
    thumbnail: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop", // Delivery package placeholder
    techStack: ["Flutter", "Google Maps", "Flavors", "Clean Architecture"],
    links: {
      playStore: "#",
      appStore: "#"
    },
    apps: [
      {
        name: "User App",
        links: {
          playStore: "https://play.google.com/store/apps/details?id=com.moltaqa.modo.user",
          appStore: "https://apps.apple.com/us/app/%D9%85%D9%88%D8%AF%D9%88-modo/id6742700878"
        }
      },
      {
        name: "Delivery App",
        links: {
          playStore: "https://play.google.com/store/apps/details?id=com.moltaqa.modo.delivery",
          appStore: "https://apps.apple.com/us/app/modo-delivery/id6752898958"
        }
      },
      {
        name: "Provider App",
        links: {
          playStore: "https://play.google.com/store/apps/details?id=com.moltaqa.modo.provider",
          appStore: "https://apps.apple.com/us/app/modo-service-provider/id6742562886"
        }
      }
    ],
    features: [
      { title: "Live Tracking", description: "Real-time tracking of delivery agents.", icon: "my_location" },
      { title: "Store Management", description: "Provider tools to manage stores and products.", icon: "store" }
    ],
    role: "Contributed to app structure, shared components, authentication, and key delivery features."
  },
  {
    id: "linkey",
    title: "Linkey",
    category: "Services",
    company: "Linkey Startup",
    shortDescription: "Multi-Role Service Marketplace App.",
    fullDescription: "A cross-platform startup app that connects service providers and clients across various domains. Developed the entire mobile application using Flutter, supporting multi-role access for providers (who register, publish services, and manage requests) and clients (who send inquiries and negotiate through in-app chat).",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop", // Handshake/Marketplace placeholder
    techStack: ["Flutter", "Socket.IO", "Media Uploads", "Multilingual UI"],
    links: {
      playStore: "#",
      appStore: "#"
    },
    features: [
      { title: "In-App Chat", description: "Real-time chat using Socket.IO.", icon: "chat" },
      { title: "Multilingual", description: "Supports Arabic, English, and German.", icon: "translate" },
      { title: "Marketplace", description: "Service publishing and request management.", icon: "storefront" }
    ],
    role: "Developed the complete cross-platform app, implementing chat, media uploads, and UI."
  },
  {
    id: "sahet-eltahadi",
    title: "Sahet ElTahadi",
    category: "Game",
    company: "Moltaqa Software House",
    companyUrl: "https://moltaqa.net/",
    shortDescription: "Multiplayer Trivia Game with real-time challenges.",
    fullDescription: "A cross-platform trivia game where users select from categories like sports and education to challenge friends in real-time. The app supports free games, subscriptions, and in-app purchases. Features include real-time multiplayer, background music, animated effects, and point-based scoring.",
    // Replaced broken Drive link with a relevant Unsplash image (Gaming/Challenge theme)
    thumbnail: "https://drive.google.com/file/d/1uY4fwT-KvBfjzNyJdB9OdSNC9iOnbYKu/view?usp=sharing",
    images: [
      "https://drive.google.com/uc?export=view&id=1ntYtqbtk5aGdF_F7lJbGOePbkmOM4jN5",
      "https://drive.google.com/uc?export=view&id=11rr4yFnrVO6N7fwe4h614DUsTMoHs04V",
      "https://drive.google.com/uc?export=view&id=1LPVBwP4IA4KbuC88bkCTOkhrssKVmqNq",
      "https://drive.google.com/uc?export=view&id=1ULCT1u0H6r3TBU8JUdatTFIdRRF-X43M",
      "https://drive.google.com/uc?export=view&id=1Uk2VONJxi9f8-3_gAxlTLQgsLAQHUodu",
      "https://drive.google.com/uc?export=view&id=1hQ5FNlpgh7B76GO8dFAmPJDlyfyWRw9V",
      "https://drive.google.com/uc?export=view&id=1C9qW4iiIwlvSYfex5TLKPe2qTYaCmUZ0"
    ],
    techStack: ["Flutter", "Real-time DB", "In-App Purchases", "Animations"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.moltaqa.sahet.eltahadi",
      appStore: "https://apps.apple.com/us/app/%D8%B3%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A/id6745170793"
    },
    features: [
      { title: "Real-Time Multiplayer", description: "Challenge friends instantly in trivia battles.", icon: "sports_esports" },
      { title: "In-App Purchases", description: "Subscriptions and flexible access to content.", icon: "shopping_cart" },
      { title: "Interactive UI", description: "Animated effects, sound feedback, and timed questions.", icon: "touch_app" }
    ]
  },
  {
    id: "rafeqny",
    title: "Rafeqny",
    category: "Services",
    company: "Moltaqa Software House",
    companyUrl: "https://moltaqa.net/",
    shortDescription: "Multi-Vendor Task Management & Service App.",
    fullDescription: "A dual-role service app where providers can hire clients to perform tasks, manage job flow, and track them in real-time using Google Maps.",
    thumbnail: "https://images.unsplash.com/photo-1572509018340-d2c0ec229986?q=80&w=2069&auto=format&fit=crop", // Map/Phone placeholder
    techStack: ["Flutter", "Firebase", "Bloc", "Google Maps SDK", "Schedule Notifications"],
    links: {
      playStore: "#",
      appStore: "#"
    },
    apps: [
      {
        name: "User App",
        links: {
          playStore: "https://play.google.com/store/apps/details?id=com.moltaqa.rafeqni.client",
          appStore: "https://apps.apple.com/us/app/%D8%B1%D8%A7%D9%81%D9%82%D9%86%D9%8A/id6479957453"
        }
      },
      {
        name: "Provider App",
        links: {
          playStore: "https://play.google.com/store/apps/details?id=com.moltaqa.rafeqni.provider",
          appStore: "https://apps.apple.com/us/app/%D8%B1%D8%A7%D9%81%D9%82%D9%86%D9%8A-%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%81%D9%82/id6479957485"
        }
      }
    ],
    features: [
      { title: "Task Management", description: "Hire clients and manage job flows.", icon: "assignment" },
      { title: "Real-time Tracking", description: "Track service providers on the map.", icon: "location_on" }
    ]
  },
  {
    id: "laundry-city",
    title: "Laundry City",
    category: "Services",
    company: "Moltaqa Software House",
    companyUrl: "https://moltaqa.net/",
    shortDescription: "Laundry Booking & Delivery App.",
    fullDescription: "A smart service app that allows users to book laundry and ironing services, track order status, and schedule pickups and deliveries.",
    thumbnail: "https://images.unsplash.com/photo-1517677208171-0bc6799a4c3d?q=80&w=2070&auto=format&fit=crop", // Laundry
    techStack: ["Flutter", "Booking System", "Order Tracking"],
    links: {
      playStore: "#",
      appStore: "#"
    },
    features: [
      { title: "Scheduling", description: "Schedule pickups and deliveries at convenient times.", icon: "schedule" },
      { title: "Order Tracking", description: "Monitor the status of your laundry.", icon: "local_shipping" }
    ]
  },
  {
    id: "el-fahd-story",
    title: "El Fahd Story",
    category: "Services",
    company: "Moltaqa Software House",
    companyUrl: "https://moltaqa.net/",
    shortDescription: "Promo Code & Offers Aggregator.",
    fullDescription: "An app that helps users browse and redeem discount codes and special offers across a wide range of shopping categories and services.",
    thumbnail: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop", // Discounts
    techStack: ["Flutter", "Offers System"],
    links: {
      playStore: "#",
      appStore: "#"
    },
    features: [
      { title: "Discount Redemption", description: "Browse and use promo codes easily.", icon: "local_offer" },
      { title: "Categories", description: "Wide range of shopping categories.", icon: "category" }
    ]
  },
  {
    id: "tatmeen",
    title: "Tatmeen",
    category: "Healthcare",
    company: "Baianat",
    companyUrl: "https://www.baianat.com/",
    shortDescription: "Online Medical Consultation Platform using Agora.",
    fullDescription: "A healthcare consultation platform offering secure audio/video calls, appointment booking, and real-time chat between patients and medical consultants. Built as two separate apps (Patient and Consultant) using Flutter flavors. Includes Agora for calling and rich in-app chat with media attachments.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2028&auto=format&fit=crop", // Healthcare
    techStack: ["Flutter", "Agora", "WebRTC", "Flavors", "Bloc"],
    links: {
      playStore: "#",
      appStore: "#"
    },
    features: [
      { title: "Video/Audio Calls", description: "Secure consultations powered by Agora SDK.", icon: "video_call" },
      { title: "Appointment System", description: "Booking and real-time updates for consultations.", icon: "calendar_month" },
      { title: "Chat", description: "Rich media chat between patients and doctors.", icon: "chat" }
    ]
  },
  {
    id: "tmeny",
    title: "Tmeny",
    category: "Healthcare",
    company: "Baianat",
    companyUrl: "https://www.baianat.com/",
    shortDescription: "Pediatric Health & Parenting App.",
    fullDescription: "A mobile app designed to provide reliable answers to parents about child health, pregnancy, and developmental stages. Contributed to modules such as content display, question flow, and overall UX improvements.",
    thumbnail: "https://images.unsplash.com/photo-1544126566-4751750e3cc0?q=80&w=2070&auto=format&fit=crop", // Child/Parenting
    techStack: ["Flutter", "Content Management", "UX Optimization"],
    links: {
      playStore: "#",
      appStore: "#"
    },
    features: [
      { title: "Q&A Flow", description: "Guided question flows for health advice.", icon: "quiz" },
      { title: "Content Display", description: "Reliable health information presentation.", icon: "article" }
    ],
    role: "Contributed to content display, question flow, and UX improvements."
  },
  {
    id: "khsosy",
    title: "Khsosy",
    category: "Education",
    company: "Moltaqa Software House",
    companyUrl: "https://moltaqa.net/",
    shortDescription: "Educational platform for teachers and students with Jitsi.",
    fullDescription: "An innovative educational app that provides both online and offline courses. Supports live private lessons using Jitsi integration with screen sharing, participant management, and real-time AV tools. Offers multi-interface access for teachers and students.",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop", // Education
    techStack: ["Flutter", "Jitsi Meet", "Offline Mode", "Video Streaming"],
    links: {
      playStore: "#",
      appStore: "https://apps.apple.com/us/app/khsosy/id6502696864"
    },
    features: [
      { title: "Live Classrooms", description: "Integrated Jitsi for live lessons and screen sharing.", icon: "cast_for_education" },
      { title: "Offline Access", description: "Access courses and lessons without internet.", icon: "offline_pin" }
    ]
  },
  {
    id: "vibers-net",
    title: "Vibers Net",
    category: "Media",
    company: "Vibers Net Startup",
    shortDescription: "Media Streaming & Content Platform.",
    fullDescription: "A startup product focused on building a full-featured video streaming app for movies and series. Features advanced video playback with custom controls, category browsing, wishlist, and content previews.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop", // Streaming
    techStack: ["Flutter", "Video Player", "Streaming", "Clean Architecture"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.roaya.vn",
      appStore: "https://apps.apple.com/us/app/vibers-net/id6738211316"
    },
    features: [
      { title: "Advanced Playback", description: "Custom controls, full-screen modes, and smooth streaming.", icon: "play_arrow" },
      { title: "Content Discovery", description: "Category browsing and wishlists.", icon: "movie" }
    ]
  },
  {
    id: "otluo",
    title: "Otluo",
    category: "Media",
    company: "Baianat",
    companyUrl: "https://www.baianat.com/",
    shortDescription: "Quran App with Audio Library used by 100K+ users.",
    fullDescription: "A Qur'an app offering full reading, verse bookmarking, and recitation streaming from renowned reciters. Contributed to audio streaming, surah navigation, and bookmark functionality.",
    thumbnail: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop", // Quran
    techStack: ["Flutter", "Audio Streaming", "Local Storage"],
    links: {
      playStore: "#",
      appStore: "#"
    },
    features: [
      { title: "Audio Streaming", description: "High-quality recitation streaming.", icon: "headphones" },
      { title: "Reading Tools", description: "Verse bookmarking and navigation.", icon: "menu_book" }
    ]
  }
];
