import { SWRConfiguration } from 'swr'

import { localAxios } from '@/src/libs/axios'

const fetcher = async <T>(url: string): Promise<T> => {
	try {
		const response = (await localAxios.get<T>(url)) as T
		return response
	} catch (error) {
		console.error(error)
		throw error
	}
}

// https://swr.vercel.app/ja/docs/api#options
export const swrOptions: SWRConfiguration = {
	revalidateOnFocus: false,
	fetcher,
}
