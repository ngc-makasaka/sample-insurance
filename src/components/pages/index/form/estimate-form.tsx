'use client'

import { useRouter } from 'next/navigation'
import { useMemo, useEffect, useState } from 'react'

import IndexEstimate from '@/src/components/pages/index/estimate/index-estimate'
import IndexForm from '@/src/components/pages/index/form/index-form'
import { URLS } from '@/src/constants/urls'
import { useInsuranceList } from '@/src/hooks/api/insurance'
import { usePersonalStore } from '@/src/stores/personal'
import { BasicDatePickerProps } from '@/src/types/components/forms/basic-datepicker'
import { PersonalStoreState } from '@/src/types/stores/personal'

export default function EstimateForm() {
	const { data, isLoading, setQuery } = useInsuranceList()
	const { form, handleChangeSex, handleChangeBirthday, handleChangeEstimates } =
		useForm()
	const { visible, setVisible, onStartEstimate } = useEstimate()

	/* form */
	function useForm() {
		const store = usePersonalStore()
		const form = useMemo(
			() => ({
				birthday: store.birthday,
				sex: store.sex,
				selectedEstimates: store.selectedEstimates,
			}),
			[store.birthday, store.sex, store.selectedEstimates]
		)

		useEffect(() => {
			if (!form.birthday || !form.sex) return
			setQuery({
				birthday: form.birthday,
				sex: form.sex,
			})
			setVisible(true)
		}, [form])

		const handleChangeSex = (event: React.ChangeEvent<HTMLInputElement>) => {
			if (!event.target.value) return
			store.setSex(event.target.value as PersonalStoreState['sex'])
		}

		const handleChangeBirthday = (value: BasicDatePickerProps['value']) => {
			if (!value) return
			store.setBirthday(value.format('YYYY-MM-DD'))
		}

		const handleChangeEstimates = (
			event: React.ChangeEvent<HTMLInputElement>
		) => {
			const selectedEstimates = form.selectedEstimates.includes(
				event.target.value
			)
				? form.selectedEstimates.filter(
						(estimate) => estimate !== event.target.value
					)
				: [...form.selectedEstimates, event.target.value]
			store.setSelectedEstimates(selectedEstimates)
		}

		return {
			form,
			handleChangeSex,
			handleChangeBirthday,
			handleChangeEstimates,
		}
	}

	/* 見積もり保険 */
	function useEstimate() {
		const router = useRouter()
		const [visible, setVisible] = useState<boolean>(false)

		const onStartEstimate = () => {
			console.log(form)
			router.push(URLS.estimate.estimate)
		}

		return {
			visible,
			setVisible,
			onStartEstimate,
		}
	}

	return (
		<>
			<IndexForm
				form={form}
				handleChangeSex={handleChangeSex}
				handleChangeBirthday={handleChangeBirthday}
				handleChangeEstimates={handleChangeEstimates}
			/>
			{visible && (
				<IndexEstimate
					isLoading={isLoading}
					insuranceList={data}
					handleChangeEstimates={handleChangeEstimates}
					selectedEstimates={form.selectedEstimates}
					onStartEstimate={onStartEstimate}
				/>
			)}
		</>
	)
}
