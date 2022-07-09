import { acceptHMRUpdate, defineStore } from 'pinia'
import overuse from '../data/overuse'
import changyong from '../data/left/changyong'
export const useDataStore = defineStore('data', () => {
  return {
    overuse,
  }
})

export const useLeftDataStore = defineStore('left', () => {
  return {
    renderData: [
      { label: '常用', name: 'changyong', data: changyong },
    ],
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot))
