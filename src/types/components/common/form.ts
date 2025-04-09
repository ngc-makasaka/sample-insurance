import { SexType } from '@/src/constants/enum'

export interface FormState {
	birthday: string | null
	sex: SexType | null
	selectedEstimates: string[]
}
