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
            className="border-t bg-gradient-to-b from-gray-200 p-4 text-center dark:from-secondary"
        >
            <h2 className="mb-2 font-mono text-2xl">{t("contacts")}</h2>
            <div className="m-auto flex flex-col gap-8 border-b-2 pb-4 text-center md:w-1/3">
                {t("cta")}
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="mailto:fra.scavone88@gmail.com"
                >
                    <Button variant="default">e-mail</Button>
                </a>
                <div className="m-auto my-4 flex w-4/5 justify-around">
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
                                            <span className="sr-only">
                                                {name}
                                            </span>
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
                <a
                    rel="noreferrer"
                    href="#top"
                    className="flex items-center justify-center"
                >
                    <DoubleArrowUpIcon className="mr-4 inline " />
                    <span className="underline">{t("back-to-top")}</span>
                    <DoubleArrowUpIcon className="ml-4 inline " />
                </a>
            </div>
            <p className="mt-2 text-gray-400">
                &copy; {`${new Date().getFullYear()} Built with `}
                <HeartFilledIcon className="inline" color="red" />
                {` by Francesco Scavone`}
            </p>
        </footer>
    );
};
