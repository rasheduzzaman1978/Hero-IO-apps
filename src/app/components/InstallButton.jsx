'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function InstallButton({ app }) {
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    const savedApps =
      JSON.parse(localStorage.getItem('installedApps')) || []

    const alreadyInstalled = savedApps.find(
      (item) => item.id === app.id
    )

    const timer = setTimeout(() => {
      setIsInstalled(!!alreadyInstalled)
    }, 0)

    return () => clearTimeout(timer)
  }, [app.id])

  const handleInstall = () => {
    const savedApps =
      JSON.parse(localStorage.getItem('installedApps')) || []

    const alreadyInstalled = savedApps.find(
      (item) => item.id === app.id
    )

    if (alreadyInstalled) {
      toast('Already installed')
      return
    }

    const updatedApps = [...savedApps, app]

    localStorage.setItem('installedApps', JSON.stringify(updatedApps))

    setIsInstalled(true)
    toast.success(`${app.title} installed successfully`)
  }

  return (
    <button
      onClick={handleInstall}
      disabled={isInstalled}
      className={`mt-6 rounded px-5 py-3 text-sm font-medium text-white transition ${
        isInstalled
          ? 'cursor-not-allowed bg-slate-300'
          : 'bg-green-500 hover:bg-green-600'
      }`}
    >
      {isInstalled
        ? `Installed (${app.size} MB)`
        : `Install Now (${app.size} MB)`}
    </button>
  )
}