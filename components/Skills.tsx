"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

import { SkillCard } from "./SkillCard";

export const Skills = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const t = useTranslations();
  return (
    <section
      id="skills"
      style={{ clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)" }}
      className="m-auto w-4/5 max-w-6xl bg-secondary py-10 text-center"
    >
      <span className="font-mono text-2xl">{t("skills")}</span>
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto p-2 md:grid md:grid-cols-3 md:justify-center md:p-6 lg:grid-cols-5"
      >
        {siteConfig.skills.map(({ iconPath, description }, index) => {
          return (
            <SkillCard
              key={index}
              iconPath={iconPath}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};
