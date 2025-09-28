import Link from 'next/link'
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

async function getSnippets() {
  const snippets = await prisma.snipper.findMany({
    orderBy: {
      id: 'desc'
    }
  })
  return snippets
}

export default async function HomePage() {
  const snippets = await getSnippets()

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Code Snippets</h1>
        <Link
          href="/snippets/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          + New Snippet
        </Link>
      </div>

      {snippets.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 mb-4">No snippets yet</p>
          <Link
            href="/snippets/new"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Create your first snippet
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {snippets.map((snippet) => (
            <div
              key={snippet.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{snippet.title}</h2>
                <span className="text-sm text-gray-500">#{snippet.id}</span>
              </div>
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                <code className="text-sm">{snippet.code}</code>
              </pre>
              <div className="mt-3 flex gap-2">
                <Link
                  href={`/snippets/${snippet.id}`}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  View Details
                </Link>
                <Link
                  href={`/snippets/${snippet.id}/edit`}
                  className="text-sm text-green-600 hover:text-green-700"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}