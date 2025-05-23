import dayjs from 'dayjs'

import { BasicDatePicker } from '@/src/components/forms/basic-datepicker'
import { SexRadio } from '@/src/components/forms/sex-radio'
import { IndexFormClientProps } from '@/src/types/components/pages'

import styles from './IndexFormClient.module.scss'

export default function IndexFormClient(props: IndexFormClientProps) {
	return (
		<form className={styles.form}>
			<dl>
				<dt>生年月日</dt>
				<dd>
					<BasicDatePicker
						value={props.form.birthday ? dayjs(props.form.birthday) : null}
						onChange={props.handleChangeBirthday}
					/>
				</dd>
			</dl>
			<dl>
				<dt>性別</dt>
				<dd>
					<SexRadio value={props.form.sex} onChange={props.handleChangeSex} />
				</dd>
			</dl>
		</form>
	)
}
