"use client";

import React, { FC } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import { siteConfig } from "@/config/site";

import LanguageSelector from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";
import { buttonVariants } from "./ui/button";

interface SocialIconsGroupProps {
    vertical?: boolean;
}

export const SocialIconsGroup: FC<SocialIconsGroupProps> = ({ vertical }) => {
    return (
        <nav
            className={`flex items-center justify-center gap-3 ${
                vertical && "flex-col"
            }`}
        >
            {siteConfig.socials.map(({ name, link }) => (
                <Link href={link} target="_blank" rel="noreferrer">
                    <div
                        className={buttonVariants({
                            size: "icon",
                            variant: "ghost",
                        })}
                    >
                        {name === "github" ? (
                            <GitHubLogoIcon className="h-5 w-5 text-primary" />
                        ) : name === "linkedin" ? (
                            <LinkedInLogoIcon className="h-5 w-5 text-primary" />
                        ) : name === "gitlab" ? (
                            <Icon
                                icon="ph:gitlab-logo"
                                className="h-5 w-5 text-primary"
                            />
                        ) : null}
                        <span className="sr-only">{name}</span>
                    </div>
                </Link>
            ))}
            <ThemeToggle />
            <LanguageSelector languages={siteConfig.locales} />
        </nav>
    );
};
