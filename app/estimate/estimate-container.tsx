'use client'

import { ChangeEvent, useEffect, useState } from 'react'

import EstimatePresenter from '@/app/estimate/estimate-presenter'
import { useInsuranceList } from '@/src/hooks/api/insurance'

export default function EstimateContainer() {
	const { data, setQuery } = useInsuranceList()
	const { selectedInsurance, handleChangeInsurance } = useInsurance()

	function useInsurance() {
		const [selectedInsurance, _setSelectedInsurance] = useState<number[]>([
			1, 2, 3, 4,
		])

		useEffect(() => {
			setQuery({
				birthday: '1990-01-01',
				sex: 'male',
			})
		}, [])

		const handleChangeInsurance = (event: ChangeEvent<HTMLInputElement>) => {
			const id = Number(event.target.value)
			const insurance = selectedInsurance.includes(id)
				? selectedInsurance.filter((item) => item !== id)
				: [...selectedInsurance, id]
			_setSelectedInsurance(insurance)
		}

		return {
			selectedInsurance,
			handleChangeInsurance,
		}
	}

	return (
		<EstimatePresenter
			personal={{
				birthday: '1990-01-01',
				age: 30,
				sex: 'male',
			}}
			insurance={data}
			selectedInsurance={selectedInsurance}
			handleChangeInsurance={handleChangeInsurance}
		/>
	)
}
