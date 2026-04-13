'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaDownload, FaStar } from 'react-icons/fa'
import toast from 'react-hot-toast'

export default function InstalledAppsList() {
  const [installedApps, setInstalledApps] = useState([])

  useEffect(() => {
    const savedApps =
      JSON.parse(localStorage.getItem('installedApps')) || []

    setInstalledApps(savedApps)
  }, [])

  const handleUninstall = (id) => {
    const removedApp = installedApps.find((item) => item.id === id)

    const updatedApps = installedApps.filter((item) => item.id !== id)

    setInstalledApps(updatedApps)
    localStorage.setItem('installedApps', JSON.stringify(updatedApps))

    toast.success(`${removedApp.title} uninstalled successfully`)
  }

  return (
    <div className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">
          ({installedApps.length}) Installed Apps
        </h2>
      </div>

      {installedApps.length === 0 ? (
        <div className="rounded-md bg-white p-8 text-center shadow-sm">
          <p className="text-sm text-slate-500">No installed apps found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {installedApps.map((item) => (
            <div key={item.id} className="rounded-md bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="h-14 w-14 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-slate-800">
                      {item.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1 text-green-500">
                        <FaDownload className="text-[10px]" />
                        {item.downloads}
                      </span>

                      <span className="flex items-center gap-1 text-orange-500">
                        <FaStar className="text-[10px]" />
                        {item.ratingAvg}
                      </span>

                      <span>{item.size} MB</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(item.id)}
                  className="rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

