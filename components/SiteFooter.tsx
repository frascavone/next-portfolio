import React, { FC } from "react"
import Image from "next/image"
import {
  DoubleArrowUpIcon,
  GitHubLogoIcon,
  HeartFilledIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons"

import { Button } from "./ui/button"

interface SiteFooterProps {}

export const SiteFooter: FC<SiteFooterProps> = ({}) => {
  return (
    <footer
      id="contacts"
      className="border-t bg-gradient-to-b from-gray-200 p-4 text-center dark:from-secondary"
    >
      <h2 className="mb-2 font-mono text-2xl">contatti</h2>
      <div className="m-auto flex flex-col gap-8 border-b-2 pb-4 text-center md:w-1/3">
        Per info non esitare a scrivermi via email o sui social
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:fra.scavone88@gmail.com"
        >
          <Button variant="default">Email</Button>
        </a>
        <div className="m-auto my-4 flex w-4/5 justify-around">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/francesco.scavone.16"
            target="_blank"
          >
            <Image
              alt="fb-logo"
              height={40}
              width={40}
              src={"/icons/facebook.svg"}
            />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/frascavone"
            target="_blank"
          >
            <GitHubLogoIcon className="h-10 w-10" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/frascavone/"
            target="_blank"
          >
            <LinkedInLogoIcon className="h-10 w-10" color="#0077b5" />
          </a>
        </div>
        <a
          rel="noreferrer"
          href="#top"
          className="flex items-center justify-center"
        >
          <DoubleArrowUpIcon className="mr-4 inline " />
          <span className="underline">Torna in cima</span>
          <DoubleArrowUpIcon className="ml-4 inline " />
        </a>
      </div>
      <p className="mt-2 text-gray-400">
        &copy; {`${new Date().getFullYear()} Built with `}
        <HeartFilledIcon className="inline" color="red" />
        {` by Francesco Scavone`}
      </p>
    </footer>
  )
}
