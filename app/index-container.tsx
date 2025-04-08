'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import IndexPresenter from '@/app/index-presenter'
import { URLS } from '@/src/constants/urls'
import { useInsuranceList } from '@/src/hooks/api/insurance'
import { usePersonalStore } from '@/src/stores/personal'
import { BasicDatePickerProps } from '@/src/types/components/forms/basic-datepicker'
import { PersonalStoreState } from '@/src/types/stores/personal'

export default function IndexContainer() {
	const { data, isLoading, setQuery } = useInsuranceList()
	const { form, handleChangeSex, handleChangeBirthday, handleChangeEstimates } =
		useForm()
	const { visible, setVisible, onStartEstimate } = useEstimate()

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
		<IndexPresenter
			formState={{
				form,
				handleChangeSex,
				handleChangeBirthday,
				handleChangeEstimates,
			}}
			estimate={{ visible, isLoading, onStartEstimate, insuranceList: data }}
		/>
	)
}
