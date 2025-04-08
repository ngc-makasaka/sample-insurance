import { create } from 'zustand'

import {
	PersonalStoreActions,
	PersonalStoreState,
} from '@/src/types/stores/personal'

export const usePersonalStore = create<
	PersonalStoreState & PersonalStoreActions
>((set) => ({
	// state
	birthday: null,
	sex: null,
	selectedEstimates: [],

	// actions
	setBirthday: (birthday) => set({ birthday }),
	setSex: (sex) => set({ sex }),
	setSelectedEstimates: (selectedEstimates) => set({ selectedEstimates }),
}))
