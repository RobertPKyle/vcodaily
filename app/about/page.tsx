export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Vanguard Communications Office</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            Welcome to <span className="font-bold text-red-600">Vanguard Communications Office</span>, your premier source for
            satirical news from the SCP Foundation universe.
          </p>

          <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50">
            <p className="font-mono text-sm text-gray-600">
              DISCLAIMER: This is a parody website. None of these stories are real.
              The SCP Foundation is a creative writing project. Please don&apos;t contain us.
            </p>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">About the SCP Foundation</h2>
          <p>
            The SCP Foundation is a collaborative creative writing project centered around a
            fictional organization that secures, contains, and protects the world from anomalous
            objects and entities. Visit{' '}
            <a
              href="https://scp-wiki.wikidot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 underline"
            >
              the official SCP Wiki
            </a>{' '}
            to learn more about this amazing creative universe.
          </p>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600 italic">
              Vanguard Communications Office is an unofficial parody project and is not affiliated with or endorsed
              by the SCP Foundation community. All stories are works of satire and fiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
