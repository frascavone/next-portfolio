"use client"

import React, { FC } from "react"
import Image from "next/image"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { Button } from "./ui/button"

interface ProjectCardProps {
  title: string
  description: string
  imgUrl: string
  gitHubLink: string
  pageLink?: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imgUrl,
  gitHubLink,
  pageLink,
}) => {
  return (
    <div className="relative h-64 cursor-pointer rounded-md border border-primary transition-all">
      <Image
        alt={"project img"}
        height={200}
        width={200}
        className="h-full w-full rounded-md border object-cover object-top"
        src={imgUrl}
      />
      {/* <div className="absolute inset-0 w-full h-full rounded-md flex justify-center items-start pt-4 transition-opacity hover:opacity-0"></div> */}
      <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-md bg-secondary opacity-0 transition-opacity hover:opacity-100">
        <h3 className="font-bold">{title}</h3>
        <p className="p-2 text-xs sm:text-sm ">{description}</p>

        <div className="mt-4 flex w-full items-center justify-center gap-6">
          <a
            rel="noreferrer"
            target="_blank"
            href={gitHubLink}
            className="flex flex-col items-center hover:bg-secondary/60"
          >
            <GitHubLogoIcon className="mb-2 h-6 w-6" />
            <p className="text-xs">Guarda codice</p>
          </a>
          {pageLink && (
            <a rel="noreferrer" target="_blank" href={pageLink}>
              <Button variant="default" size={"sm"}>
                Esplora
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
