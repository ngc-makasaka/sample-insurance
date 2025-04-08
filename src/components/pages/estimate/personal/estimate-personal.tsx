import CommonButton from '@/src/components/common/button'
import { EstimatePersonalProps } from '@/src/types/components/pages/estimate'

import styles from './estimate-personal.module.scss'

export default function EstimatePersonal(props: EstimatePersonalProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.personal}>
				<dl className={styles['personal-item']}>
					<dt className={styles.label}>生年月日</dt>
					<dd>{props.birthday}</dd>
				</dl>
				<dl className={styles['personal-item']}>
					<dt className={styles.label}>契約年齢</dt>
					<dd>{props.age}</dd>
				</dl>
				<dl className={styles['personal-item']}>
					<dt className={styles.label}>性別</dt>
					<dd>{props.sex}</dd>
				</dl>
			</div>
			<CommonButton variant="text" label="変更する" />
		</div>
	)
}
