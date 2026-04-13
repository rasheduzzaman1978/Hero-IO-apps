export default function StatsSection() {
  const stats = [
    {
      title: 'Total Downloads',
      value: '29.6M',
      description: '21% More Than Last Month',
    },
    {
      title: 'Total Reviews',
      value: '906K',
      description: '46% More Than Last Month',
    },
    {
      title: 'Active Apps',
      value: '132+',
      description: '31 More Will Launch',
    },
  ]

  return (
    <section className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-500 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl sm:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-6 text-center"
            >
              <p className="text-sm text-white/70">{item.title}</p>

              <h3 className="mt-3 text-4xl font-bold">{item.value}</h3>

              <p className="mt-3 text-xs text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}