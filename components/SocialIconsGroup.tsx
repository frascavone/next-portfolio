import React, { FC } from "react"
import Link from "next/link"
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"

import { ThemeToggle } from "./ThemeToggle"
import { buttonVariants } from "./ui/button"

interface SocialIconsGroupProps {
  vertical?: boolean
}

export const SocialIconsGroup: FC<SocialIconsGroupProps> = ({ vertical }) => {
  return (
    <nav
      className={`flex justify-center items-center gap-1 ${
        vertical && "flex-col"
      }`}
    >
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
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
      <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
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
      <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
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
  )
}
