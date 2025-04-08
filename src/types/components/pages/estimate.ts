import { ChangeEvent } from 'react'

import {
	InsuranceLitsResponse,
	InsuranceResultResponse,
} from '@/src/types/api/insurance'
import { BasicCheckboxProps } from '@/src/types/components/forms/basic-checkbox'

export interface EstimatePresenterProps {
	personal: EstimatePersonalProps
	insurance?: EstimateInsuranceProps['insurance']
	selectedInsurance: EstimateInsuranceProps['selectedInsurance']
	handleChangeInsurance: EstimateInsuranceProps['handleChangeInsurance']
}

export interface EstimatePersonalProps {
	birthday: string
	age: number
	sex: string
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
	selectedInsurance: number[]
	handleChangeInsurance: (
		event: ChangeEvent<HTMLInputElement>,
		checked: boolean
	) => void
}

export interface EstimateInsurancePriceProps {
	price: number
}
