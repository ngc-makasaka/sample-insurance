import { FormControlLabel, Radio, FormControl, RadioGroup } from '@mui/material'

import { SexType } from '@/src/constants/enum'
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
				<FormControlLabel
					value={SexType.MALE}
					control={<Radio />}
					label="男性"
				/>
				<FormControlLabel
					value={SexType.FEMALE}
					control={<Radio />}
					label="女性"
				/>
			</RadioGroup>
		</FormControl>
	)
}
