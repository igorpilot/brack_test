import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
export const Header = () => {
  return (
    <header>
      <nav className="flex gap-4 px-4 py-4 items-center bg-black">
        <Link href={ROUTES.HOME}>Home</Link>
        <Link href={ROUTES.HEROES_LIST}>Heroes</Link>
      </nav>
    </header>
  );
};
