import { InsuranceLitsResponse } from '@/src/types/api/insurance'
import { BasicCheckboxProps } from '@/src/types/components/forms/basic-checkbox'
import { BasicDatePickerProps } from '@/src/types/components/forms/basic-datepicker'
import { SexRadioProps } from '@/src/types/components/forms/sex-radio'
import { PersonalStoreState } from '@/src/types/stores/personal'

export interface IndexPresenterProps {
	formState: {
		form: PersonalStoreState
		handleChangeSex: SexRadioProps['onChange']
		handleChangeBirthday: BasicDatePickerProps['onChange']
		handleChangeEstimates: BasicCheckboxProps['onChange']
	}
	estimate: {
		visible: boolean
		isLoading: boolean
		onStartEstimate: IndexEstimateProps['onStartEstimate']
		insuranceList?: InsuranceLitsResponse
	}
}

export interface IndexEstimateProps {
	selectedEstimates: PersonalStoreState['selectedEstimates']
	handleChangeEstimates: BasicCheckboxProps['onChange']
	onStartEstimate: () => void
	insuranceList?: InsuranceLitsResponse
	isLoading: boolean
}

export interface EstimateBlockProps {
	title: string
	subTitle: string
	description: string
	onChange: BasicCheckboxProps['onChange']
	name: BasicCheckboxProps['name']
	value: BasicCheckboxProps['value']
	selectedEstimates: PersonalStoreState['selectedEstimates']
}
