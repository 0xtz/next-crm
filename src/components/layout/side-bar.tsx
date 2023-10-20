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

const links = [
  { label: "Home", icon: HomeIcon, href: "/" },
  {
    label: "Metrics",
    icon: ChartIcon,
    href: "statistics",
  },
  {
    label: "Forecast",
    icon: TrendingUpIcon,
    href: "#",
  },
  { label: "Customers", icon: UsersIcon, href: "customers" },
];

const bottomLinks = [
  {
    label: "Settings",
    icon: CogIcon,
    href: "#",
  },
  { label: "Logout", icon: LogoutIcon, href: "#" },
];

export default function SideBare() {
  return (
    <div className="flex h-full flex-col bg-primary-foreground ">
      <div className="flex flex-1 flex-col overflow-y-auto">
        {/* Logo */}
        <div className="text-heading mt-5 h-8 flex-shrink-0 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="mt-5 space-y-3 px-1 sm:px-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={`/dashboard/${link.href}`}
                className={`focus:ring-heading/80 hover:text-heading/80 group relative flex h-10 w-10 items-center justify-center rounded-xl font-medium focus:outline-none focus:ring-2`}
              >
                <Icon className="h-6 w-6 flex-shrink-0" />
                <span className="sr-only">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mb-2 space-y-3 px-1 sm:px-2">
        {bottomLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`focus:ring-heading/80 group relative flex h-10 w-10 items-center justify-center rounded-xl font-medium focus:outline-none focus:ring-2`}
            >
              <Icon className="h-6 w-6 flex-shrink-0" />
              <span className="sr-only">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
