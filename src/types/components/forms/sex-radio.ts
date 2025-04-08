import { PersonalStoreState } from '@/src/types/stores/personal'

export interface SexRadioProps {
	value: PersonalStoreState['sex']
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
