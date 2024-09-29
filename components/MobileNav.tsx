"use client";

import React, { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useLocale, useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

import { SocialIconsGroup } from "./SocialIconsGroup";

export const MobileNav: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const t = useTranslations();
    const locale = useLocale();
    const pathname = usePathname();
    return (
        <>
            {!pathname.includes("blog") ? (
                <>
                    {" "}
                    <input
                        type="checkbox"
                        className="hidden"
                        id="navi-toggle"
                        checked={open}
                        onChange={(e) => setOpen(e.target.checked)}
                    />
                    <label
                        htmlFor="navi-toggle"
                        className="fixed right-4 top-10 z-30 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-primary text-primary shadow"
                    >
                        {open ? (
                            <Cross1Icon className="h-5 w-5" />
                        ) : (
                            <HamburgerMenuIcon className="h-5 w-5" />
                        )}
                    </label>
                    <div
                        className={`fixed right-6 top-10 z-10 h-6 w-6 scale-0 rounded-full bg-secondary transition-transform duration-300${
                            open && " scale-[200]"
                        }`}
                    >
                        &nbsp;
                    </div>
                    <nav
                        className={`fixed right-0 top-0 z-20 h-screen w-screen ${
                            !open && "hidden"
                        }`}
                    >
                        <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 list-none text-center">
                            {siteConfig.mainNav.map((item, index) => (
                                <li key={index} className="mb-6">
                                    <a href={`${locale}${item.href}`}>
                                        <Button
                                            variant={
                                                index ===
                                                siteConfig.mainNav.length - 1
                                                    ? "outline"
                                                    : "ghost"
                                            }
                                            className="font-mono"
                                            onClick={() => setOpen(false)}
                                        >
                                            {t(item.title)}
                                        </Button>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </>
            ) : null}
            <div className="fixed bottom-10 left-0.5 z-20 space-x-4">
                <SocialIconsGroup vertical />
            </div>
        </>
    );
};
