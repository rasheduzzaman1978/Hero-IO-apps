import appsData from '../../../../../public/data.json'
import InstalledAppsList from './InstalledAppCard'

export default async function InstallationPage({ params }) {
  const {id} = await params
  const app = appsData.find((item) => item.id === Number(params.id))

  if (!app) {
    return null
  }

  return (
    <section className="bg-[#f5f5f7] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Your Installed Apps
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="mt-10 flex justify-end">
          <button className="rounded border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
            Sort By Size
          </button>
        </div>

        <InstalledAppsList app={app} />
      </div>
    </section>
  )
}