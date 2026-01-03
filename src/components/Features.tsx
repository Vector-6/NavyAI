import { Zap, DollarSign, Globe, Code2, Shield, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#0078D4]" />,
      title: 'Quick Start',
      description: 'Get started in minutes by using the OpenAI SDK with your NavyAI API key. Simply set the base URL to https://api.navy/v1 and you\'re ready to go.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#0078D4]" />,
      title: 'Flexible Pricing',
      description: 'From personal projects to enterprise solutions, find the perfect plan. Pay only for what you use with transparent, competitive pricing.',
    },
    {
      icon: <Globe className="w-8 h-8 text-[#0078D4]" />,
      title: 'Unified API Gateway',
      description: 'Access multiple AI providers through a single, consistent API. Switch between OpenAI, Google, Mistral, and more without changing your code.',
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#0078D4]" />,
      title: 'Developer Friendly',
      description: 'Compatible with popular SDKs and frameworks. Extensive documentation, code examples, and integration guides to help you build faster.',
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0078D4]" />,
      title: 'Enterprise Ready',
      description: 'Built with security and reliability in mind. SOC 2 compliant infrastructure with 99.9% uptime SLA and dedicated support.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#0078D4]" />,
      title: 'Advanced Features',
      description: 'Image generation, embeddings, function calling, streaming responses, and more. Access the latest AI capabilities as they become available.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build with AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you integrate AI into your applications seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-[0_1px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
