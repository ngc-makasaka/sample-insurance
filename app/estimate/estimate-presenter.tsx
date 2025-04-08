'use client'

import EstimateInsurance from '@/src/components/pages/estimate/insurance/estimate-insurance'
import EstimatePersonal from '@/src/components/pages/estimate/personal/estimate-personal'
import EstimateSelected from '@/src/components/pages/estimate/selected/estimate-selected'
import { EstimatePresenterProps } from '@/src/types/components/pages/estimate'

import styles from './estimate.module.scss'

export default function EstimatePresenter(props: EstimatePresenterProps) {
	return (
		<article className={styles['estimate-wrapper']}>
			<h1 className={styles['estimate-title']}>見積もり結果</h1>
			<section className={styles['estimate-section']}>
				<div className={styles['estimate-section__content']}>
					<EstimatePersonal {...props.personal} />
					<EstimateInsurance
						insurance={props.insurance}
						selectedInsurance={props.selectedInsurance}
						handleChangeInsurance={props.handleChangeInsurance}
					/>
				</div>
				<div className={styles['estimate-section__selected']}>
					<EstimateSelected
						insurance={props.insurance}
						selectedInsurance={props.selectedInsurance}
						handleChangeInsurance={props.handleChangeInsurance}
					/>
				</div>
			</section>
		</article>
	)
}
