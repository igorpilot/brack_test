import Link from "next/link";

export const NavLink = ({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded transition-all duration-300 ${
        active
          ? "bg-yellow-400 text-black shadow-[0_0_10px_#FFE81F]"
          : "text-yellow-400 hover:text-black hover:bg-yellow-400"
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};
