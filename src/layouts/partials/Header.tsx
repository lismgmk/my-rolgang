"use client";

import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { VscChevronDown } from "react-icons/vsc";

export interface ChildNavigationLink {
  name: string;
  url: string;
}

export interface NavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}

const Header = ({ backgroundColor }: { backgroundColor: string }) => {
  // distructuring the main menu from menu object
  const { main }: { main: NavigationLink[] } = menu;
  const { navigation_buttons } = config;
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const [isExpand, setExapnd] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    function stickyHeader() {
      const scrollY = window.pageYOffset;
      if (config.settings.sticky_header && scrollY > 0) {
        header.current?.classList.add("header-fixed-top");
        return;
      }
      header.current?.classList.remove("header-fixed-top");
    }
    stickyHeader();
    window.addEventListener("scroll", stickyHeader);

    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  const onExapndChange = () => {
    setExapnd(!isExpand);
  };
  useEffect(() => {
    setExapnd(false);
  }, [pathname]);
  const handleMouseEnter = () => {
    setIsOpen(true); // Открыть дропдаун при наведении
  };

  const handleMouseLeave = () => {
    if (!isOpen) {
      setIsOpen(false); // Закрыть дропдаун при уходе курсора
    }
  };

  const trackGoal = (goal: string, params?: Record<string, any>) => {
    if (typeof window !== "undefined" && "ym" in window) {
      console.log("+++++window.ym", window.ym);
      const ym = window.ym as unknown as (
        yid: number,
        method: string,
        goal: string,
        params?: Record<string, any>,
      ) => void;

      if (!ym) {
        return;
      }
      ym(99846466, "reachGoal", goal, params);
    }
  };

  return (
    <>
      <header ref={header} className={`header z-50 ${backgroundColor}`}>
        <nav className="navbar container relative z-30">
          <Logo src={"/images/logo/logo.png"} />

          <button
            className={`navbar-toggler group relative ml-auto lg:ml-4 ${isExpand ? "active" : ""}`}
            aria-label="navbar toggler"
            onClick={onExapndChange}
          >
            <div className="relative flex h-[30px] w-[30px] transform items-center justify-center overflow-hidden rounded-full ring-0 transition-all duration-200">
              <div className="flex h-[15px] w-[18px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 group-[.active]:h-[21px]">
                <div className="h-[2px] w-7 origin-left transform bg-dark transition-all duration-300 group-[.active]:translate-x-10"></div>
                <div className="h-[2px] w-7 transform rounded bg-dark transition-all delay-75 duration-300 group-[.active]:translate-x-10"></div>
                <div className="h-[2px] w-7 origin-left transform bg-dark transition-all delay-150 duration-300 group-[.active]:translate-x-10"></div>
                <div className="absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-[.active]:w-12 group-[.active]:translate-x-0">
                  <div className="absolute h-[2px] w-5 rotate-0 transform bg-dark transition-all delay-300 duration-500 group-[.active]:rotate-45"></div>
                  <div className="absolute h-[2px] w-5 -rotate-0 transform bg-dark transition-all delay-300 duration-500 group-[.active]:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>

          <div className={`navbar-wrapper ${isExpand ? "active" : ""}`}>
            <ul className="navbar-nav">
              {main.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    {item.hasChildren ? (
                      <li
                        className="nav-item nav-dropdown group"
                        onMouseEnter={handleMouseEnter} // Добавляем событие на наведение
                        onMouseLeave={handleMouseLeave} // Добавляем событие на уход курсора
                      >
                        <Link onClick={toggleDropdown} href={item.url}>
                          <label htmlFor="expand">
                            <span className="nav-link inline-flex items-center">
                              {item.name} <VscChevronDown />
                            </span>
                          </label>
                        </Link>

                        <ul
                          className={`nav-dropdown-list lg:group-hover:visible lg:group-hover:opacity-100 ${
                            isOpen ? "block" : "hidden"
                          }`}
                        >
                          {item.children?.map((child, i) => (
                            <li key={i} className="nav-dropdown-item">
                              <Link
                                href={child.url}
                                className="nav-dropdown-link"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={i} className="nav-item">
                        <Link href={item.url} className="nav-link">
                          {item.name}
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
            {/* <!-- End Navbar Nav --> */}
            <div className="order-2 mx-auto mb-[0.75rem] flex flex-col items-center lg:mx-0 lg:mb-0 lg:ml-7 lg:flex-row">
              <div className="flex flex-col justify-center gap-1 pt-4 text-center lg:ml-5 lg:flex-row lg:gap-1 lg:pt-0 lg:text-left">
                {navigation_buttons.map((button, i) => {
                  return (
                    <React.Fragment key={i}>
                      {button.enable && (
                        <Link
                          onClick={() => {
                            trackGoal("HEADER_BTN");
                            return true;
                          }}
                          href={button.link}
                          className={`btn ${
                            i === 0 ? "btn-outline-primary" : "btn-primary"
                          } w-[200px] min-[340px]:w-[300px] lg:w-auto`}
                        >
                          {button.label}
                        </Link>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
