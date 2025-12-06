import { Skill, Experience } from '../types';

export const specializations: Skill[] = [
  {
    name: "Clean Architecture",
    category: "specialization",
    description: "Modular codebases, SOLID Principles",
    icon: "architecture"
  },
  {
    name: "State Management",
    category: "specialization",
    description: "Bloc, RxDart, Provider",
    icon: "layers"
  },
  {
    name: "Media Streaming",
    category: "specialization",
    description: "Audio/Video Playback, WebRTC (Agora/Jitsi)",
    icon: "play_circle"
  }
];

export const languages: Skill[] = [
  { name: "Dart", category: "language" },
  { name: "Kotlin", category: "language" },
  { name: "Swift", category: "language" },
  { name: "PHP", category: "language" },
  { name: "Arabic (Native)", category: "language" },
  { name: "English", category: "language" }
];

export const frameworks: Skill[] = [
  { name: "Flutter", category: "framework" },
  { name: "Laravel", category: "framework" },
  { name: "Material Design", category: "framework" },
  { name: "Cupertino", category: "framework" }
];

export const tools: Skill[] = [
  { name: "Firebase", category: "tool" },
  { name: "Git/GitHub/GitLab", category: "tool" },
  { name: "CI/CD", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "Google Maps SDK", category: "tool" },
  { name: "Socket.IO", category: "tool" }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Flutter Developer",
    company: "Moltaqa Company – Software House",
    companyUrl: "https://moltaqa.net/",
    period: "04/2024 – Present",
    location: "Mansoura, Egypt",
    type: "Full Time",
    description: "Leading app architecture and development lifecycle for multiple production projects.",
    achievements: [
      "Took ownership of app architecture, designing scalable codebases using Clean Architecture, Bloc, and multi-module structure.",
      "Led improvements to the development lifecycle, introducing code standards and better Git branching workflows.",
      "Developed and launched 10+ production-level apps."
    ]
  },
  {
    id: "exp-2",
    role: "Flutter Freelancer Developer",
    company: "Linkey App – Startup Project",
    period: "01/2025 – 08/2025",
    location: "Remote",
    type: "Freelance",
    description: "Developed a complete cross-platform service marketplace startup application.",
    achievements: [
      "Built multi-role flows (provider/client) and real-time in-app chat using Socket.IO.",
      "Implemented media uploads and Multilingual UI (Arabic, English, German)."
    ]
  },
  {
    id: "exp-3",
    role: "Flutter Developer",
    company: "Vibers Net Startup",
    period: "12/2024 – 04/2025",
    location: "Remote",
    type: "Part Time",
    description: "Supporting early-stage MVP for a digital entertainment market product.",
    achievements: [
      "Implemented advanced video playback with custom controls, full-screen modes, and smooth streaming.",
      "Positioned the product for launch through rapid feature implementation."
    ]
  },
  {
    id: "exp-4",
    role: "Mid Level Flutter Developer",
    company: "Baianat Company - Software House",
    companyUrl: "https://www.baianat.com/",
    period: "12/2023 – 03/2024",
    location: "Cairo, Egypt",
    type: "Full Time",
    description: "Developed mobile apps using Flutter and Clean Architecture, integrating advanced media features.",
    achievements: [
      "Delivered 3 live production apps out of 5 developed.",
      "Integrated social login, live chat, live streaming, and audio streaming features."
    ]
  }
];