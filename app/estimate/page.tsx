'use client'
import { redirect } from 'next/navigation'

import EstimateContainer from '@/app/estimate/estimate-container'
import { usePersonalStore } from '@/src/stores/personal'

export default function EstimatePage() {
	const store = usePersonalStore()

	if (!store.birthday || !store.sex) {
		return redirect('/')
	}
	return <EstimateContainer />
}
