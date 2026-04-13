import React from 'react'
import Image from 'next/image'

import playImg from '@/assets/images/play.png'
import appImg from '@/assets/images/appStore.png'
import heroImg from '@/assets/images/hero.png'

export default function HeroSection() {
  return (
    <section className="bg-[#f5f5f7] px-6 pt-16 pb-0">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold leading-tight text-slate-800 sm:text-5xl md:text-6xl">
          We Build
          <br />
          <span className="text-violet-500">Productive</span> Apps
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* Store Buttons */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button className="flex items-center gap-3 rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:border-violet-400 hover:text-violet-500">
            <Image
              src={playImg}
              alt="Google Play"
              width={24}
              height={24}
              className="object-contain"
              priority
            />
            Google Play
          </button>

          <button className="flex items-center gap-3 rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:border-violet-400 hover:text-violet-500">
            <Image
              src={appImg}
              alt="App Store"
              width={24}
              height={24}
              className="object-contain"
              priority
            />
            App Store
          </button>
        </div>

        {/* Hero Image */}
        <div className="mt-10 w-full max-w-3xl">
          <Image
            src={heroImg}
            alt="Hero Image"
            width={700}
            height={650}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}