'use client'

import { redirect } from 'next/navigation'

import EditEstimateDrawerClient from '@/src/components/pages/estimate/client/drawer/edit-estimate/EditEstimateDrawerClient'
import InsuranceDescriptionDrawerClient from '@/src/components/pages/estimate/client/drawer/insurance-description/InsuranceDescriptionDrawerClient'
import EstimateInsuranceClient from '@/src/components/pages/estimate/client/insurance/EstimateInsuranceClient'
import EstimatePersonalClient from '@/src/components/pages/estimate/client/personal/EstimatePersonalClient'
import EstimateSelectedClient from '@/src/components/pages/estimate/client/selected/EstimateSelectedClient'
import { useInsuranceList } from '@/src/hooks/api/insurance'
import useEstimateHooks from '@/src/hooks/pages/estimate'

import styles from './EstimatePageClient.module.scss'

export default function EstimatePageClient() {
	const { data, setQuery } = useInsuranceList()
	const {
		store,
		useInsurance,
		useEditEstimateDrawer,
		useInsuranceDescriptionDrawer,
	} = useEstimateHooks({ data, setQuery })
	const { handleChangeInsurance, personal } = useInsurance()
	const { editEstimate, openEditEstimateDrawer, toggleEditEstimateDrawer } =
		useEditEstimateDrawer()
	const {
		descriptionEstimate,
		openInsuranceDescriptionDrawer,
		toggleInsuranceDescriptionDrawer,
	} = useInsuranceDescriptionDrawer()

	// ユーザー情報がない場合はリダイレクト
	if (!store.birthday || !store.sex) {
		return redirect('/')
	}

	return (
		<article className={styles['estimate-wrapper']}>
			<h1 className={styles['estimate-title']}>見積もり結果</h1>
			<section className={styles['estimate-section']}>
				<div className={styles['estimate-section__content']}>
					<EstimatePersonalClient {...personal} />
					<EstimateInsuranceClient
						insurance={data}
						selectedInsurance={personal.selectedEstimates}
						handleChangeInsurance={handleChangeInsurance}
						drawer={{
							editEstimate: {
								insurance: editEstimate,
								open: openEditEstimateDrawer,
								toggle: toggleEditEstimateDrawer,
							},
							insuranceDescription: {
								insurance: descriptionEstimate,
								open: openInsuranceDescriptionDrawer,
								toggle: toggleInsuranceDescriptionDrawer,
							},
						}}
					/>
				</div>
				<div className={styles['estimate-section__selected']}>
					<EstimateSelectedClient
						insurance={data}
						selectedInsurance={personal.selectedEstimates}
						handleChangeInsurance={handleChangeInsurance}
					/>
				</div>
			</section>
			<EditEstimateDrawerClient
				insurance={editEstimate}
				open={openEditEstimateDrawer}
				toggle={toggleEditEstimateDrawer}
			/>
			<InsuranceDescriptionDrawerClient
				insurance={descriptionEstimate}
				open={openInsuranceDescriptionDrawer}
				toggle={toggleInsuranceDescriptionDrawer}
			/>
		</article>
	)
}
