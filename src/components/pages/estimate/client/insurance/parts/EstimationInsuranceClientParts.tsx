import CommonButton from '@/src/components/common/button'
import BasicCheckbox from '@/src/components/forms/basic-checkbox'
import {
	EstimateInsurancePriceClientProps,
	EstimateInsuranceUnitClientProps,
} from '@/src/types/components/pages/estimate'

import styles from './EstimationInsuranceClientParts.module.scss'

const EstimateInsuranceUnitClient = (
	props: EstimateInsuranceUnitClientProps
) => {
	return (
		<section className={styles['unit-wrapper']}>
			<label htmlFor={props.id.toString()}>
				<div className={styles['unit-header']}>
					<div className={styles['unit-header__checkbox']}>
						<BasicCheckbox
							id={props.id}
							value={props.value}
							onChange={props.onChange}
							name={props.name}
							checked={props.selectedInsurance.includes(props.id.toString())}
						/>
						<h3>{props.title}</h3>
					</div>
					<CommonButton
						label="商品特徴・メリット"
						variant="outlined"
						onClick={() =>
							props.drawer.insuranceDescription.toggle(props.id.toString())
						}
					/>
				</div>
				<div className={styles['unit-content']}>
					<p className={styles['unit-content__description']}>
						{props.description}
					</p>
					<EstimateInsurancePriceClient price={props.price} />
					<slot />
					<CommonButton
						label="見積もりを編集する"
						variant="outlined"
						onClick={() =>
							props.drawer.editEstimate.toggle(props.id.toString())
						}
					/>
				</div>
			</label>
		</section>
	)
}

const EstimateInsurancePriceClient = (
	props: EstimateInsurancePriceClientProps
) => {
	const price = props.price.toLocaleString()
	return (
		<div className={styles['price']}>
			<p>毎月の保険料</p>
			<p className={styles['price__value']}>{price}</p>
		</div>
	)
}

export { EstimateInsuranceUnitClient, EstimateInsurancePriceClient }
