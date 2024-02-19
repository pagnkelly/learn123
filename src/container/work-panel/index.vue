<script setup lang="ts">
import PanelItem from './item.vue'
import { usePanelStore } from '~/store/panel'

const userStore = usePanelStore()
</script>

<template>
  <div>
    <div font-bold text-24px>
      工作台
    </div>
    <div mt>
      <PanelItem
        v-for="p of userStore.panelData"
        :key="p.category"
        :category="p.category"
        :children="p.children"
      />
    </div>
  </div>
</template>
