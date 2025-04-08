export interface PersonalStoreState {
	birthday: string | null
	sex: 'male' | 'female' | null
	selectedEstimates: string[]
}

export interface PersonalStoreActions {
	setBirthday: (birthday: PersonalStoreState['birthday']) => void
	setSex: (sex: PersonalStoreState['sex']) => void
	setSelectedEstimates: (
		selectedEstimates: PersonalStoreState['selectedEstimates']
	) => void
}
