import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Configurations
export const config = { matcher: [] }

export async function middleware(request: NextRequest) {
	// Redirects
	return NextResponse.redirect(new URL('/404', request.url))
}
