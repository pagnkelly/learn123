<script setup lang="ts">
import { TabsContextKey } from './constant'
const props = defineProps<{
  name: string
  label: string
}>()

const pane = reactive({
  uid: instance.uid,
  slots,
  props,
  paneName,
  active,
  index,
  isClosable,
})
const tabsRoot: any = inject(TabsContextKey)

onMounted(() => {
  tabsRoot.registerPane(pane)
})
onUnmounted(() => {
  tabsRoot.unregisterPane(pane.uid)
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
