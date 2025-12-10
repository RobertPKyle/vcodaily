import { stories } from '@/data/stories';
import { Story } from '@/types/story';
import Link from 'next/link';

function StoryCard({ story }: { story: Story }) {
  const classColors = {
    Safe: 'bg-green-100 text-green-800',
    Euclid: 'bg-yellow-100 text-yellow-800',
    Keter: 'bg-red-100 text-red-800',
    Thaumiel: 'bg-purple-100 text-purple-800',
    Neutralized: 'bg-gray-100 text-gray-800',
  };

  return (
    <Link href={`/stories/${story.slug}`}>
      <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer h-full">
        <div className="flex items-start justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${classColors[story.scpClass]}`}>
            {story.scpClass}
          </span>
          <time className="text-sm text-gray-500">{story.date}</time>
        </div>
        <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-red-600 transition-colors">
          {story.title}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {story.excerpt}
        </p>
        <div className="text-sm text-gray-600">
          By {story.author}
        </div>
      </article>
    </Link>
  );
}

export default function Home() {
  return (
    <div>
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Vanguard Communications Office
        </h1>
        <p className="text-xl text-gray-600">
          Anomalous News from the Foundation Universe
        </p>
        <div className="mt-4 text-sm text-gray-500 font-mono">
          CLEARANCE LEVEL: PUBLIC | CLASSIFICATION: SATIRE
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}
