export default function CodeExample() {
  const codeSnippet = `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.NAVY_API_KEY,
  baseURL: 'https://api.navy/v1',
});

const response = await client.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }],
});`;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Simple Integration
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-200">
            Use your existing OpenAI code with minimal changes
          </p>
        </div>

        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800">
            <span className="text-gray-300 dark:text-gray-400 text-sm font-medium">example.ts</span>
            <button className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
              Copy
            </button>
          </div>
          <pre className="p-6 overflow-x-auto">
            <code className="text-sm text-gray-100 font-mono leading-relaxed">
              {codeSnippet}
            </code>
          </pre>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/docs/"
            className="inline-flex items-center text-[#0078D4] dark:text-blue-400 hover:text-[#005A9E] dark:hover:text-blue-500 font-semibold transition-colors"
          >
            View Full Documentation →
          </a>
        </div>
      </div>
    </section>
  );
}
