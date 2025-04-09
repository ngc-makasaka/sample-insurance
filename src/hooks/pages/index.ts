import { useRouter } from 'next/navigation'
import { useMemo, useEffect, useState } from 'react'

import { URLS } from '@/src/constants/urls'
import { usePersonalStore } from '@/src/stores/personal'
import { BasicDatePickerProps } from '@/src/types/components/forms/basic-datepicker'
import { IndexHooksProps } from '@/src/types/hooks/pages'
import { PersonalStoreState } from '@/src/types/stores/personal'

export default function useIndexHooks({ setQuery }: IndexHooksProps) {
	const _store = usePersonalStore()
	const form = useMemo(
		() => ({
			birthday: _store.birthday,
			sex: _store.sex,
			selectedEstimates: _store.selectedEstimates,
		}),
		[_store.birthday, _store.sex, _store.selectedEstimates]
	)
	const [visible, setVisible] = useState<boolean>(false)

	/* form */
	function useForm() {
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
			_store.setSex(event.target.value as PersonalStoreState['sex'])
		}

		const handleChangeBirthday = (value: BasicDatePickerProps['value']) => {
			if (!value) return
			_store.setBirthday(value.format('YYYY-MM-DD'))
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
			_store.setSelectedEstimates(selectedEstimates)
		}

		return {
			handleChangeSex,
			handleChangeBirthday,
			handleChangeEstimates,
		}
	}

	/* 見積もり保険 */
	function useEstimate() {
		const router = useRouter()

		const onStartEstimate = () => {
			console.log(form)
			router.push(URLS.estimate.estimate)
		}

		return {
			onStartEstimate,
		}
	}
	return {
		data: {
			form,
			visible,
		},
		useForm,
		useEstimate,
	}
}
