export default function Stats() {
  const stats = [
    {
      number: '186',
      label: 'AI Models',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      number: '27',
      label: 'Providers',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      number: '>99%',
      label: 'Uptime',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      number: '24/7',
      label: 'Support',
      gradient: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                group cursor-pointer
                rounded-lg p-6
                border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-800
                shadow-[0_1px_4px_rgba(0,0,0,0.1)]
                dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)]
                transform transition-all duration-200 ease-out
                hover:scale-105 hover:shadow-lg
              "
            >
              <div
                className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </div>

              <div
                className="
                  text-sm font-medium text-gray-600 dark:text-gray-400
                  transition-all duration-200
                  group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600
                  group-hover:bg-clip-text group-hover:text-transparent
                "
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
