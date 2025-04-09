import { useMemo, useEffect, ChangeEvent, useState } from 'react'

import { usePersonalStore } from '@/src/stores/personal'
import { InsuranceResultResponse } from '@/src/types/api/insurance'
import { EstimateHooksProps } from '@/src/types/hooks/pages/estimate'

export default function useEstimateHooks({
	data,
	setQuery,
}: EstimateHooksProps) {
	const store = usePersonalStore()

	// 保険情報
	function useInsurance() {
		const personal = useMemo(
			() => ({
				birthday: store.birthday,
				sex: store.sex,
				selectedEstimates: store.selectedEstimates,
			}),
			[store]
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

	// 見積もり編集Drawer
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

	// 商品特徴・メリットDrawer
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

	return {
		store,
		useInsurance,
		useEditEstimateDrawer,
		useInsuranceDescriptionDrawer,
	}
}
