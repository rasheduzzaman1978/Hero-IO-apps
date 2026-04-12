'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { GrGithub } from 'react-icons/gr'
import Image from 'next/image'

import logoImg from '@/assets/images/logo.png'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Apps', href: '/apps' },
    { label: 'Installation', href: '/installation' },
  ]

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
  <div className="relative h-8 w-8">
    <Image
      src={logoImg}
      alt="Hero.io Logo"
      fill
      className="object-contain"
      priority
    />
  </div>

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

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </header>
  )
}