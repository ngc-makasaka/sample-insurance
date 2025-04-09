import CommonDrawer from '@/src/components/common/draw'
import { EstimateDrawerClientProps } from '@/src/types/components/pages/estimate'

export default function EditEstimateDrawerClient(
	props: EstimateDrawerClientProps
) {
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
