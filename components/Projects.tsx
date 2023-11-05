import React, { FC } from "react"

import { siteConfig } from "@/config/site"

import { ProjectCard } from "./ProjectCard"

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <section id="projects" className="w-4/5 max-w-6xl m-auto text-center py-6">
      <span className="text-2xl font-mono">progetti</span>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {siteConfig.projects.map(
          ({ title, description, imgUrl, gitHubLink, pageLink }, index) => (
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
  )
}
