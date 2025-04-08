'use client'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import 'dayjs/locale/ja'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { FORMAT } from '@/src/constants/config'
import { BasicDatePickerProps } from '@/src/types/components/forms/basic-datepicker'

export const BasicDatePicker = (props: BasicDatePickerProps) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
			<DemoContainer components={['DatePicker']}>
				<DatePicker
					label={props.label}
					format={FORMAT.DATE}
					value={props.value}
					onChange={props.onChange}
					className="w-full!"
				/>
			</DemoContainer>
		</LocalizationProvider>
	)
}
