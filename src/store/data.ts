import { acceptHMRUpdate, defineStore } from 'pinia'
import overuse from '../data/overuse'

export const useDataStore = defineStore('data', () => {
  return {
    overuse,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot))
