'use client'

import IndexEstimateClient from '@/src/components/pages/index/client/estimate/IndexEstimateClient'
import IndexFormClient from '@/src/components/pages/index/client/form/IndexFormClient'
import { useInsuranceList } from '@/src/hooks/api/insurance'
import useIndexHooks from '@/src/hooks/pages'

export default function IndexPageClient() {
	const { data: insuranceList, isLoading, setQuery } = useInsuranceList()
	const { data, useForm, useEstimate } = useIndexHooks({ setQuery })
	const { handleChangeSex, handleChangeBirthday, handleChangeEstimates } =
		useForm()
	const { onStartEstimate } = useEstimate()

	return (
		<>
			<IndexFormClient
				form={data.form}
				handleChangeSex={handleChangeSex}
				handleChangeBirthday={handleChangeBirthday}
				handleChangeEstimates={handleChangeEstimates}
			/>
			{data.visible && (
				<IndexEstimateClient
					isLoading={isLoading}
					insuranceList={insuranceList}
					handleChangeEstimates={handleChangeEstimates}
					selectedEstimates={data.form.selectedEstimates}
					onStartEstimate={onStartEstimate}
				/>
			)}
		</>
	)
}
