"use client";

import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="background-light900_dark200 fixed hidden h-screen pt-20 sm:block">
      <div className="flex h-full flex-col justify-between">
        <div className="mx-6 flex h-full flex-col gap-6 pt-16">
          {sidebarLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;
            if (item.route === "/profile")
              return (
                <SignedIn>
                  <section key={item.route}>
                    <Link
                      href={item.route}
                      className={`${
                        isActive
                          ? "primary-gradient rounded-lg text-light-900"
                          : "text-dark300_light900"
                      } flex items-center justify-start gap-4 bg-transparent p-4`}
                    >
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                        className={`${isActive ? "" : "invert-colors"}`}
                      />
                      <p
                        className={`${
                          isActive ? "base-bold" : "base-medium"
                        } hidden lg:block lg:w-40`}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </section>
                </SignedIn>
              );

            return (
              <section key={item.route}>
                <Link
                  href={item.route}
                  className={`${
                    isActive
                      ? "primary-gradient rounded-lg text-light-900"
                      : "text-dark300_light900"
                  } flex items-center justify-start gap-4 bg-transparent p-4`}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={`${isActive ? "" : "invert-colors"}`}
                  />
                  <p
                    className={`${
                      isActive ? "base-bold" : "base-medium"
                    } hidden lg:block lg:w-40`}
                  >
                    {item.label}
                  </p>
                </Link>
              </section>
            );
          })}
        </div>
        <div className="mx-6 mb-6">
          <SignedOut>
            <div className="flex flex-col gap-3">
              <Link href="/sign-in">
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient hidden lg:block">
                    Log In
                  </span>
                  <span className="lg:hidden">
                    <Image
                      src="/assets/icons/account.svg"
                      alt="Log In"
                      width={20}
                      height={20}
                      className="invert-colors"
                    />
                  </span>
                </Button>
              </Link>

              <Link href="/sign-up">
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="hidden lg:block">Sign Up</span>
                  <span className="lg:hidden">
                    <Image
                      src="/assets/icons/sign-up.svg"
                      alt="Log In"
                      width={20}
                      height={20}
                      className="invert-colors"
                    />
                  </span>
                </Button>
              </Link>
            </div>
          </SignedOut>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
