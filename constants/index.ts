import {
  ImFacebook,
  ImInstagram,
  ImPinterest,
  ImYoutube,
} from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { name: "ImFacebook", href: "https://www.facebook.com", icon: ImFacebook },
  { name: "TwitterX", href: "https://x.com", icon: RiTwitterXLine },
  { name: "Pinterest", href: "https://www.pinterest.com/", icon: ImPinterest },
  { name: "Instagram", href: "https://www.instagram.com", icon: ImInstagram },
  { name: "Youtube", href: "https://www.youtube.com", icon: ImYoutube },
];

export const PORTFOLIO_LIST = [
  { name: "Portfolio image", path: "/assets/portfolio/1.jpg" },
  { name: "Portfolio image", path: "/assets/portfolio/2.jpg" },
  { name: "Portfolio image", path: "/assets/portfolio/3.jpg" },
  { name: "Portfolio image", path: "/assets/portfolio/4.jpg" },
  { name: "Portfolio image", path: "/assets/portfolio/5.jpg" },
  { name: "Portfolio image", path: "/assets/portfolio/6.jpg" },
];

export const BLOG_LIST = [
  {
    title: "why the trend of minimalism?",
    description:
      "Explore the rising trend of minimalism and how simplicity influences modern design, lifestyle, and photography approaches around the world.",
    category: "trends",
    path: "",
    createAt: "18.08.2025",
  },
  {
    title: "world’s top photograph collections",
    description:
      "Discover the world’s most stunning photograph collections that showcase creativity, emotion, and mastery in visual storytelling.",
    category: "collection",
    path: "",
    createAt: "18.08.2025",
  },
  {
    title: "simple tips & tricks of photography",
    description:
      "Learn practical photography tips and tricks to improve your skills, capture better moments, and create visually striking images.",
    category: "trends",
    path: "",
    createAt: "18.08.2025",
  },
  {
    title: "how to get model look portraits",
    description:
      "Master the techniques to create model-style portraits, including posing, lighting, and composition for professional results.",
    category: "portraits",
    path: "",
    createAt: "18.08.2025",
  },
];
