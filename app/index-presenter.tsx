import IndexEstimate from '@/src/components/pages/index/estimate/index-estimate'
import IndexForm from '@/src/components/pages/index/form/index-form'
import { IndexPresenterProps } from '@/src/types/components/pages'

import styles from './index.module.scss'

export default function IndexPresenter(props: IndexPresenterProps) {
	return (
		<article className={styles.wrapper}>
			<h1 className={styles.title}>保険料見積もり</h1>
			<p className={styles.description}>
				お客さまの生年月日・性別を 入力してください
			</p>
			<IndexForm {...props.formState} />
			{props.estimate.visible && (
				<IndexEstimate
					insuranceList={props.estimate.insuranceList}
					handleChangeEstimates={props.formState.handleChangeEstimates}
					selectedEstimates={props.formState.form.selectedEstimates}
					onStartEstimate={props.estimate.onStartEstimate}
				/>
			)}
		</article>
	)
}
