import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

import CommonButton from '@/src/components/common/button'
import { FORMAT } from '@/src/constants/config'
import { SexType } from '@/src/constants/enum'
import { URLS } from '@/src/constants/urls'
import { EstimatePersonalClientProps } from '@/src/types/components/pages/estimate'

import styles from './EstimatePersonalClient.module.scss'

export default function EstimatePersonalClient(
	props: EstimatePersonalClientProps
) {
	const router = useRouter()

	const age = useMemo(() => {
		const birthday = dayjs(props.birthday)
		const today = dayjs()
		const age = today.diff(birthday, 'year')
		return age
	}, [props.birthday])

	const sex = useMemo(() => {
		return props.sex === SexType.MALE ? '男性' : '女性'
	}, [props.sex])

	const toIndex = () => {
		router.push(URLS.home)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.personal}>
				<dl className={styles['personal-item']}>
					<dt className={styles.label}>生年月日</dt>
					<dd>{dayjs(props.birthday).format(FORMAT.DATE)}</dd>
				</dl>
				<dl className={styles['personal-item']}>
					<dt className={styles.label}>契約年齢</dt>
					<dd>{age}</dd>
				</dl>
				<dl className={styles['personal-item']}>
					<dt className={styles.label}>性別</dt>
					<dd>{sex}</dd>
				</dl>
			</div>
			<CommonButton variant="text" label="変更する" onClick={toIndex} />
		</div>
	)
}
