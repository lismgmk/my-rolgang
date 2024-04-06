"use client";

import { humanize } from "@/lib/utils/textConverter";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const paths = pathname.split("/").filter((x) => x);
  let parts = [
    {
      label: "Home",
      href: "/",
      "aria-label": pathname === "/" ? "page" : undefined,
    },
  ];

  paths.forEach((label: string, i: number) => {
    const href = `/${paths.slice(0, i + 1).join("/")}`;
    label !== "page" &&
      parts.push({
        label: humanize(label.replace(/[-_]/g, " ")) || "",
        href,
        "aria-label": pathname === href ? "page" : undefined,
      });
  });

  return (
    <div data-aos="fade-up-sm" data-aos-dealy="50">
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="inline-flex" role="list">
          {parts.map(({ label, ...attrs }, index) => (
            <li className="breadcrumb-list-item" role="listitem" key={index}>
              {index > 0 && (
                <span className="ml-3 mr-2 inline-block">/</span>
              )}
              {index !== parts.length - 1 ? (
                <Link className="text-primary " {...attrs}>
                  {label}
                </Link>
              ) : (
                <span className="text-primary">{label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
