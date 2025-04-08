import { BaseResponse } from '@/src/types/api/base'

export const URLS = {
	samples: {
		list: '/samples',
		detail: (id: BaseResponse['id']) => `/samples/${id}`,
	},
	home: '/',
	estimate: {
		estimate: '/estimate',
	},
}
