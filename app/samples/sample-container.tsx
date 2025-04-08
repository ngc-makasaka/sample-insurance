'use client'

import SamplePresenter from '@/app/samples/sample-presenter'
import { useSampleList } from '@/src/hooks/api/sample'

export default function SampleContainer() {
	const sample = useSampleList()

	return <SamplePresenter swr={sample} />
}
