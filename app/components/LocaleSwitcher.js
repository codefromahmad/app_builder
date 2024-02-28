"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "../../i18n.config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const checkLocale = pathName.split("/")[1];

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul
      className={`flex ${
        checkLocale === "ar" && "ml-5"
      } gap-x-1 border px-0 py-2 rounded-lg border-secondary`}
    >
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={`rounded-md ${
                checkLocale === "en" ? "p-2" : "py-0 px-2"
              } text-white ${
                checkLocale === locale ? "bg-secondary" : "bg-transparent"
              }`}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
