import { ChangeEvent } from 'react'

import {
	InsuranceLitsResponse,
	InsuranceResultResponse,
} from '@/src/types/api/insurance'
import { CommonDrawProps } from '@/src/types/components/common/draw'
import { BasicCheckboxProps } from '@/src/types/components/forms/basic-checkbox'
import { PersonalStoreState } from '@/src/types/stores/personal'

export interface EstimatePersonalClientProps {
	birthday: PersonalStoreState['birthday']
	sex: PersonalStoreState['sex']
}

export interface EstimateInsuranceClientProps {
	insurance?: InsuranceLitsResponse
	selectedInsurance: EstimateInsuranceUnitClientProps['selectedInsurance']
	handleChangeInsurance: EstimateInsuranceUnitClientProps['handleChangeInsurance']
	drawer: EstimateInsuranceUnitClientProps['drawer']
}

export interface EstimateInsuranceUnitClientProps
	extends InsuranceResultResponse {
	insurance?: InsuranceResultResponse
	value: BasicCheckboxProps['value']
	onChange: BasicCheckboxProps['onChange']
	name: BasicCheckboxProps['name']
	id: BasicCheckboxProps['id']
	selectedInsurance: string[]
	handleChangeInsurance: (event: ChangeEvent<HTMLInputElement>) => void
	drawer: {
		insuranceDescription: InsuranceDescriptionDrawerClientProps
		editEstimate: EstimateDrawerClientProps
	}
}

export interface EstimateInsurancePriceClientProps {
	price: number
}

export interface EstimateSelectedClientProps {
	selectedInsurance: EstimateInsuranceUnitClientProps['selectedInsurance']
	insurance?: InsuranceLitsResponse
	handleChangeInsurance: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface EstimateDrawerClientProps extends CommonDrawProps {
	insurance?: InsuranceResultResponse
	toggle: (id: string) => void
}

export interface InsuranceDescriptionDrawerClientProps extends CommonDrawProps {
	insurance?: InsuranceResultResponse
	toggle: (id: string) => void
}
