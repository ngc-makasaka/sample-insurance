/**
 * 性別
 */
export const SexType = {
	MALE: 'male',
	FEMALE: 'female',
} as const
export type SexType = (typeof SexType)[keyof typeof SexType]
