import Link from 'next/link'
import Image from 'next/image'

import Error404Image from '@/assets/images/error-404.png'

export default function NotFound() {
  return (
    <div className="flex min-h-50 md:min-h-75 flex-col items-center justify-center bg-[#f5f5f7] px-6 text-center">
      <div className="relative mb-8 h-55 w-55 sm:h-60 sm:w-60 md:h-65 md:w-65">
        <Image
          src={Error404Image}
          alt="404 Illustration"
          fill
          className="object-contain h-10 w-auto"
          priority
        />
      </div>

      <h2 className="mb-2 text-3xl font-bold text-slate-900">
        Oops, page not found!
      </h2>

      <p className="mb-6 max-w-md text-sm text-slate-500">
        The page you are looking for is not available.
      </p>

      <Link
        href="/"
        className="rounded-md bg-violet-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-600"
      >
        Go Back!
      </Link>
    </div>
  )
}