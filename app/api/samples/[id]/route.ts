import { NextRequest, NextResponse } from 'next/server'

import { sampleListMock } from '@/src/mocks/sample'

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	console.log(request)
	const { id } = await params
	const target = sampleListMock.results.find(
		(result) => result.id === Number(id)
	)

	return NextResponse.json(target)
}
