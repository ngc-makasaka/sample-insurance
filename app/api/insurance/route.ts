import { NextRequest, NextResponse } from 'next/server'

import { insuranceListMock } from '@/src/mocks/insurance'

export async function GET(request: NextRequest) {
	console.log(request)
	await new Promise((resolve) => setTimeout(resolve, 3000))
	return NextResponse.json(insuranceListMock)
}
