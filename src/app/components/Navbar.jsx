'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { GrGithub } from 'react-icons/gr'
import { HiMenu, HiX } from 'react-icons/hi'

import logoImg from '@/assets/images/logo.png'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Apps', href: '/apps' },
    { label: 'Installation', href: '/InstalledAppCard' },
  ]

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoImg}
            alt="Hero.io Logo"
            width={32}
            height={32}
            className="object-contain h-10 w-auto"
            priority
          />

          <span className="text-lg font-bold tracking-wide text-violet-600">
            HERO.IO
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition ${
                  isActive
                    ? 'text-violet-600 underline underline-offset-4'
                    : 'text-gray-700 hover:text-violet-600'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Side Button */}
        <div className="hidden md:block">
          <button className="flex items-center gap-2 rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-600">
            <GrGithub className="text-base" />
            <span>Contribute</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="ml-auto md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-700"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="space-y-1 border-t border-gray-200 px-6 py-2 md:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-1 font-semibold transition-all duration-200 ${
                  isActive
                    ? 'underline underline-offset-8 bg-violet-50 text-violet-500'
                    : 'text-gray-600 hover:bg-gray-200 hover:text-violet-500'
                }`}
              >
                {item.label}
              </Link>
            )
          })}

          <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-violet-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-violet-600">
            <GrGithub className="text-base" />
            <span>Contribute</span>
          </button>
        </div>
      )}
    </header>
  )
}