import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-red-400 transition-colors">
              Vanguard Communications Office
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              href="/"
              className="hover:text-red-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-red-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/support"
              className="hover:text-red-400 transition-colors font-medium"
            >
              Support
            </Link>
            <a
              href="https://linktr.ee/Site65Podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors font-medium"
            >
              Site-65 Podcast
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
