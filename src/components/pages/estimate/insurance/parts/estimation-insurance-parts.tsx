import CommonButton from '@/src/components/common/button'
import BasicCheckbox from '@/src/components/forms/basic-checkbox'
import {
	EstimateInsurancePriceProps,
	EstimateInsuranceUnitProps,
} from '@/src/types/components/pages/estimate'

import styles from './estimation-insurance-parts.module.scss'

const EstimateInsuranceUnit = (props: EstimateInsuranceUnitProps) => {
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
					<CommonButton label="商品特徴・メリット" variant="outlined" />
				</div>
				<div className={styles['unit-content']}>
					<p className={styles['unit-content__description']}>
						{props.description}
					</p>
					<EstimateInsurancePrice price={props.price} />
					<slot />
					<CommonButton label="見積もりを編集する" variant="outlined" />
				</div>
			</label>
		</section>
	)
}

const EstimateInsurancePrice = (props: EstimateInsurancePriceProps) => {
	const price = props.price.toLocaleString()
	return (
		<div className={styles['price']}>
			<p>毎月の保険料</p>
			<p className={styles['price__value']}>{price}</p>
		</div>
	)
}

export { EstimateInsuranceUnit, EstimateInsurancePrice }
