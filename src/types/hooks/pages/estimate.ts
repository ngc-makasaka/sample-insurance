import { Dispatch, SetStateAction } from 'react'

import {
	InsuranceLitsResponse,
	InsuranceListQuery,
} from '@/src/types/api/insurance'

export interface EstimateHooksProps {
	data?: InsuranceLitsResponse
	setQuery: Dispatch<SetStateAction<InsuranceListQuery>>
}
