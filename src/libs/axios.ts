import axios from 'axios'

import { ERROR_CODES } from '@/src/constants/config'
import { MESSAGES } from '@/src/constants/message'

export const localAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_LOCAL_API_URL,
})

localAxios.interceptors.response.use(
	(response) => response.data,
	(error) => {
		switch (error.status) {
			case ERROR_CODES.UNAUTHORIZED:
				console.error(MESSAGES.UNAUTHORIZED)
				break
			case ERROR_CODES.FORBIDDEN:
				console.error(MESSAGES.FORBIDDEN)
				break
			case ERROR_CODES.NOT_FOUND:
				console.error(MESSAGES.NOT_FOUND)
				break
			case ERROR_CODES.INTERNAL_SERVER_ERROR:
				console.error(MESSAGES.INTERNAL_SERVER_ERROR)
				break
		}
		return Promise.reject(error)
	}
)

export const serverAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
	},
})
