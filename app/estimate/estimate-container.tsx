'use client'

import { ChangeEvent, useEffect, useMemo, useState } from 'react'

import EstimatePresenter from '@/app/estimate/estimate-presenter'
import { useInsuranceList } from '@/src/hooks/api/insurance'
import { usePersonalStore } from '@/src/stores/personal'
import { InsuranceResultResponse } from '@/src/types/api/insurance'

export default function EstimateContainer() {
	const { data, setQuery } = useInsuranceList()
	const { handleChangeInsurance, personal } = useInsurance()
	const { editEstimate, openEditEstimateDrawer, toggleEditEstimateDrawer } =
		useEditEstimateDrawer()
	const {
		descriptionEstimate,
		openInsuranceDescriptionDrawer,
		toggleInsuranceDescriptionDrawer,
	} = useInsuranceDescriptionDrawer()

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

	// 見積もり編集
	function useEditEstimateDrawer() {
		const [editEstimate, _setEditEstimate] = useState<InsuranceResultResponse>()
		const [openEditEstimateDrawer, _setOpenEditEstimateDrawer] =
			useState<boolean>(false)

		const toggleEditEstimateDrawer = (id: string) => {
			const insurance = data?.results.find((result) => result.id === Number(id))

			_setEditEstimate(insurance)
			_setOpenEditEstimateDrawer(!openEditEstimateDrawer)
		}

		return {
			editEstimate,
			openEditEstimateDrawer,
			toggleEditEstimateDrawer,
		}
	}

	// 商品特徴・メリット
	function useInsuranceDescriptionDrawer() {
		const [descriptionEstimate, _setDescriptionEstimate] =
			useState<InsuranceResultResponse>()
		const [openInsuranceDescriptionDrawer, _setOpenInsuranceDescriptionDrawer] =
			useState<boolean>(false)

		const toggleInsuranceDescriptionDrawer = (id: string) => {
			const insurance = data?.results.find((result) => result.id === Number(id))
			_setDescriptionEstimate(insurance)
			_setOpenInsuranceDescriptionDrawer(!openInsuranceDescriptionDrawer)
		}

		return {
			descriptionEstimate,
			openInsuranceDescriptionDrawer,
			toggleInsuranceDescriptionDrawer,
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
			editEstimateDrawer={{
				insurance: editEstimate,
				open: openEditEstimateDrawer,
				toggle: toggleEditEstimateDrawer,
			}}
			insuranceDescriptionDrawer={{
				insurance: descriptionEstimate,
				open: openInsuranceDescriptionDrawer,
				toggle: toggleInsuranceDescriptionDrawer,
			}}
		/>
	)
}
