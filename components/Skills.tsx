"use client"

import React, { FC, useRef } from "react"

import { siteConfig } from "@/config/site"

import { SkillCard } from "./SkillCard"

interface SkillsProps {}

export const Skills: FC<SkillsProps> = ({}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <section
      id="skills"
      style={{ clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)" }}
      className="w-4/5 max-w-6xl m-auto py-10 bg-secondary text-center"
    >
      <span className="font-mono text-2xl">skills</span>
      <div
        ref={ref}
        className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-3 p-2 md:p-6 md:justify-center"
      >
        {siteConfig.skills.map(({ iconPath, description }, index) => {
          return (
            <SkillCard
              key={index}
              iconPath={iconPath}
              description={description}
            />
          )
        })}
      </div>
    </section>
  )
}
