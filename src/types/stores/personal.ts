import { SexType } from '@/src/constants/enum'

export interface PersonalStoreState {
	birthday: string | null
	sex: SexType | null
	selectedEstimates: string[]
}

export interface PersonalStoreActions {
	setBirthday: (birthday: PersonalStoreState['birthday']) => void
	setSex: (sex: PersonalStoreState['sex']) => void
	setSelectedEstimates: (
		selectedEstimates: PersonalStoreState['selectedEstimates']
	) => void
}
