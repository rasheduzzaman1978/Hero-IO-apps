import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import logoImg from '@/assets/images/logo.png'

export default function Footer() {
  // Current year for copyright text
  const currentYear = new Date().getFullYear()

  // Social media links
  const socialLinks = [
    {
      icon: <FaXTwitter />,
      href: 'https://x.com',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://linkedin.com',
    },
    {
      icon: <FaFacebookF />,
      href: 'https://facebook.com',
    },
  ]

  return (
    <footer className="bg-[#001f3f] px-6 py-6 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Top section */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          {/* Logo section */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoImg}
              alt="Hero.io Logo"
              width={28}
              height={28}
              className="object-contain"
            />

            <span className="text-sm font-semibold tracking-wide md:text-base">
              HERO.IO
            </span>
          </Link>

          {/* Social links section */}
          <div className="flex flex-col items-end gap-2">
            <h3 className="text-base md:text-xl font-medium text-white">
              Social Links
            </h3>

            <div className="flex items-center gap-2 md:gap-3">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-white text-[10px] text-black transition duration-200 hover:scale-105"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <p className="pt-4 text-center text-xs text-gray-300 md:text-sm">
          Copyright © {currentYear} - All right reserved
        </p>
      </div>
    </footer>
  )
}