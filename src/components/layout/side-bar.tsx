import React from "react";
import {
  ChartIcon,
  CogIcon,
  HomeIcon,
  LogoutIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/icons";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", icon: HomeIcon, href: "/#" },
  {
    label: "Metrics",
    icon: ChartIcon,
    href: "/statistics",
  },
  {
    label: "Forecast",
    icon: TrendingUpIcon,
    href: "/forecast",
  },
  { label: "Customers", icon: UsersIcon, href: "/customers" },
];

const bottomLinks = [
  {
    label: "Settings",
    icon: CogIcon,
    href: "/settings",
  },
  { label: "Logout", icon: LogoutIcon, href: "#" },
];

export default function SideBare() {
  const pathname = usePathname().replace("/dashboard", "");

  return (
    // stick to the left side dont scroll with the page
    <aside className="position-fixed flex h-full w-64 flex-col overflow-hidden bg-foreground text-secondary">
      {
        // LOGO
      }
      <div className="flex h-24 w-full items-center justify-center">
        <h2 className="text-center text-2xl font-bold">NextCrm</h2>
      </div>
      {
        // TOP LINKS
      }
      <div className="flex flex-1 flex-col overflow-y-auto">
        <ul className="flex flex-col gap-6 px-3">
          {links.map((link) => (
            <li
              key={link.label}
              className={cn(
                "rounded-xl",
                pathname.startsWith(`${link.href}`) &&
                  "bg-primary text-primary-foreground",
              )}
            >
              <Link
                href={`/dashboard${link.href}`}
                className="flex items-center gap-4 p-4"
              >
                <link.icon
                  className={cn(
                    "h-5 w-5",
                    !pathname.startsWith(`${link.href}`) && "text-primary",
                  )}
                />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {
        //BOTTOM LINKS
      }
      <div className="mb-2 space-y-3 px-1 sm:px-2">
        <ul className="flex flex-col gap-6">
          {bottomLinks.map((link) => (
            <li
              key={link.label}
              className={cn(
                "rounded-xl",
                pathname.startsWith(`${link.href}`) &&
                  "bg-primary text-primary-foreground",
              )}
            >
              <Link
                href={`/dashboard${link.href}`}
                className="flex items-center gap-4 p-4"
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
