import { InsuranceLitsResponse } from '@/src/types/api/insurance'
import { BasicCheckboxProps } from '@/src/types/components/forms/basic-checkbox'
import { BasicDatePickerProps } from '@/src/types/components/forms/basic-datepicker'
import { SexRadioProps } from '@/src/types/components/forms/sex-radio'

export interface Form {
	birthday: string | null
	sex: 'male' | 'female' | null
	selectedEstimates: string[]
}

export interface IndexPresenterProps {
	formState: {
		form: Form
		handleChangeSex: SexRadioProps['onChange']
		handleChangeBirthday: BasicDatePickerProps['onChange']
		handleChangeEstimates: BasicCheckboxProps['onChange']
	}
	estimate: {
		visible: boolean
		onStartEstimate: IndexEstimateProps['onStartEstimate']
		insuranceList?: InsuranceLitsResponse
	}
}

export interface IndexEstimateProps {
	selectedEstimates: Form['selectedEstimates']
	handleChangeEstimates: BasicCheckboxProps['onChange']
	onStartEstimate: () => void
	insuranceList?: InsuranceLitsResponse
}

export interface EstimateBlockProps {
	title: string
	subTitle: string
	description: string
	onChange: BasicCheckboxProps['onChange']
	name: BasicCheckboxProps['name']
	value: BasicCheckboxProps['value']
	selectedEstimates: Form['selectedEstimates']
}
