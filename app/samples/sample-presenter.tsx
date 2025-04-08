import cx from 'classnames'
import Link from 'next/link'

import { URLS } from '@/src/constants/urls'
import { SamplePageProps } from '@/src/types/components/pages/sample'

import style from './sample.module.scss'

export default function SamplePresenter(props: SamplePageProps) {
	if (props.swr.isLoading) {
		return <div>...loading</div>
	} else if (props.swr.error) {
		return <div>エラーが発生しました</div>
	} else {
		return (
			<div>
				{props.swr.data?.results.map((result) => (
					<Link href={URLS.samples.detail(result.id)} key={result.id}>
						<p className={cx(style['test'])} key={result.id}>
							{result.message}
						</p>
					</Link>
				))}
				<Link href="/">
					<button>戻る</button>
				</Link>
			</div>
		)
	}
}
