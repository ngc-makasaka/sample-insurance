import { InsuranceLitsResponse } from '@/src/types/api/insurance'

export const insuranceListMock: InsuranceLitsResponse = {
	total: 2,
	results: [
		{
			id: 1,
			title: '定期死亡保険',
			subTitle: '万が一に備える',
			description:
				'あなたが亡くなったときや、高度障害状態になったときに、保険金が支払われる保険です。',
			price: 1800,
		},
		{
			id: 2,
			title: '終身医療保険',
			subTitle: '一生涯入院・手術に備える',
			description: '一生涯を保障し、病気やケガでの入院・手術に備える保険です。',
			price: 2000,
		},
		{
			id: 3,
			title: '定期医療保険',
			subTitle: '一定期間だけ入院・手術に備える',
			description:
				'一定期間を保障し、病気やケガでの入院・手術に備える保険です。',
			price: 3000,
		},
		{
			id: 4,
			title: 'がん保険',
			subTitle: 'がんに備える',
			description:
				'がんの診断から長引くがん治療、がん治療による収入減少など幅広く保障する保険です。',
			price: 1550,
		},
		{
			id: 5,
			title: '就業不能保険',
			subTitle: '就業不能状態に備える',
			description:
				'病気やケガで入院や療養をしていて長期間働けないときの収入減少に備えるための保険です。',
			price: 1600,
		},
	],
}
