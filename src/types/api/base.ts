export type BaseListResponse<T> = {
	total: number
	results: T[]
}

export interface BaseResponse {
	id: number | string
}
