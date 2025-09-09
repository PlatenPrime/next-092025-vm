"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation"

interface NavItem {
  label: string;
  href: string;
  isActive: boolean;
}

export const BTWLogo = () => {
  return (
    <Image src="/logo-btw.png" alt="Logo BTW" width={36} height={36} priority />
  );
};

export default function Header() {
  const navItems: NavItem[] = [
    {
      label: "Артикулы",
      href: "/arts",
      isActive: false,
    },
    {
      label: "Ряды",
      href: "/rows",
      isActive: true,
    },
    {
      label: "Asks",
      href: "/asks",
      isActive: false,
    },
  ];

  const pathname = usePathname();

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link color="foreground" href="/" className="flex items-center gap-2">
          <BTWLogo />
          <p className="font-bold text-inherit">BTW</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.label} isActive={item.isActive}>
            <Link
              color="foreground"
              href={item.href}
              aria-current={item.isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
