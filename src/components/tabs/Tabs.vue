<script setup lang="ts">
import type { PaneProperties } from './constant'
import { TabsContextKey } from './constant'
const props = defineProps<{
  modelValue: string
  active: string
}>()
const panes = reactive<any>({})
const registerPane = (pane: PaneProperties) => (panes[pane.uid] = pane)
const unregisterPane = (uid: number) => delete panes[uid]
const currentName = ref(props.modelValue ?? props.active ?? '0')
provide(TabsContextKey, {
  props,
  currentName,
  registerPane,
  unregisterPane,
})

const handleNavClick = (val: string) => {
  currentName.value = val
}
</script>

<template>
  <div>
    <TabNav
      :panes="Object.values(panes)"
      @on-tab-click="handleNavClick"
    />
    <slot />
  </div>
</template>
