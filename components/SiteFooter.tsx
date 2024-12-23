"use client";

import React, { FC } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
    DoubleArrowUpIcon,
    GitHubLogoIcon,
    HeartFilledIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
import { capitalizeFirstLetter } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button, buttonVariants } from "./ui/button";

interface SiteFooterProps {}

export const SiteFooter: FC<SiteFooterProps> = ({}) => {
    const t = useTranslations();
    return (
        <footer
            id="contacts"
            className="flex flex-col-reverse md:flex-row items-center md:justify-between border-t bg-gradient-to-b from-gray-200 p-2 text-center dark:from-secondary"
        >
            <div className="gap-8 hidden md:flex">
                {siteConfig.socials.map(({ name, link }) => (
                    <TooltipProvider key={name}>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div
                                        className={buttonVariants({
                                            size: "icon",
                                            variant: "ghost",
                                        })}
                                    >
                                        {name === "github" ? (
                                            <GitHubLogoIcon className="h-8 w-8" />
                                        ) : name === "linkedin" ? (
                                            <LinkedInLogoIcon className="h-8 w-8" />
                                        ) : name === "gitlab" ? (
                                            <Icon
                                                icon="ph:gitlab-logo"
                                                className="h-8 w-8"
                                            />
                                        ) : null}
                                        <span className="sr-only">{name}</span>
                                    </div>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                {capitalizeFirstLetter(name)}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
            {/* </div> */}
            <p className="mt-2 text-gray-400">
                &copy; {`${new Date().getFullYear()} Built with `}
                <HeartFilledIcon className="inline" color="red" />
                {` by Francesco Scavone`}
            </p>
            <a
                rel="noreferrer"
                href="#top"
                className="flex items-center justify-center"
            >
                <DoubleArrowUpIcon className="mr-4 inline " />
                <span className="underline">{t("back-to-top")}</span>
                <DoubleArrowUpIcon className="ml-4 inline " />
            </a>
        </footer>
    );
};
