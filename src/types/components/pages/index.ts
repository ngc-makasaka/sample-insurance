import { InsuranceLitsResponse } from '@/src/types/api/insurance'
import { BasicCheckboxProps } from '@/src/types/components/forms/basic-checkbox'
import { BasicDatePickerProps } from '@/src/types/components/forms/basic-datepicker'
import { SexRadioProps } from '@/src/types/components/forms/sex-radio'
import { PersonalStoreState } from '@/src/types/stores/personal'

export interface IndexFormClientProps {
	form: PersonalStoreState
	handleChangeSex: SexRadioProps['onChange']
	handleChangeBirthday: BasicDatePickerProps['onChange']
	handleChangeEstimates: BasicCheckboxProps['onChange']
}

export interface IndexEstimateClientProps {
	selectedEstimates: PersonalStoreState['selectedEstimates']
	handleChangeEstimates: BasicCheckboxProps['onChange']
	onStartEstimate: () => void
	insuranceList?: InsuranceLitsResponse
	isLoading: boolean
}

export interface EstimateBoxClientProps {
	title: string
	subTitle: string
	description: string
	onChange: BasicCheckboxProps['onChange']
	name: BasicCheckboxProps['name']
	value: BasicCheckboxProps['value']
	selectedEstimates: PersonalStoreState['selectedEstimates']
}
