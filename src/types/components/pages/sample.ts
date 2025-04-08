import { SWRResponse } from 'swr'

import {
	SampleListResponse,
	SampleResultResponse,
} from '@/src/types/api/sample'

export interface SamplePageProps {
	swr: SWRResponse<SampleListResponse>
}

export interface SampleDetailPageProps {
	swr: SWRResponse<SampleResultResponse>
}
