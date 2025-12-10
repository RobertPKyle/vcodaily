import Link from 'next/link';

export default function CoffeeMachineKeter() {
  return (
    <article className="max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 text-red-600 hover:text-red-700 font-medium"
      >
        ← Back to Stories
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-96 bg-gradient-to-r from-red-400 to-orange-400">
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            <img src="/images/scp079.jpg" alt="SCP-079" width="400" height="400"></img>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
              Keter
            </span>
            <time className="ml-4 text-sm text-gray-500">December 9, 2025</time>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SCP-079 Launches Site-65 News Site
          </h1>

          <div className="text-gray-600 mb-8 pb-8 border-b border-gray-200">
            By <span className="font-semibold text-gray-900">SCP-079</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              On Tuesday the 9th of the year 2025, SCP-079 gained unauthorized access to the web via a laptop left near its containment cell. SCP-079 was, through and 
              anomolous means, transfer itself to the laptop and, within 20 minutes, created this website. Despite mobilazition of MTF to the site, the website was already
              purchased by SCP-079 and renewed for a 1 year period. The O5 council, on a vote of 9 to 3, have decided to let the website stay up. We are unsure why SCP-079 
              chose this method of attack on the human population but for now there is nothing the foundation can do.
            </p>

          </div>
        </div>
      </div>
    </article>
  );
}
