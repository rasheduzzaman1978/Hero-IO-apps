import Image from 'next/image'
import { notFound } from 'next/navigation'
import { FaDownload, FaStar } from 'react-icons/fa'
import { MdReviews } from 'react-icons/md'

async function getApps() {
  const response = await fetch('http://localhost:3000/data.json', {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch apps')
  }

  return response.json()
}

export default async function AppDetailsPage({ params }) {
  const apps = await getApps()

  const app = apps.find((item) => item.id === Number(params.id))

  if (!app) {
    notFound()
  }

  const maxRating = Math.max(...app.ratings.map((item) => item.count))

  return (
    <section className="bg-[#f5f5f7] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col gap-8 border-b border-slate-200 pb-8 md:flex-row">
          {/* App Image */}
          <div className="flex h-40 w-40 items-center justify-center rounded bg-white p-4 shadow-sm">
            <Image
              src={app.image}
              alt={app.title}
              width={160}
              height={160}
              className="h-32 w-32 object-contain"
            />
          </div>

          {/* App Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900">
              {app.title}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Developed by{' '}
              <span className="font-medium text-violet-500">
                {app.companyName}
              </span>
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <div className="flex items-center gap-2 text-green-500">
                  <FaDownload className="text-lg" />
                </div>

                <p className="mt-1 text-xs text-slate-500">Downloads</p>
                <h3 className="text-3xl font-bold text-slate-900">
                  {app.downloads}
                </h3>
              </div>

              <div>
                <div className="flex items-center gap-2 text-orange-500">
                  <FaStar className="text-lg" />
                </div>

                <p className="mt-1 text-xs text-slate-500">Average Ratings</p>
                <h3 className="text-3xl font-bold text-slate-900">
                  {app.ratingAvg}
                </h3>
              </div>

              <div>
                <div className="flex items-center gap-2 text-violet-500">
                  <MdReviews className="text-lg" />
                </div>

                <p className="mt-1 text-xs text-slate-500">Total Reviews</p>
                <h3 className="text-3xl font-bold text-slate-900">
                  {app.reviews}
                </h3>
              </div>
            </div>

            <button className="mt-6 rounded bg-green-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-600">
              Install Now ({app.size} MB)
            </button>
          </div>
        </div>

        {/* Ratings Section */}
        <div className="border-b border-slate-200 py-8">
          <h2 className="text-2xl font-bold text-slate-900">Ratings</h2>

          <div className="mt-8 space-y-5">
            {app.ratings
              .slice()
              .reverse()
              .map((rating, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-12 text-sm text-slate-500">
                    {rating.name}
                  </span>

                  <div className="h-4 flex-1 rounded bg-slate-200">
                    <div
                      className="h-4 rounded bg-orange-500"
                      style={{
                        width: `${(rating.count / maxRating) * 100}%`,
                      }}
                    />
                  </div>

                  <span className="w-16 text-right text-sm text-slate-500">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="py-8">
          <h2 className="text-2xl font-bold text-slate-900">Description</h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            {app.description}
          </p>
        </div>
      </div>
    </section>
  )
}