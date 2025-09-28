import Link from 'next/link'

export default function SnippetNotFound() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Snippet Not Found</h2>
        <p className="text-gray-600 mb-6">
          The snippet you&#39;re looking for doesn&#39;t exist or has been deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/snippets/new"
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Create New Snippet
          </Link>
        </div>
      </div>
    </div>
  )
}