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
