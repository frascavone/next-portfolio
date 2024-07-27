"use client";

import React, { FC } from "react";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";

interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
    gitHubLink: string;
    pageLink?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
    title,
    description,
    imgUrl,
    gitHubLink,
    pageLink,
}) => {
    const t = useTranslations("ProjectCard");
    return (
        <Card className="rounded-md border border-primary">
            <CardHeader>
                <Image
                    alt={"project img"}
                    height={100}
                    width={200}
                    className="h-40 w-full rounded-md border object-cover object-top"
                    src={imgUrl}
                />
                <CardDescription>{title}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="p-2 text-xs sm:text-sm ">{t(`${description}`)}</p>
            </CardContent>
            <CardFooter>
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
            </CardFooter>
        </Card>
    );
};
