import CommonDrawer from '@/src/components/common/draw'
import { InsuranceDescriptionDrawerProps } from '@/src/types/components/pages/estimate'

export default function InsuranceDescriptionDrawer(
	props: InsuranceDescriptionDrawerProps
) {
	return (
		<CommonDrawer
			{...props}
			onClose={props.toggle}
			title={props.insurance?.title}
		>
			<p>特徴・メリット</p>
			{props.insurance?.description}
		</CommonDrawer>
	)
}
