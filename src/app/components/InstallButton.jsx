'use client'

import Link from 'next/link'
import toast from 'react-hot-toast'

export default function InstallButton({ app }) {
  const handleInstall = () => {
    toast.success(`${app.title} installed successfully`)
  }

  return (
    <Link
      href={`/apps/${app.id}/install`}
      onClick={handleInstall}
      className="mt-6 inline-block rounded bg-green-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-600"
    >
      Install Now ({app.size} MB)
    </Link>
  )
}

