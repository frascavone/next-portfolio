"use client"

import { siteConfig } from "@/config/site"
import useWindowSize from "@/hooks/useWindowSize"
import { MainNav } from "@/components/MainNav"

import { MobileNav } from "./MobileNav"
import { SocialIconsGroup } from "./SocialIconsGroup"

export function SiteHeader() {
  const { width } = useWindowSize()

  return (
    <>
      {width && !(width > 1000) ? (
        <MobileNav />
      ) : (
        <header className="bg-background sticky top-0 z-40 w-full lg:border-foreground lg:border-b">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav items={siteConfig.mainNav} />
            <div className="flex flex-1 items-center justify-end space-x-4">
              <SocialIconsGroup />
            </div>
          </div>
        </header>
      )}
    </>
  )
}
