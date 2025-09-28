'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { deleteSnippet } from './actions'

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this snippet?')) {
      return
    }

    setIsDeleting(true)
    try {
      await deleteSnippet(id)
      router.push('/')
    } catch (error) {
      console.error('Failed to delete snippet:', error)
      alert('Failed to delete snippet. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  )
}