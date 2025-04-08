import { Skeleton } from '@mui/material'
import { useMemo } from 'react'

import BasicCheckbox from '@/src/components/forms/basic-checkbox'
import { EstimateSelectedProps } from '@/src/types/components/pages/estimate'

import styles from './estimate-selected.module.scss'

const skeltonNum = 5

export default function EstimateSelected(props: EstimateSelectedProps) {
	// 選択中の保険プランの保険料合計
	const totalPrice = useMemo(() => {
		const selectedInsurance = props.insurance?.results
			.filter((insurance) =>
				props.selectedInsurance.includes(insurance.id.toString())
			)
			.reduce((acc, insurance) => acc + insurance.price, 0)
		return selectedInsurance ?? 0
	}, [props.insurance, props.selectedInsurance])

	return (
		<section className={styles['selected']}>
			<h3 className={styles['selected-title']}>選択中の保険プラン</h3>
			<div className={styles['selected-list']}>
				{props.insurance ? (
					props.insurance?.results.map((insurance) => {
						const price = insurance.price.toLocaleString()
						return (
							<div key={insurance.id} className={styles['selected-list__item']}>
								<label className={styles['selected-list__item-checkbox']}>
									<BasicCheckbox
										checked={props.selectedInsurance.includes(
											insurance.id.toString()
										)}
										onChange={props.handleChangeInsurance}
										name={insurance.id.toString()}
										id={insurance.id.toString()}
										value={insurance.id}
									/>
									<h4>{insurance.title}</h4>
								</label>
								<p className={styles['selected-list__item-price']}>{price}</p>
							</div>
						)
					})
				) : (
					<>
						{[...Array(skeltonNum)].map((_, index) => (
							<Skeleton
								key={index}
								variant="rectangular"
								width={245}
								height={20}
								sx={{ mb: index < skeltonNum - 1 ? 2 : 0 }}
							/>
						))}
					</>
				)}
			</div>
			<div className={styles['selected-list__total']}>
				<p className="text-center">
					毎月の
					<br />
					保険料合計
				</p>
				<p className={styles['selected-list__total-price']}>
					{props.insurance ? (
						totalPrice.toLocaleString()
					) : (
						<Skeleton variant="rectangular" width={80} height={40} />
					)}
				</p>
			</div>
		</section>
	)
}
