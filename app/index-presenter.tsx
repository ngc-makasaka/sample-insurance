import IndexEstimate from '@/src/components/pages/index/client/estimate/IndexEstimateClient'
import IndexFormClient from '@/src/components/pages/index/client/form/IndexFormClient'
import { IndexPresenterProps } from '@/src/types/components/pages'

import styles from './index.module.scss'

export default function IndexPresenter(props: IndexPresenterProps) {
	return (
		<article className={styles.wrapper}>
			<h1 className={styles.title}>保険料見積もり</h1>
			<p className={styles.description}>
				お客さまの生年月日・性別を 入力してください
			</p>
			<IndexFormClient {...props.formState} />
			{props.estimate.visible && (
				<IndexEstimate
					isLoading={props.estimate.isLoading}
					insuranceList={props.estimate.insuranceList}
					handleChangeEstimates={props.formState.handleChangeEstimates}
					selectedEstimates={props.formState.form.selectedEstimates}
					onStartEstimate={props.estimate.onStartEstimate}
				/>
			)}
		</article>
	)
}
