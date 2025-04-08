'use client'

import useSWR, { SWRResponse } from 'swr'

import { ENDPOINTS } from '@/src/constants/endpoints'
import { BaseResponse } from '@/src/types/api/base'
import {
	SampleListResponse,
	SampleResultResponse,
} from '@/src/types/api/sample'

export const useSampleList = (): SWRResponse<SampleListResponse> => {
	const { data, error, isLoading, isValidating, mutate } =
		useSWR<SampleListResponse>(ENDPOINTS.samples.list)
	return { data, error, isLoading, isValidating, mutate }
}

export const useSampleDetail = (
	id: BaseResponse['id']
): SWRResponse<SampleResultResponse> => {
	const { data, error, isLoading, isValidating, mutate } =
		useSWR<SampleResultResponse>(ENDPOINTS.samples.detail(id))
	return { data, error, isLoading, isValidating, mutate }
}
