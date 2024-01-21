"use client";

import React, { FC } from "react";
import { Icon } from "@iconify/react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SkillCardProps {
    iconPath: string;
    description: string;
}

export const SkillCard: FC<SkillCardProps> = ({ iconPath, description }) => {
    const isShadcn = iconPath === "shadcn";

    return (
        <Card className="sm:text-normal flex flex-col items-center justify-center text-sm shadow-lg transition-transform hover:-translate-y-4">
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
                    <div className="flex items-center p-4 text-lg font-semibold">
                        {"@shadcn/ui"}
                    </div>
                )}
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <p>{description}</p>
            </CardContent>
        </Card>
    );
};
