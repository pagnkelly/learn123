<script setup lang="ts">
import { TabsContextKey } from './constant'
const props = defineProps<{
  name: string
  docs: string
  icon: string
  github: string
}>()
const panes = reactive<any>({})
const registerPane = (pane: any) => (panes[pane.uid] = pane)
const unregisterPane = (uid: number) => delete panes[uid]

provide(TabsContextKey, {
  registerPane,
  unregisterPane,
})
</script>

<template>
  <div>
    <TabNav />
    <slot />
  </div>
</template>
