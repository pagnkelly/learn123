import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  /**
   * 用户输入的值
   */
  const value = ref('')

  /**
   * 设置value值
   *
   * @param name - new name to set
   */
  function setValue(newValue: string) {
    value.value = newValue
  }

  return {
    setValue,
    value,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
