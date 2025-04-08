'use client'

import SampleDetailPresenter from '@/app/samples/[id]/sample-detail-presenter'
import { useSampleDetail } from '@/src/hooks/api/sample'
import { PageIdProps } from '@/src/types/components/pages/common'

export default function SampleDetailContainer({ id }: { id: PageIdProps }) {
	const sample = useSampleDetail(id)

	return <SampleDetailPresenter swr={sample} />
}
