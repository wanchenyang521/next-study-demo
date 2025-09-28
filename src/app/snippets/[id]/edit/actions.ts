'use server'

import { PrismaClient } from '@/generated/prisma'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function updateSnippet(id: number, data: { title: string; code: string }) {
  try {
    const snippet = await prisma.snipper.update({
      where: {
        id: id
      },
      data: {
        title: data.title,
        code: data.code
      }
    })

    revalidatePath('/')
    revalidatePath(`/snippets/${id}`)
    return { success: true, snippet }
  } catch (error) {
    console.error('Error updating snippet:', error)
    throw new Error('Failed to update snippet')
  }
}