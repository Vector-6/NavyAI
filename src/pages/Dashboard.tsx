import Stats from '../components/Stats';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F3FF] to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dashboard
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Overview of NavyAI platform statistics and capabilities
            </p>
          </div>

          <Stats />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-[0_1px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)] border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Stats
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Total API Calls</span>
                  <span className="text-2xl font-bold text-[#0078D4] dark:text-blue-400">2.5M</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Active Users</span>
                  <span className="text-2xl font-bold text-[#0078D4] dark:text-blue-400">15K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Avg Response Time</span>
                  <span className="text-2xl font-bold text-[#0078D4] dark:text-blue-400">45ms</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-[0_1px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)] border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Latest Updates
              </h2>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Claude 3.5 Sonnet Added</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2 hours ago</p>
                </div>
                <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Performance Improvements</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">1 day ago</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">New Documentation Released</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
