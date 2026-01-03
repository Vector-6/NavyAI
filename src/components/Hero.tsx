import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          NavyAI - Unified Access to
          <br />
          Modern AI Models
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Access a Universe of AI Models. NavyAI provides a single, unified API to access
          the world's most powerful AI models from OpenAI, Google, Mistral, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/dashboard/"
            className="group inline-flex items-center px-8 py-4 bg-[#0078D4] text-white font-semibold rounded-lg shadow-md hover:bg-[#005A9E] transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Continue with Discord
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/docs/"
            className="inline-flex items-center px-8 py-4 bg-white text-[#0078D4] font-semibold rounded-lg shadow-md hover:shadow-lg border-2 border-[#0078D4] transition-all duration-200 transform hover:-translate-y-0.5"
          >
            View Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
