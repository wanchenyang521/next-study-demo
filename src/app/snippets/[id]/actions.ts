'use server'

import { PrismaClient } from '@/generated/prisma'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function deleteSnippet(id: number) {
  try {
    await prisma.snipper.delete({
      where: {
        id: id
      }
    })

    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Error deleting snippet:', error)
    throw new Error('Failed to delete snippet')
  }
}