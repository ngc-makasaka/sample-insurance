import { Button } from '@mui/material'

import { CommonButtonProps } from '@/src/types/components/common/button'

export default function CommonButton(props: CommonButtonProps) {
	return (
		<Button variant="contained" {...props}>
			{props.label}
		</Button>
	)
}
