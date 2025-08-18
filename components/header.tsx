import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";
import { MobileNav } from "@/components/mobile-nav";

export const Header = () => {
  return (
    <header className="fixed z-30 w-full px-4 sm:px-7.5 lg:px-25 h-25 lg:h-35 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-15">
        <Nav className="hidden lg:flex" />
        <Socials />
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
