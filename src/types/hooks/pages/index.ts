import { Dispatch, SetStateAction } from 'react'

import { InsuranceListQuery } from '@/src/types/api/insurance'

export interface IndexHooksProps {
	setQuery: Dispatch<SetStateAction<InsuranceListQuery>>
}
