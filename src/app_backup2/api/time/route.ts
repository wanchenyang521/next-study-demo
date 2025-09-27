import { NextResponse } from 'next/server';

export async function GET() {
  const now = new Date();
  const timestamp = now.toISOString();
  const random = Math.floor(Math.random() * 1000);

  return NextResponse.json({
    timestamp,
    random,
    message: 'This is a test API endpoint for caching demonstration'
  });
}