import { ChangeEvent } from 'react'

import {
	InsuranceLitsResponse,
	InsuranceResultResponse,
} from '@/src/types/api/insurance'
import { CommonDrawProps } from '@/src/types/components/common/draw'
import { BasicCheckboxProps } from '@/src/types/components/forms/basic-checkbox'
import { PersonalStoreState } from '@/src/types/stores/personal'

export interface EstimatePresenterProps {
	personal: EstimatePersonalProps
	insurance?: EstimateInsuranceProps['insurance']
	selectedInsurance: EstimateInsuranceProps['selectedInsurance']
	handleChangeInsurance: EstimateInsuranceProps['handleChangeInsurance']
	editEstimateDrawer: EstimateDrawerProps
	insuranceDescriptionDrawer: InsuranceDescriptionDrawerProps
}

export interface EstimatePersonalProps {
	birthday: PersonalStoreState['birthday']
	sex: PersonalStoreState['sex']
}

export interface EstimateInsuranceProps {
	insurance?: InsuranceLitsResponse
	selectedInsurance: EstimateInsuranceUnitProps['selectedInsurance']
	handleChangeInsurance: EstimateInsuranceUnitProps['handleChangeInsurance']
	drawer: EstimateInsuranceUnitProps['drawer']
}

export interface EstimateInsuranceUnitProps extends InsuranceResultResponse {
	insurance?: InsuranceResultResponse
	value: BasicCheckboxProps['value']
	onChange: BasicCheckboxProps['onChange']
	name: BasicCheckboxProps['name']
	id: BasicCheckboxProps['id']
	selectedInsurance: string[]
	handleChangeInsurance: (event: ChangeEvent<HTMLInputElement>) => void
	drawer: {
		insuranceDescription: InsuranceDescriptionDrawerProps
		editEstimate: EstimateDrawerProps
	}
}

export interface EstimateInsurancePriceProps {
	price: number
}

export interface EstimateSelectedProps {
	selectedInsurance: EstimateInsuranceUnitProps['selectedInsurance']
	insurance?: InsuranceLitsResponse
	handleChangeInsurance: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface EstimateDrawerProps extends CommonDrawProps {
	insurance?: InsuranceResultResponse
	toggle: (id: string) => void
}

export interface InsuranceDescriptionDrawerProps extends CommonDrawProps {
	insurance?: InsuranceResultResponse
	toggle: (id: string) => void
}
