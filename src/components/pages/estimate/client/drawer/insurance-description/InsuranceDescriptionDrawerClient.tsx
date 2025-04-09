import CommonDrawer from '@/src/components/common/draw'
import { InsuranceDescriptionDrawerClientProps } from '@/src/types/components/pages/estimate'

export default function InsuranceDescriptionDrawerClient(
	props: InsuranceDescriptionDrawerClientProps
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
