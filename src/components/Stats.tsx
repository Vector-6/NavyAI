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
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      number: '>99%',
      label: 'Uptime',
      gradient: 'from-red-400 to-red-600',
    },
    {
      number: '24/7',
      label: 'Support',
      gradient: 'from-amber-400 to-amber-600',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-lg p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_1px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)] transition-all duration-200"
            >
              <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
