import { Dayjs } from 'dayjs'

export type BasicDatePickerProps = {
	label?: string
	value: Dayjs | null
	onChange: (value: Dayjs | null) => void
}
