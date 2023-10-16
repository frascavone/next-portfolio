"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import useWindowSize from "@/hooks/useWindowSize"
import { Button, buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/MainNav"
import { ThemeToggle } from "@/components/ThemeToggle"

export function SiteHeader() {
  const { width } = useWindowSize()

  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      {width && width > 1000 ? (
        <header className="bg-background sticky top-0 z-40 w-full lg:border-foreground lg:border-b">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav items={siteConfig.mainNav} />
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex flex-col justify-center items-center space-x-1">
                {/* //TODO: socials icons component */}
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <GitHubLogoIcon className="h-5 w-5 text-primary" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </Link>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <LinkedInLogoIcon className="h-5 w-5 text-primary" />
                    <span className="sr-only">Linkedin</span>
                  </div>
                </Link>
                <Link
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <InstagramLogoIcon className="h-5 w-5 text-primary" />
                    <span className="sr-only">Instagram</span>
                  </div>
                </Link>
                <ThemeToggle />
              </nav>
            </div>
          </div>
        </header>
      ) : (
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
            className="fixed top-10 right-10 w-8 h-8 rounded-md shadow flex items-center justify-center cursor-pointer z-30 text-primary border-primary border"
          >
            {open ? (
              <Cross1Icon className="h-5 w-5" />
            ) : (
              <HamburgerMenuIcon className="h-5 w-5" />
            )}
          </label>
          <div
            className={`fixed top-10 right-10 rounded-full w-6 h-6 bg-secondary z-10 transform scale-0 transition-transform duration-300 ${
              open && " scale-[100]"
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
          <div className="fixed left-10 bottom-10 space-x-4 z-20">
            <nav className="flex flex-col justify-center items-center space-x-1">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <GitHubLogoIcon className="h-5 w-5 text-primary" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>

              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <LinkedInLogoIcon className="h-5 w-5 text-primary" />
                  <span className="sr-only">Linkedin</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <InstagramLogoIcon className="h-5 w-5 text-primary" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>

              <ThemeToggle />
            </nav>
          </div>
        </>
      )}
    </>
  )
}
