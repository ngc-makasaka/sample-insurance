'use client'
import { useParams } from 'next/navigation'

import SampleDetailContainer from '@/app/samples/[id]/sample-detail-container'

export default function SamplePage() {
	const params = useParams()
	const id = Number(params.id)

	return <SampleDetailContainer id={id} />
}
