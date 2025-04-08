import CommonDrawer from '@/src/components/common/draw'
import { EstimateDrawerProps } from '@/src/types/components/pages/estimate'

export default function EditEstimateDrawer(props: EstimateDrawerProps) {
	return (
		<CommonDrawer
			{...props}
			onClose={props.toggle}
			title={props.insurance?.title}
		>
			<p>見積もり編集</p>
			{props.insurance?.description}
		</CommonDrawer>
	)
}
