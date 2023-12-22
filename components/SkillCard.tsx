"use client"

import React, { FC, useEffect, useState } from "react"
import Image from "next/image"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface SkillCardProps {
  iconPath: string
  description: string
}

export const SkillCard: FC<SkillCardProps> = ({ iconPath, description }) => {
  const isNext = iconPath === "/icons/nextjs.svg"
  const isShadcn = iconPath === "shadcn"

  return (
    <Card className="flex flex-col items-center justify-center shadow-lg transition-transform hover:-translate-y-4 text-sm sm:text-normal">
      <CardHeader className="p-4">
        {!isShadcn ? (
          <>
            <Image
              alt="logo"
              height={40}
              width={40}
              src={iconPath}
              className={`sm:h-16 sm:w-16 ${isNext && "dark:hidden"}`}
            />
            <Image
              alt="logo"
              height={40}
              width={40}
              src={"/icons/nextjs-dark.svg"}
              className={`sm:h-16 sm:w-16 hidden ${isNext && "dark:block"}`}
            />
          </>
        ) : (
          <div className="text-lg font-semibold p-4 flex items-center">
            {"@shadcn/ui"}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
