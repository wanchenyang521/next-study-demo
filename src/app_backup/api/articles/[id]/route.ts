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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = getDatabase()
    const article = db.articles.find(a => a.id === parseInt(params.id))

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    return NextResponse.json(article)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { title, content, author, category, tags } = body
    const articleId = parseInt(params.id)

    const db = getDatabase()
    const articleIndex = db.articles.findIndex(a => a.id === articleId)

    if (articleIndex === -1) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    const updatedArticle: Article = {
      ...db.articles[articleIndex],
      title: title || db.articles[articleIndex].title,
      content: content || db.articles[articleIndex].content,
      author: author || db.articles[articleIndex].author,
      category: category || db.articles[articleIndex].category,
      tags: tags || db.articles[articleIndex].tags,
      updatedAt: new Date().toISOString()
    }

    db.articles[articleIndex] = updatedArticle
    saveDatabase(db)

    return NextResponse.json(updatedArticle)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const articleId = parseInt(params.id)
    const db = getDatabase()
    const articleIndex = db.articles.findIndex(a => a.id === articleId)

    if (articleIndex === -1) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    const deletedArticle = db.articles[articleIndex]
    db.articles.splice(articleIndex, 1)
    saveDatabase(db)

    return NextResponse.json({
      message: 'Article deleted successfully',
      deletedArticle
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 })
  }
}