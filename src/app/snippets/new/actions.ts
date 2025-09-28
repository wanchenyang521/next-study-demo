'use server'

import { PrismaClient } from '@/generated/prisma'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function createSnippet(data: { title: string; code: string }) {
  try {
    const snippet = await prisma.snipper.create({
      data: {
        title: data.title,
        code: data.code
      }
    })

    revalidatePath('/snippets')
    return { success: true, snippet }
  } catch (error) {
    console.error('Error creating snippet:', error)
    throw new Error('Failed to create snippet')
  }
}