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
    <div className="relative h-64 rounded-md cursor-pointer transition-all border-primary border">
      <Image
        alt={"project img"}
        height={200}
        width={200}
        className="h-full w-full object-cover object-top rounded-md border"
        src={imgUrl}
      />
      <div className="absolute inset-0 w-full h-full rounded-md flex justify-center items-start pt-4 transition-opacity hover:opacity-0"></div>
      <div className="absolute inset-0 w-full h-full rounded-md bg-secondary flex flex-col justify-center items-center transition-opacity opacity-0 hover:opacity-100">
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs p-2 sm:text-sm ">{description}</p>

        <div className="flex w-full items-center justify-center gap-6 mt-4">
          <a
            rel="noreferrer"
            target="_blank"
            href={gitHubLink}
            className="flex flex-col items-center hover:bg-secondary/60"
          >
            <GitHubLogoIcon className="h-6 w-6 mb-2" />
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
