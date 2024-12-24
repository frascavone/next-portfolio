"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { capitalizeFirstLetter } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSelectorProps {
    languages: string[];
}

export const LanguageSelector = ({ languages }: LanguageSelectorProps) => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations();

    const getFlag = (code: string) => {
        switch (code) {
            case "it":
                return `🇮🇹️`;
            case "en":
                return `🇬🇧️`;
        }
    };

    const flag = getFlag(locale);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="fixed top-10 px-3 py-1 md:static">
                {flag}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {languages.map((code) => {
                    const langFlag = getFlag(code);
                    const langNames = new Intl.DisplayNames(locale, {
                        type: "language",
                    });
                    const langName = langNames.of(code) ?? "";
                    return (
                        <Link key={code} href={pathname.replace(locale, code)}>
                            <DropdownMenuItem

                            // onClick={() => router.replace(`/${code}`)}
                            >
                                <span>{langFlag}</span>
                                <span className="ml-2">
                                    {capitalizeFirstLetter(langName)}
                                </span>
                            </DropdownMenuItem>
                        </Link>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSelector;
