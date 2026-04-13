import Image from 'next/image'
import Link from 'next/link'
import { FaDownload, FaStar } from 'react-icons/fa';
import appsData from '../../../../public/data.json';

async function getApps() {
  return appsData.slice(0, 8)
}

// async function getApps() {
//   const response = await fetch('/data.json', {
//     cache: 'no-store',
//   })

//   if (!response.ok) {
//     throw new Error('Failed to fetch apps')
//   }

//   const data = await response.json()
//   return data.slice(0, 8)
// }

export default async function TrendingAppsSection() {
  const apps = await getApps()

  return (
    <section className="bg-[#f5f5f7] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Trending Apps
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Apps Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => (
            <Link
              key={app.id}
              href={`/apps/${app.id}`}
              className="rounded-md bg-white p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* App Image */}
              <div className="overflow-hidden rounded bg-gray-200">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={300}
                  height={300}
                  className="h-44 w-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 line-clamp-2 text-sm font-medium text-slate-800">
                {app.title}
              </h3>

              {/* Bottom Stats */}
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
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/apps"
            className="rounded bg-violet-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-violet-600"
          >
            Show All
          </Link>
        </div>
      </div>
    </section>
  )
}