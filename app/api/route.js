/**
 * ============================================
 * BACKEND API ROUTES
 * MongoDB Integration & Contact Form Handler
 * ============================================
 * 
 * Available endpoints:
 * - POST /api/contact     : Submit contact/sponsorship form
 * - GET  /api/contacts    : Retrieve all submissions (admin)
 * - GET  /api/health      : Health check endpoint
 */



import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017'
const DB_NAME = 'kideo_website'

let cachedClient = null

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient
  }

  try {
    const client = await MongoClient.connect(MONGO_URL, {
      maxPoolSize: 10,
      minPoolSize: 2,
      serverSelectionTimeoutMS: 5000,
    })
    cachedClient = client
    return client
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

// POST /api/contact - Handle contact form submissions
export async function POST(request, { params }) {
  const path = params?.path?.join('/') || ''

  if (path === 'contact') {
    try {
      const body = await request.json()
      const { name, email, company, budget, opportunityType, message } = body

      // Basic validation
      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'Name, email, and message are required' },
          { status: 400 }
        )
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Invalid email address' },
          { status: 400 }
        )
      }

      const client = await connectToDatabase()
      const db = client.db(DB_NAME)
      const collection = db.collection('contacts')

      const contactSubmission = {
        name,
        email,
        company: company || '',
        budget: budget || '',
        opportunityType: opportunityType || '',
        message,
        createdAt: new Date(),
        status: 'new'
      }

      const result = await collection.insertOne(contactSubmission)

      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact form submitted successfully',
          id: result.insertedId 
        },
        { status: 201 }
      )
    } catch (error) {
      console.error('Error handling contact form:', error)
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: 500 }
      )
    }
  }

  return NextResponse.json(
    { error: 'Endpoint not found' },
    { status: 404 }
  )
}

// GET /api/contacts - Retrieve contact submissions (for admin use)
export async function GET(request, { params }) {
  const path = params?.path?.join('/') || ''

  if (path === 'contacts') {
    try {
      const client = await connectToDatabase()
      const db = client.db(DB_NAME)
      const collection = db.collection('contacts')

      const contacts = await collection
        .find({})
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray()

      return NextResponse.json(
        { success: true, contacts },
        { status: 200 }
      )
    } catch (error) {
      console.error('Error fetching contacts:', error)
      return NextResponse.json(
        { error: 'Failed to fetch contacts' },
        { status: 500 }
      )
    }
  }

  if (path === 'health') {
    return NextResponse.json(
      { status: 'healthy', timestamp: new Date().toISOString() },
      { status: 200 }
    )
  }

  return NextResponse.json(
    { error: 'Endpoint not found' },
    { status: 404 }
  )
}