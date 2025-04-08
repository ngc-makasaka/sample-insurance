'use client'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import 'dayjs/locale/ja'

import { BasicDatePickerProps } from '@/src/types/components/forms/basic-datepicker'

export const BasicDatePicker = (props: BasicDatePickerProps) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
			<DemoContainer components={['DatePicker']}>
				<DatePicker
					label={props.label}
					format="YYYY年MM月DD日"
					value={props.value}
					onChange={props.onChange}
					className="w-full!"
				/>
			</DemoContainer>
		</LocalizationProvider>
	)
}
