import { defineStore } from 'pinia'
import panelData from '../data/panel'
export const usePanelStore = defineStore('panel', () => {
  return {
    panelData,
  }
})
