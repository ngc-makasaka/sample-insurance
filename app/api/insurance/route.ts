import { NextRequest, NextResponse } from 'next/server'

import { insuranceListMock } from '@/src/mocks/insurance'

export async function GET(request: NextRequest) {
	console.log(request)
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(NextResponse.json(insuranceListMock))
		}, 3000)
	})
}
