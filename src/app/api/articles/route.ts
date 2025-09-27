
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface Article {
  id: number
  title: string
  content: string
  author: string
  createdAt: string
  updatedAt: string
  category: string
  tags: string[]
}

interface Database {
  articles: Article[]
}

function getDatabase(): Database {
  const dbPath = path.join(process.cwd(), 'src', 'db.json')
  const data = fs.readFileSync(dbPath, 'utf-8')
  return JSON.parse(data)
}

function saveDatabase(db: Database): void {
  const dbPath = path.join(process.cwd(), 'src', 'db.json')
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8')
}

export async function GET(request: NextRequest) {
  try {
    const db = getDatabase()
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')
    const search = searchParams.get('search')

    let filteredArticles = db.articles

    if (category) {
      filteredArticles = filteredArticles.filter(article =>
        article.category.toLowerCase() === category.toLowerCase()
      )
    }

    if (search) {
      filteredArticles = filteredArticles.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.content.toLowerCase().includes(search.toLowerCase())
      )
    }

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex)

    return NextResponse.json({
      articles: paginatedArticles,
      total: filteredArticles.length,
      page,
      limit,
      totalPages: Math.ceil(filteredArticles.length / limit)
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, author, category, tags } = body

    if (!title || !content || !author) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const db = getDatabase()
    const newId = Math.max(...db.articles.map(a => a.id), 0) + 1
    const now = new Date().toISOString()

    const newArticle: Article = {
      id: newId,
      title,
      content,
      author,
      createdAt: now,
      updatedAt: now,
      category: category || '其他',
      tags: tags || []
    }

    db.articles.push(newArticle)
    saveDatabase(db)

    return NextResponse.json(newArticle, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { ids, updates } = body

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'Invalid or missing article IDs' }, { status: 400 })
    }

    const db = getDatabase()
    const updatedArticles = []
    const now = new Date().toISOString()

    for (const id of ids) {
      const articleIndex = db.articles.findIndex(a => a.id === parseInt(id))
      if (articleIndex !== -1) {
        const updatedArticle = {
          ...db.articles[articleIndex],
          ...updates,
          updatedAt: now
        }
        db.articles[articleIndex] = updatedArticle
        updatedArticles.push(updatedArticle)
      }
    }

    saveDatabase(db)

    return NextResponse.json({
      message: `Updated ${updatedArticles.length} articles`,
      updatedArticles
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update articles' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { ids } = body

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'Invalid or missing article IDs' }, { status: 400 })
    }

    const db = getDatabase()
    const deletedArticles = []

    for (const id of ids.reverse()) {
      const articleIndex = db.articles.findIndex(a => a.id === parseInt(id))
      if (articleIndex !== -1) {
        const deletedArticle = db.articles.splice(articleIndex, 1)[0]
        deletedArticles.push(deletedArticle)
      }
    }

    saveDatabase(db)

    return NextResponse.json({
      message: `Deleted ${deletedArticles.length} articles`,
      deletedArticles
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete articles' }, { status: 500 })
  }
}