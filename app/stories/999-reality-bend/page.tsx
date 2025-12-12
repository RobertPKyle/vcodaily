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
            <img src="/images/scp999.jpg" alt="SCP-999" width="400" height="400"></img>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
              Keter
            </span>
            <time className="ml-4 text-sm text-gray-500">December 12, 2025</time>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SCP-999 transcends reality
          </h1>

          <div className="text-gray-600 mb-8 pb-8 border-b border-gray-200">
            By <span className="font-semibold text-gray-900">Dr. Robert 'Tomato' Peterson'</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              During a routine test of SCP-999 by a new Jr. Researcher, SCP-999 requested a drink. The researcher, not fully understanding what he could and could not give SCP-999, decided
              to give SCP-999 a bit of black coffee from his mug. SCP-999 enjoyed the coffee and began zooming around the Researcher's legs. The Researcher, amused with SCP-999, decided to then allow it
              access to the Wolfgang Brand Coffee Machine located in LCZ. He gave the SCP $10 and told SCP-999 to get what he wanted.
            </p>

            <p className="mb-4">
              SCP-999 ordered 16 cups of coffee.
            </p>

            <p className="mb-4">
              SCP-999 consumed all the coffee and began to vibrate at an incredible rate. According to closed cameras in LCZ, in a moment a bright light appeared in the room and SCP-999 vanished into thin air. The
              Researcher bolted from his chair and rand around despretely searching for SCP-999. He then alreted the rest of the Foundation and the search was on for SCP-999.
            </p>

            <p className="mb-4">
              SCP-999 was discovered 3 days later 5000 miles away from Site-65 in the small town of [REDACTED]. According to locals, a flash was seen at the center of town and upon investigation, SCP-999 was found. The government of [REDACTED] alerted the Foundation and teams were sent in to retrieve SCP-999. SCP-999 seemed no worse for ware after the incident. The Researcher was reprimanded for his actions.
            </p>

          </div>
        </div>
      </div>
    </article>
  );
}
