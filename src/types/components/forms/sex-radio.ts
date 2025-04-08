import { Form } from '@/src/types/components/pages'

export interface SexRadioProps {
	value: Form['sex']
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
