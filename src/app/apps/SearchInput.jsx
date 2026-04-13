'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'

export default function SearchInput() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(searchParams.get('search') || '')

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams)

      if (search) {
        params.set('search', search)
      } else {
        params.delete('search')
      }

      router.replace(`${pathname}?${params.toString()}`)
    }, 300)

    return () => clearTimeout(timeout)
  }, [search, router, pathname, searchParams])

  return (
    <div className="relative w-full sm:w-80">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400" />

      <input
        type="text"
        placeholder="Search Apps"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm outline-none transition focus:border-violet-500"
      />
    </div>
  )
}
