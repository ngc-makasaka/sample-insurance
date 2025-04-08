import { FormControlLabel, Radio, FormControl, RadioGroup } from '@mui/material'

import { SexRadioProps } from '@/src/types/components/forms/sex-radio'

export const SexRadio = (props: SexRadioProps) => {
	return (
		<FormControl>
			<RadioGroup
				name="sex"
				value={props.value}
				onChange={props.onChange}
				className="flex flex-row!"
			>
				<FormControlLabel value="male" control={<Radio />} label="男性" />
				<FormControlLabel value="female" control={<Radio />} label="女性" />
			</RadioGroup>
		</FormControl>
	)
}
