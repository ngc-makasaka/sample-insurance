import { Skeleton } from '@mui/material'

import { EstimateInsuranceUnit } from '@/src/components/pages/estimate/insurance/parts/estimation-insurance-parts'
import { EstimateInsuranceProps } from '@/src/types/components/pages/estimate'

import styles from './estimate-insurance.module.scss'

const skeltonNum = 5

export default function EstimateInsurance(props: EstimateInsuranceProps) {
	return (
		<div className={styles['insurance-wrapper']}>
			{props.insurance ? (
				props.insurance.results.map((insurance) => (
					<EstimateInsuranceUnit
						key={insurance.id}
						{...insurance}
						value={insurance.id}
						onChange={props.handleChangeInsurance}
						name={insurance.id.toString()}
						selectedInsurance={props.selectedInsurance}
						handleChangeInsurance={props.handleChangeInsurance}
					/>
				))
			) : (
				<>
					{[...Array(skeltonNum)].map((_, index) => (
						<Skeleton
							key={index}
							variant="rectangular"
							width={680}
							height={100}
							sx={{ mb: index < skeltonNum - 1 ? 2 : 0 }}
						/>
					))}
				</>
			)}
		</div>
	)
}
