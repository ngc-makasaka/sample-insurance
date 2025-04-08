import { NextRequest, NextResponse } from 'next/server'

import { sampleListMock } from '@/src/mocks/sample'

export async function GET(request: NextRequest) {
	console.log(request)
	return NextResponse.json(sampleListMock)
}
