// https://swr.vercel.app/docs/with-nextjs
'use client'

import { SWRConfig } from 'swr'

import { swrOptions } from '@/src/libs/swr'

export const SwrProvider = ({ children }: { children: React.ReactNode }) => {
	return <SWRConfig value={swrOptions}>{children}</SWRConfig>
}
