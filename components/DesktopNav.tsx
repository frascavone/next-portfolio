import React, { FC } from "react"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/MainNav"

import { SocialIconsGroup } from "./SocialIconsGroup"

export const DesktopNav: FC = () => {
  return (
    <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <MainNav items={siteConfig.mainNav} />
      <div className="flex flex-1 items-center justify-end space-x-4">
        <SocialIconsGroup />
      </div>
    </div>
  )
}
