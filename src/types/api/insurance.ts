import { BaseListResponse, BaseResponse } from '@/src/types/api/base'

export type InsuranceListQuery = {
	birthday?: string
	sex?: string
}

export type InsuranceLitsResponse = BaseListResponse<InsuranceResultResponse>

export interface InsuranceResultResponse extends BaseResponse {
	title: string
	subTitle: string
	description: string
	price: number
}
