import Image from 'next/image'
import { FaDownload, FaStar } from 'react-icons/fa'

import SearchInput from './SearchInput'

async function getApps(search = '') {
  const response = await fetch('http://localhost:3000/data.json', {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch apps')
  }

  const apps = await response.json()

  return apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  )
}

export default async function AppsPage({ searchParams }) {
  const query = searchParams?.search || ''
  const apps = await getApps(query)

  return (
    <section className="bg-[#f5f5f7] px-6 py-14">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our All Applications
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Top Bar */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-slate-800">
            ({apps.length}) Apps Found
          </h2>

          <SearchInput />
        </div>

        {/* Apps Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => (
            <div
              key={app.id}
              className="rounded-md bg-white p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-center overflow-hidden rounded bg-gray-200">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={200}
                  height={200}
                  className="h-40 w-40 object-cover md:h-50 md:w-50"
                />
              </div>

              <h3 className="mt-3 line-clamp-2 text-sm font-medium text-slate-800">
                {app.title}
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1 rounded-sm bg-green-50 px-2 py-1 text-[11px] font-medium text-green-600">
                  <FaDownload className="text-[9px]" />
                  {app.downloads}
                </div>

                <div className="flex items-center gap-1 rounded-sm bg-orange-50 px-2 py-1 text-[11px] font-medium text-orange-500">
                  <FaStar className="text-[9px]" />
                  {app.ratingAvg}
                </div>
              </div>
            </div>
          ))}
        </div>

        {apps.length === 0 && (
          <div className="mt-10 text-center text-slate-500">
            No apps found
          </div>
        )}
      </div>
    </section>
  )
}

