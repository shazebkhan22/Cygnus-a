"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ResizableNavbar"; // named exports
import { useState } from "react";
import cygnus from "../assets/Cygnus Logo_Color-Logo Horizontal.svg";
// import cygnus_logo from "../assets/Cygnus Logo_Color-Logomark.svg"

export default function NavbarDemo() {
  const navItems = [
    { name: "Applications", link: "#features" },
    { name: "Industries", link: "#pricing" },
    { name: "Partners", link: "#partners" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Nav */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Contact Us</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Nav */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-neutral-600 dark:text-neutral-300 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-2 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <DummyContent />
    </div>
  );
}

// Clean Dummy Content
const DummyContent = () => {
  const boxes = [
    {
      id: 6,
      imageSrc: cygnus,
      cols: 2,
    },
    {
      id: 7,
      title:
        "At Cygnus we believe that decision making is its last true competitive advantage and AI is its flywheel. We partner with industry leaders across Oil & Gas, Industrials, Retail and CPG and Financial Services. We build AI products, solutions and agentic systems that don’t just automate; they elevate. Inspired by engineering, driven by outcomes, and built for the real world— we're collaborators in your AI journey.",
      cols: 2,
    },
    { id: 1, title: "", cols: 1 },
    { id: 2, title: "Launching Soon", cols: 2 },
    { id: 3, title: "", cols: 1 },
    { id: 5, title: "", cols: 1 },
    { id: 8, title: "", cols: 1 },
    { id: 10, title: "", cols: 1 },
    { id: 11, title: "", cols: 1 },
  ];

  // Map cols number to Tailwind classes
  const colSpanClasses: Record<number, string> = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
  };

  return (
    <div className="container mx-auto p-8 pt-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`${
              colSpanClasses[box.cols] || "md:col-span-1"
            } h-60 flex items-center justify-center rounded-lg p-4 shadow-sm overflow-auto bg-neutral-100 dark:bg-neutral-800`}
          >
            {box.imageSrc ? (
              <img
                src={box.imageSrc}
                alt="Club"
                className="h-full w-full object-cover rounded-lg"
              />
            ) : box.title === "Launching Soon" ? (
              <p className="text-center text-5xl font-bold">{box.title}</p>
            ) : (
              <p className="text-center text-sm md:text-base">{box.title}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
