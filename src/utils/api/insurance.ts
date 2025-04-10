import queryString from 'query-string'

import { ENDPOINTS } from '@/src/constants/endpoints'
import { localAxios } from '@/src/libs/axios'
import { BaseResponse } from '@/src/types/api/base'
import {
	InsuranceListQuery,
	InsuranceLitsResponse,
	InsuranceResultResponse,
} from '@/src/types/api/insurance'

export const insuranceApis = {
	fetch: (query?: InsuranceListQuery) => {
		const url = queryString.stringifyUrl({
			url: ENDPOINTS.insurance.list,
			query,
		})
		const res = localAxios.get<InsuranceLitsResponse>(url)
		return res
	},

	find: (id: BaseResponse['id']) => {
		const url = ENDPOINTS.insurance.detail(id)
		const res = localAxios.get<InsuranceResultResponse>(url)
		return res
	},

	post: () => {},

	put: () => {},

	delete: () => {},
}
