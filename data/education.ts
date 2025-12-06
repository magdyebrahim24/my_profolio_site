import { Education } from '../types';

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Science",
    institution: "Faculty of Computers and Information Sciences - Mansoura University",
    period: "09/2017 – 08/2021",
    type: "degree",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" // Generic uni placeholder
  }
];

export const certificationsData: Education[] = [
  {
    id: "cert-1",
    degree: "Mobile Application Development (Google Flutter)",
    institution: "Information Technology Institute (ITI)",
    period: "Aug 2019 - May 2020",
    type: "certification",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    verifyLink: "#"
  },
  {
    id: "cert-2",
    degree: "Web Development, PHP, and Laravel Frameworks",
    institution: "Information Technology Institute (ITI)",
    period: "Sep 2020 - Mar 2021",
    type: "certification",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    verifyLink: "#"
  }
];