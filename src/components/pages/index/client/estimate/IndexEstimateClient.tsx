import { Skeleton } from '@mui/material'

import CommonButton from '@/src/components/common/button'
import { EstimateBox } from '@/src/components/pages/index/client/estimate/parts/IndexEstimateClientParts'
import { IndexEstimateProps } from '@/src/types/components/pages'

import styles from './IndexEstimateClient.module.scss'

export default function IndexEstimateClient(props: IndexEstimateProps) {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>見積もりたい保険商品を選択してください</h2>
			{props.insuranceList ? (
				<div className={styles.estimates}>
					{props.insuranceList.results.map((insurance) => (
						<EstimateBox
							key={insurance.id}
							title={insurance.title}
							subTitle={insurance.subTitle}
							description={insurance.description}
							value={insurance.id}
							name={insurance.id.toString()}
							onChange={props.handleChangeEstimates}
							selectedEstimates={props.selectedEstimates}
						/>
					))}
				</div>
			) : (
				<Skeleton variant="rectangular" width={'100%'} height={100} />
			)}
			<CommonButton
				label="保険料見積もりスタート"
				size="large"
				disabled={props.isLoading || !props.selectedEstimates.length}
				onClick={props.onStartEstimate}
			/>
		</section>
	)
}
