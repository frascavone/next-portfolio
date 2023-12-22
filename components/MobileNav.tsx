"use client"

import React, { FC, useState } from "react"
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

import { SocialIconsGroup } from "./SocialIconsGroup"

export const MobileNav: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <input
        type="checkbox"
        className="hidden"
        id="navi-toggle"
        checked={open}
        onChange={(e) => setOpen(e.target.checked)}
      />
      <label
        htmlFor="navi-toggle"
        className="fixed top-10 right-6 w-8 h-8 rounded-md shadow flex items-center justify-center cursor-pointer z-30 text-primary border-primary border"
      >
        {open ? (
          <Cross1Icon className="h-5 w-5" />
        ) : (
          <HamburgerMenuIcon className="h-5 w-5" />
        )}
      </label>
      <div
        className={`fixed top-10 right-6 rounded-full w-6 h-6 bg-secondary z-10 transform scale-0 transition-transform duration-300 ${
          open && " scale-[200]"
        }`}
      >
        &nbsp;
      </div>

      <nav
        className={`fixed top-0 right-0 h-screen w-screen z-20 ${
          !open && "hidden"
        }`}
      >
        <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 list-none text-center">
          {siteConfig.mainNav.map((item, index) => (
            <li key={index} className="mb-6">
              <a href={item.href}>
                <Button
                  variant={
                    index === siteConfig.mainNav.length - 1
                      ? "outline"
                      : "ghost"
                  }
                  className="font-mono"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Button>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="fixed left-0.5 bottom-10 space-x-4 z-20">
        <SocialIconsGroup vertical />
      </div>
    </>
  )
}
