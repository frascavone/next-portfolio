"use client";

import React, { FC } from "react";
import { useTranslations } from "use-intl";

import { siteConfig } from "@/config/site";

import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = ({}) => {
    const t = useTranslations();
    return (
        <section
            id="projects"
            className="m-auto w-4/5 max-w-6xl py-6 text-center"
        >
            <span className="font-mono text-2xl">{t("projects")}</span>

            <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {siteConfig.projects.map(
                    (
                        { title, description, imgUrl, gitHubLink, pageLink },
                        index
                    ) => (
                        <ProjectCard
                            key={index}
                            title={title}
                            description={description}
                            imgUrl={imgUrl}
                            gitHubLink={gitHubLink}
                            pageLink={pageLink}
                        />
                    )
                )}
            </div>
        </section>
    );
};
