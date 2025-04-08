import { SampleListResponse } from '@/src/types/api/sample'

export const sampleListMock: SampleListResponse = {
	total: 2,
	results: [
		{
			id: 1,
			message: 'sample1',
		},
		{
			id: 2,
			message: 'sample2',
		},
	],
}
