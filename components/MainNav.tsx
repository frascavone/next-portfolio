import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { DividerVerticalIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
    items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
    const t = useTranslations();
    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center">
                <Image
                    alt="logo"
                    src="/icons/code.svg"
                    height={24}
                    width={24}
                />
                <span className="ml-4 inline-block font-bold">
                    {siteConfig.name.split(" |")[0]}
                </span>
            </Link>
            {items?.length ? (
                <nav className="flex">
                    {items?.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <Link
                                key={index}
                                href={item.href as string}
                                className={cn(
                                    "flex items-center rounded-md p-2 font-mono text-sm text-primary hover:bg-accent",
                                    item.disabled &&
                                        "cursor-not-allowed opacity-80"
                                )}
                            >
                                {t(item.title)}
                            </Link>
                            {!(index === items.length - 1) && (
                                <DividerVerticalIcon className="h-7 w-7" />
                            )}
                        </div>
                    ))}
                </nav>
            ) : null}
        </div>
    );
}
