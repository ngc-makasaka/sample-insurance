'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import IndexPresenter from '@/app/index-presenter'
import { URLS } from '@/src/constants/urls'
import { useInsuranceList } from '@/src/hooks/api/insurance'
import { BasicDatePickerProps } from '@/src/types/components/forms/basic-datepicker'
import { Form } from '@/src/types/components/pages'

export default function IndexContainer() {
	const { data, setQuery } = useInsuranceList()
	const { form, handleChangeSex, handleChangeBirthday, handleChangeEstimates } =
		useForm()
	const { visible, setVisible, onStartEstimate } = useEstimate()

	function useForm() {
		const [form, _setForm] = useState<Form>({
			birthday: null,
			sex: null,
			selectedEstimates: [],
		})

		useEffect(() => {
			if (!form.birthday || !form.sex) return
			setQuery({
				birthday: form.birthday,
				sex: form.sex,
			})
			setVisible(true)
		}, [form])

		const handleChangeSex = (event: React.ChangeEvent<HTMLInputElement>) => {
			_setForm({ ...form, sex: event.target.value as Form['sex'] })
		}

		const handleChangeBirthday = (value: BasicDatePickerProps['value']) => {
			if (!value) return
			_setForm({ ...form, birthday: value.format('YYYY-MM-DD') })
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
			_setForm({
				...form,
				selectedEstimates,
			})
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
			estimate={{ visible, onStartEstimate, insuranceList: data }}
		/>
	)
}
