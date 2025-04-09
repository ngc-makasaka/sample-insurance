import { Skeleton } from '@mui/material'

import { EstimateInsuranceUnitClient } from '@/src/components/pages/estimate/client/insurance/parts/EstimationInsuranceClientParts'
import { EstimateInsuranceClientProps } from '@/src/types/components/pages/estimate'

import styles from './EstimateInsuranceClient.module.scss'

const skeltonNum = 5

export default function EstimateInsuranceClient(
	props: EstimateInsuranceClientProps
) {
	return (
		<div className={styles['insurance-wrapper']}>
			{props.insurance ? (
				props.insurance.results.map((insurance) => (
					<EstimateInsuranceUnitClient
						key={insurance.id}
						{...insurance}
						value={insurance.id}
						onChange={props.handleChangeInsurance}
						name={insurance.id.toString()}
						selectedInsurance={props.selectedInsurance}
						handleChangeInsurance={props.handleChangeInsurance}
						drawer={props.drawer}
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
