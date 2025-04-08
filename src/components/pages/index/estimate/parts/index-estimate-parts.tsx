import BasicCheckbox from '@/src/components/forms/basic-checkbox'
import { EstimateBlockProps } from '@/src/types/components/pages'

import styles from './index-estimate-parts.module.scss'

const EstimateBox = (props: EstimateBlockProps) => {
	const checked = props.selectedEstimates.includes(props.value.toString())

	return (
		<label className={styles['estimate-block']} htmlFor={props.name}>
			<div className={styles['estimate-block__header']}>
				<BasicCheckbox
					id={props.name}
					value={props.value}
					onChange={props.onChange}
					name={props.name}
					checked={checked}
				/>
				<div>
					<h4 className={styles['estimate-block__sub-title']}>
						{props.subTitle}
					</h4>
					<h3 className={styles['estimate-block__title']}>{props.title}</h3>
				</div>
			</div>
			<p>{props.description}</p>
		</label>
	)
}

export { EstimateBox }
