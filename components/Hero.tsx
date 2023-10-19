import React, { FC } from "react"

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="min-h-screen font-bold flex flex-col justify-start items-start pt-64 pl-16 sm:pl-24 md:pl-44 lg:pl-64 whitespace-nowrap">
      <span className="text-primary text-sm font-mono">Ciao, mi chiamo</span>
      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white animate-moveInLeft duration-1500">
        Francesco Scavone
      </span>
      <span className="text-primary text-sm font-mono">e sono un</span>
      <span className="text-2xl sm:text-4xl lg:text-5xl text-muted-foreground animate-moveInRight duration-1500">
        web developer front-end
      </span>
      {/* //TODO: button */}
      <a className=" text-lg mt-4" href="#about">
        Scopri di più
      </a>
    </div>
  )
}
