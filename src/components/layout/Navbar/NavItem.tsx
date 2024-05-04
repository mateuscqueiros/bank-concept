import { cn } from "@/lib/utils";
import Link from "next/link";

type NavItemProps = {
  text: string;
  icon: JSX.Element;
  link: string;
  active: string;
};

export function NavItem({ text, icon, link, active }: NavItemProps) {
  const isActive = link === active;

  return (
    <Link href={link}>
      <div
        className={cn([
          "flex flex-row items-center h-10 px-8 py-6 hover:bg-secondary",
          isActive ? "bg-secondary" : null,
        ])}
      >
        <span className="mr-10">{icon}</span>
        <span>{text}</span>
      </div>
    </Link>
  );
}
