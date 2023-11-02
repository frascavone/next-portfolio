import React, { FC } from "react"
import Image from "next/image"

import { Button } from "./ui/button"

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="min-h-[98vh] lg:min-h-[90vh] flex flex-col items-center md:flex-row md:items-start md:justify-center text-center md:text-start font-bold pt-44 md:pt-64 whitespace-nowrap bg-gradient-to-b from-gray-200 dark:from-secondary">
      <Image
        alt="Propic"
        src="/imgs/propic.jpg"
        height={200}
        width={200}
        className="rounded-full border shadow-md mb-8 md:mr-10"
      />
      <div className="flex flex-col">
        <span className="text-primary text-sm font-mono">Ciao, mi chiamo</span>
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-moveInLeft duration-1500 text-container bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
          Francesco Scavone
        </span>

        <span className="text-primary text-sm font-mono">e sono un</span>
        <span className="text-2xl sm:text-4xl lg:text-5xl text-muted-foreground animate-moveInRight duration-1500">
          web developer front-end
        </span>
        <a className="text-lg mt-4" href="/CVscavone.pdf">
          <Button variant="default">Vedi CV</Button>
        </a>
      </div>
    </section>
  )
}
