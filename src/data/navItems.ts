import { ROUTES } from "@/lib/constants/routes";
export type NavItem = {
  href: string;
  label: string;
};
export const navItems: NavItem[] = [
  { href: `${ROUTES.HOME}`, label: "Home" },
  { href: `${ROUTES.HEROES_LIST}`, label: "Heroes" },
];
