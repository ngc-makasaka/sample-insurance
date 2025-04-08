import qs from 'query-string'
import { useState } from 'react'
import useSWR from 'swr'

import { ENDPOINTS } from '@/src/constants/endpoints'
import {
	InsuranceListQuery,
	InsuranceLitsResponse,
} from '@/src/types/api/insurance'

export const useInsuranceList = (defaultQuery?: InsuranceListQuery) => {
	const [query, setQuery] = useState<InsuranceListQuery>({
		birthday: defaultQuery?.birthday ?? undefined,
		sex: defaultQuery?.sex ?? undefined,
	})
	const { data, error, isLoading, isValidating, mutate } =
		useSWR<InsuranceLitsResponse>(
			query.birthday && query.sex
				? qs.stringifyUrl({ url: ENDPOINTS.insurance.list, query })
				: null
		)
	return { data, error, isLoading, isValidating, mutate, query, setQuery }
}
