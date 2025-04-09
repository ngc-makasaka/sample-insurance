import IndexPageClient from '@/src/components/pages/index/client/IndexPageClient'

export default function IndexPageServer() {
	return (
		<article className="flex flex-col items-center justify-center h-screen gap-4">
			<div className="flex flex-col items-center justify-center gap-2">
				<h1 className="text-2xl font-bold">保険料見積もり</h1>
				<p className="text-sm">お客さまの生年月日・性別を 入力してください</p>
			</div>
			<IndexPageClient />
		</article>
	)
}
