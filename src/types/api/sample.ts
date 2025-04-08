import { BaseListResponse, BaseResponse } from '@/src/types/api/base'

export type SampleListResponse = BaseListResponse<SampleResultResponse>

export interface SampleResultResponse extends BaseResponse {
	message: string
}
