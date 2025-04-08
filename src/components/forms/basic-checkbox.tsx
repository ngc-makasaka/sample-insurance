import { Checkbox } from '@mui/material'

import { BasicCheckboxProps } from '@/src/types/components/forms/basic-checkbox'

export default function BasicCheckbox(props: BasicCheckboxProps) {
	return (
		<Checkbox
			id={props.id.toString()}
			checked={props.checked}
			onChange={props.onChange}
			name={props.name}
			value={props.value}
		/>
	)
}
