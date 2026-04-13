import React from 'react'

import playImg from '../../../assets/images/play.png';
import appImg from '../../../assets/images/appStore.png';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#f5f5f7] px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="text-4xl font-bold leading-tight text-slate-800 sm:text-5xl md:text-6xl">
          We Build
          <br />
          <span className="text-violet-500">Productive</span> Apps
        </h1>

        <p className="mt-6 max-w-187.5 text-sm leading-7 text-slate-500 sm:text-base">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
  <button className="flex items-center gap-3 rounded-md border border-gray-300 bg-white px-6 py-3 text-lg font-semibold text-slate-900 shadow-sm transition hover:border-violet-400 hover:text-violet-500">
    <Image
                src={playImg}
                alt="Hero.io Logo"
                width={32}
                height={32}
                className="object-contain h-8 w-8"
                priority
              />
    Google Play
  </button>

  <button className="flex items-center gap-3 rounded-md border border-gray-300 bg-white px-6 py-2 text-lg font-semibold text-slate-900 shadow-sm transition hover:border-violet-400 hover:text-violet-500">
    <Image
                src={appImg}
                alt="Hero.io Logo"
                width={32}
                height={32}
                className="object-contain h-10 w-8"
                priority
              />
    App Store
  </button>
</div>
      </div>
    </section>
  )
}