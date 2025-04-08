'use client'

import { ChangeEvent, useEffect, useMemo } from 'react'

import EstimatePresenter from '@/app/estimate/estimate-presenter'
import { useInsuranceList } from '@/src/hooks/api/insurance'
import { usePersonalStore } from '@/src/stores/personal'

export default function EstimateContainer() {
	const { data, setQuery } = useInsuranceList()
	const { handleChangeInsurance, personal } = useInsurance()

	function useInsurance() {
		const store = usePersonalStore()
		const personal = useMemo(
			() => ({
				birthday: store.birthday,
				sex: store.sex,
				selectedEstimates: store.selectedEstimates,
			}),
			[store.birthday, store.sex, store.selectedEstimates]
		)

		useEffect(() => {
			setQuery({
				birthday: personal.birthday!,
				sex: personal.sex!,
			})
		}, [personal.birthday, personal.sex])

		const handleChangeInsurance = (event: ChangeEvent<HTMLInputElement>) => {
			const id = Number(event.target.value)
			const insurance = personal.selectedEstimates.includes(id.toString())
				? personal.selectedEstimates.filter((item) => item !== id.toString())
				: [...personal.selectedEstimates, id.toString()]
			store.setSelectedEstimates(insurance)
		}

		return {
			personal,
			handleChangeInsurance,
		}
	}

	return (
		<EstimatePresenter
			personal={{
				birthday: personal.birthday!,
				sex: personal.sex!,
			}}
			insurance={data}
			selectedInsurance={personal.selectedEstimates}
			handleChangeInsurance={handleChangeInsurance}
		/>
	)
}
