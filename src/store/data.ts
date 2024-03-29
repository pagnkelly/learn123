import { acceptHMRUpdate, defineStore } from 'pinia'
import overuse from '../data/overuse'
import left from '../data/left'
import right from '../data/right'
import { useSearchStore } from './search'
export const useDataStore = defineStore('data', () => {
  const searchValue = ref('')
  const us = useSearchStore()
  watch(us, (v) => {
    searchValue.value = v.value
  })
  const mainData = computed(() => overuse.filter(item => item.name.includes(searchValue.value)))
  return {
    overuse,
    mainData,
  }
})

export const useLeftDataStore = defineStore('left', () => {
  return {
    renderData: left,
  }
})

export const useRightDataStore = defineStore('right', () => {
  return {
    renderData: right,
  }
})

export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    searchValue: '',
  }),
  getters: {
    data: (state) => {
      return overuse.filter(item => item.name.includes(state.searchValue))
    },
  },
  actions: {
    setValue(value: string) {
      this.searchValue = value
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot))
