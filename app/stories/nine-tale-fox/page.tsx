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
            <img src="/images/ntf.jpg" alt="NineTailFox" width="400" height="300"></img>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
              Euclid
            </span>
            <time className="ml-4 text-sm text-gray-500">December 15, 2025</time>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stop asking Epsilon-11 "Nine-Tailed Fox" what they say
          </h1>

          <div className="text-gray-600 mb-8 pb-8 border-b border-gray-200">
            By <span className="font-semibold text-gray-900">MTF E-11 Captain Jonas'</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              A notice has been sent out to all members of the Site. Please stop asking members of MTF Epsilon-11 "Nine-Tailed Fox" what they say. This stupid question has been following us since that stupid song came out like 12 years ago.
            </p>

            <p className="mb-4">
              If I have another dumbass scientist come up to one of my guards and go "ring-ding-ding-ding-ding-ding-ding" I'm going to shoot him. It's been 12 years. Please for the love of God let the meme go. It wasnt funny then and it isn't funny now. Please stop.
            </p>

          </div>
        </div>
      </div>
    </article>
  );
}
