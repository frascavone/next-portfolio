"use client"

import React, { FC } from "react"
import { Icon } from "@iconify/react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface SkillCardProps {
  iconPath: string
  description: string
}

export const SkillCard: FC<SkillCardProps> = ({ iconPath, description }) => {
  const isShadcn = iconPath === "shadcn"

  return (
    <Card className="flex flex-col items-center justify-center shadow-lg transition-transform hover:-translate-y-4 text-sm sm:text-normal">
      <CardHeader className="p-4">
        {!isShadcn ? (
          <>
            <Icon
              icon={iconPath}
              height={40}
              width={40}
              className="sm:h-16 sm:w-16"
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
