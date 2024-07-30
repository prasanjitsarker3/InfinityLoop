"use client";
import React, { useEffect, useState } from "react";
import {
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`${
        scrolling
          ? "bg-white fixed z-50  container md:py-5 py-3 md:px-0 px-4"
          : "fixed z-50  container md:py-5 py-3 md:px-0 px-4"
      }fixed z-50  container md:py-5 py-3 md:px-0 px-4`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className=" flex justify-between">
        <div className="">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image
              src={"https://cdn-icons-png.flaticon.com/128/4007/4007846.png"}
              width={30}
              height={30}
              alt="Logo"
            />
            <p className="gradient-text font-bold text-inherit text-2xl">
              <span className="primary">Infinite</span>
              <span className="secondary">Loop</span>
            </p>
          </Link>
        </div>

        <div>
          <div className="hidden sm:flex gap-3">
            <Dropdown>
              <DropdownTrigger>
                <button className=" flex items-center focus:outline-none">
                  All Products <ChevronDown className="pt-1" size={20} />
                </button>
              </DropdownTrigger>
              <DropdownMenu
                className=" bg-gray-50"
                variant="faded"
                aria-label="Dropdown menu with description"
              >
                <DropdownItem>
                  <Link href="/product">
                    <div className=" flex items-center gap-5 hover:bg-[#E7FAF9] p-1 hover:rounded">
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/3281/3281306.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <div>
                        <h1 className=" primary font-exotwo text-base">
                          Business
                        </h1>
                        <p className=" text-xs">ERP | GMS | Flight Booking</p>
                      </div>
                    </div>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/product">
                    <div className=" flex items-center gap-5 hover:bg-[#E7FAF9] p-1 hover:rounded">
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/17209/17209137.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <div>
                        <h1 className=" primary font-exotwo text-base">
                          Hospitality
                        </h1>
                        <p className=" text-xs">Property & Guest Management</p>
                      </div>
                    </div>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/product">
                    <div className=" flex items-center gap-5 hover:bg-[#E7FAF9] p-1 hover:rounded">
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/3649/3649775.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <div>
                        <h1 className=" primary font-exotwo text-base">
                          E-Commerce
                        </h1>
                        <p className=" text-xs">
                          Product | Marketing | Payment
                        </p>
                      </div>
                    </div>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/product">
                    <div className=" flex items-center gap-5 hover:bg-[#E7FAF9] p-1 hover:rounded">
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/4200/4200528.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <div>
                        <h1 className=" primary font-exotwo text-base">
                          Healthcare
                        </h1>
                        <p className=" text-xs">
                          Hospital | Pharmacare | Clinic
                        </p>
                      </div>
                    </div>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Link
              href="/service"
              className={`${
                scrolling
                  ? "text-slate-900 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0a6fd9] hover:to-[#0edcbc] hover:bg-clip-text"
                  : "text-slate-900"
              }`}
            >
              Service
            </Link>

            <Link
              className={`${
                scrolling
                  ? "text-slate-900 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0a6fd9] hover:to-[#0edcbc] hover:bg-clip-text"
                  : "text-slate-900"
              }`}
              href="/contact"
            >
              Contact Us
            </Link>
            <Link
              className={`${
                scrolling
                  ? "text-slate-900 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0a6fd9] hover:to-[#0edcbc] hover:bg-clip-text"
                  : "text-slate-900"
              }`}
              href="/career"
            >
              Career
            </Link>
          </div>
          <div className="sm:hidden">
            <Button
              size="sm"
              className=" bg-white"
              startContent={open ? <X /> : <Menu />}
              onClick={handleToggle}
            />
          </div>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8 }}
          className="h-[100vh] w-full sm:hidden bg-white"
        >
          <div className=" flex flex-col items-start pt-3 space-y-3">
            <Dropdown>
              <DropdownTrigger>
                <button className=" flex items-center focus:outline-none">
                  All Products <ChevronDown className="pt-1" size={20} />
                </button>
              </DropdownTrigger>
              <DropdownMenu
                className=" bg-gray-50"
                variant="faded"
                aria-label="Dropdown menu with description"
              >
                <DropdownItem>
                  <Link href="/product" onClick={() => setOpen(!open)}>
                    <div className=" flex items-center gap-5 hover:bg-[#E7FAF9] p-1 hover:rounded">
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/3281/3281306.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <div>
                        <h1 className=" primary font-exotwo text-base">
                          Business
                        </h1>
                        <p className=" text-xs">ERP | GMS | Flight Booking</p>
                      </div>
                    </div>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/product" onClick={() => setOpen(!open)}>
                    <div className=" flex items-center gap-5 hover:bg-[#E7FAF9] p-1 hover:rounded">
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/17209/17209137.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <div>
                        <h1 className=" primary font-exotwo text-base">
                          Hospitality
                        </h1>
                        <p className=" text-xs">Property & Guest Management</p>
                      </div>
                    </div>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/product" onClick={() => setOpen(!open)}>
                    <div className=" flex items-center gap-5 hover:bg-[#E7FAF9] p-1 hover:rounded">
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/3649/3649775.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <div>
                        <h1 className=" primary font-exotwo text-base">
                          E-Commerce
                        </h1>
                        <p className=" text-xs">
                          Product | Marketing | Payment
                        </p>
                      </div>
                    </div>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/product" onClick={() => setOpen(!open)}>
                    <div className=" flex items-center gap-5 hover:bg-[#E7FAF9] p-1 hover:rounded">
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/4200/4200528.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <div>
                        <h1 className=" primary font-exotwo text-base">
                          Healthcare
                        </h1>
                        <p className=" text-xs">
                          Hospital | Pharmacare | Clinic
                        </p>
                      </div>
                    </div>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div onClick={() => setOpen(!open)}>
              <Link
                href="/service"
                className="text-slate-900 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0a6fd9] hover:to-[#0edcbc] hover:bg-clip-text"
              >
                Service
              </Link>
            </div>

            <div onClick={() => setOpen(!open)}>
              <Link
                className="text-slate-900 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0a6fd9] hover:to-[#0edcbc] hover:bg-clip-text"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
            <div>
              <Link
                onClick={() => setOpen(!open)}
                className="text-slate-900 hover:text-transparent hover:bg-gradient-to-r hover:from-[#0a6fd9] hover:to-[#0edcbc] hover:bg-clip-text"
                href="/career"
              >
                Career
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
