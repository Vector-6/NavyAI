import {
  Brain,
  Globe,
  Sparkles,
  Bot,
  Layers,
  Cpu,
} from "lucide-react";

export default function Providers() {
  const providers = [
    {
      name: "OpenAI",
      models: "GPT-4, GPT-3.5, DALL-E 3",
      icon: Brain,
    },
    {
      name: "Google",
      models: "Gemini Pro, PaLM 2",
      icon: Globe,
    },
    {
      name: "Mistral AI",
      models: "Mistral Large, Medium, Small",
      icon: Sparkles,
    },
    {
      name: "Anthropic",
      models: "Claude 3 Opus, Sonnet, Haiku",
      icon: Bot,
    },
    {
      name: "Meta",
      models: "Llama 2, Code Llama",
      icon: Layers,
    },
    {
      name: "Cohere",
      models: "Command, Embed",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Access Leading AI Providers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            One API to rule them all. Connect to the world's best AI models through a single integration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider, index) => {
            const Icon = provider.icon;

            return (
              <div
                key={index}
                className="group cursor-pointer bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-100 dark:border-gray-700 shadow transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-7 h-7 text-[#0078D4] group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {provider.name}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {provider.models}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            And many more providers added regularly
          </p>
          <a
            href="/models/"
            className="inline-flex items-center px-6 py-3 bg-[#0078D4] text-white font-semibold rounded-lg shadow-md hover:bg-[#005A9E] transition-all"
          >
            See All Supported Models
          </a>
        </div>
      </div>
    </section>
  );
}
