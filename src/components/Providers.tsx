export default function Providers() {
  const providers = [
    { name: 'OpenAI', models: 'GPT-4, GPT-3.5, DALL-E 3' },
    { name: 'Google', models: 'Gemini Pro, PaLM 2' },
    { name: 'Mistral AI', models: 'Mistral Large, Medium, Small' },
    { name: 'Anthropic', models: 'Claude 3 Opus, Sonnet, Haiku' },
    { name: 'Meta', models: 'Llama 2, Code Llama' },
    { name: 'Cohere', models: 'Command, Embed' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Access Leading AI Providers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-200">
            One API to rule them all. Connect to the world's best AI models through a single integration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-[0_1px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-200 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                {provider.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-200">
                {provider.models}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-200">
            And many more providers added regularly
          </p>
          <a
            href="/docs/"
            className="inline-flex items-center px-6 py-3 bg-[#0078D4] text-white font-semibold rounded-lg shadow-md hover:bg-[#005A9E] transition-all duration-200 hover:shadow-lg"
          >
            See All Supported Models
          </a>
        </div>
      </div>
    </section>
  );
}
