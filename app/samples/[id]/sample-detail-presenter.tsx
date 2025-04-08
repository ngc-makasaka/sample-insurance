import Link from 'next/link'

import { URLS } from '@/src/constants/urls'
import { SampleDetailPageProps } from '@/src/types/components/pages/sample'

export default function SampleDetailPresenter(props: SampleDetailPageProps) {
	if (props.swr.isLoading) {
		return <div>...loading</div>
	} else if (props.swr.error) {
		return <div>エラーが発生しました</div>
	} else {
		return (
			<div>
				<div>{props.swr.data?.message}</div>
				<Link href={URLS.samples.list}>
					<button>一覧に戻る</button>
				</Link>
			</div>
		)
	}
}
