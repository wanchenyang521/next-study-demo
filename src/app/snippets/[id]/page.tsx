import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PrismaClient } from '@/generated/prisma'
import CopyButton from './copy-button'
import DeleteButton from './delete-button'

const prisma = new PrismaClient()

async function getSnippet(id: string) {
  try {
    const snippet = await prisma.snipper.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    return snippet
  } catch (error) {
    console.error('Error fetching snippet:', error)
    return null
  }
}

export default async function SnippetDetailPage({
  params
}: {
  params: { id: string }
}) {
  const snippet = await getSnippet(params.id)

  if (!snippet) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Snippets
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold mb-2">{snippet.title}</h1>
              <p className="text-gray-500 text-sm">Snippet #{snippet.id}</p>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/snippets/${snippet.id}/edit`}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Edit
              </Link>
              <DeleteButton id={snippet.id} />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Code:</h2>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">{snippet.code}</code>
              </pre>
              <CopyButton code={snippet.code} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <Link
          href={`/snippets/${snippet.id}/edit`}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Edit Snippet
        </Link>
        <Link
          href="/snippets/new"
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Create New Snippet
        </Link>
      </div>
    </div>
  )
}