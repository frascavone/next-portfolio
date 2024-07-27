"use client";

import Image from "next/image";
import { useTranslations } from "use-intl";

import { capitalizeFirstLetter } from "@/lib/utils";

import { Button } from "./ui/button";

interface HeroProps {}

export const Hero = ({}: HeroProps) => {
    const t = useTranslations("Hero");
    return (
        <section className="flex min-h-[98vh] flex-col items-center whitespace-nowrap bg-gradient-to-b from-gray-200 pt-28 text-center font-bold dark:from-secondary md:flex-row md:items-start md:justify-center md:pt-64 md:text-start lg:min-h-[90vh]">
            <Image
                alt="Propic"
                src="/imgs/propic.jpg"
                height={200}
                width={200}
                className="mb-8 rounded-full border shadow-md md:mr-10"
            />
            <div className="flex flex-col">
                <span className="font-mono text-sm text-primary">
                    {t("hi")}
                </span>
                <span className="text-container animate-slide-in-left bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                    Francesco Scavone
                </span>
                <span className="font-mono text-sm text-primary">
                    {t("iam")}
                </span>
                <span className="animate-slide-in-right text-2xl text-muted-foreground sm:text-4xl lg:text-5xl">
                    {t("frontend")}
                </span>
                <a
                    className="mt-4 animate-slide-in-bottom text-lg"
                    href="/CVscavone.pdf"
                >
                    <Button variant="default">
                        {capitalizeFirstLetter(t("cv"))}
                    </Button>
                </a>
            </div>
        </section>
    );
};
