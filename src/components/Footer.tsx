export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '/pricing/' },
      { name: 'Documentation', href: '/docs/' },
      { name: 'API Status', href: '#status' },
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    Legal: [
      { name: 'Terms of Service', href: '/terms/' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Security', href: '#security' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#0078D4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">NavyAI</span>
            </div>
            <p className="text-gray-600 text-sm">
              Unified access to the world's most powerful AI models.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#0078D4] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 NavyAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 hover:text-[#0078D4] transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0078D4] transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0078D4] transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
