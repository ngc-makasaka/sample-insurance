import { ChangeEvent } from 'react'

export interface BasicCheckboxProps {
	id: string | number
	value: string | number
	onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
	label?: string
	name: string
	checked?: boolean
}
