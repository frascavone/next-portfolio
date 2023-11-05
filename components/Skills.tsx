"use client"

import React, { FC } from "react"

import { siteConfig } from "@/config/site"

import { SkillCard } from "./SkillCard"

interface SkillsProps {}

export const Skills: FC<SkillsProps> = ({}) => {
  return (
    <section
      id="skills"
      style={{ clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)" }}
      className="w-4/5 max-w-6xl m-auto py-20 sm:py-10 bg-secondary text-center"
    >
      <span className="font-mono text-2xl">skills</span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3 p-6 justify-center">
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