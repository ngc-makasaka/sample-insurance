import { ChangeEvent } from 'react'

import {
	InsuranceLitsResponse,
	InsuranceResultResponse,
} from '@/src/types/api/insurance'
import { BasicCheckboxProps } from '@/src/types/components/forms/basic-checkbox'
import { PersonalStoreState } from '@/src/types/stores/personal'

export interface EstimatePresenterProps {
	personal: EstimatePersonalProps
	insurance?: EstimateInsuranceProps['insurance']
	selectedInsurance: EstimateInsuranceProps['selectedInsurance']
	handleChangeInsurance: EstimateInsuranceProps['handleChangeInsurance']
}

export interface EstimatePersonalProps {
	birthday: PersonalStoreState['birthday']
	sex: PersonalStoreState['sex']
}

export interface EstimateInsuranceProps {
	insurance?: InsuranceLitsResponse
	selectedInsurance: EstimateInsuranceUnitProps['selectedInsurance']
	handleChangeInsurance: EstimateInsuranceUnitProps['handleChangeInsurance']
}

export interface EstimateInsuranceUnitProps extends InsuranceResultResponse {
	insurance?: InsuranceResultResponse
	value: BasicCheckboxProps['value']
	onChange: BasicCheckboxProps['onChange']
	name: BasicCheckboxProps['name']
	id: BasicCheckboxProps['id']
	selectedInsurance: string[]
	handleChangeInsurance: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface EstimateInsurancePriceProps {
	price: number
}

export interface EstimateSelectedProps {
	selectedInsurance: EstimateInsuranceUnitProps['selectedInsurance']
	insurance?: InsuranceLitsResponse
	handleChangeInsurance: (event: ChangeEvent<HTMLInputElement>) => void
}
