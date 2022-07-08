<script setup lang="ts">
import { TabsContextKey } from './constant'
const props = defineProps<{
  label: string
  name: string
}>()
const instance = getCurrentInstance()!
const tabsRoot = inject(TabsContextKey)
if (!tabsRoot)
  throw new Error('TabPane, usage: <Tabs><TabPane /></Tabs/>')
const index = ref<string>()
const active = computed(() => tabsRoot.currentName.value === (props.name ?? index.value))

const pane = reactive({
  uid: instance.uid,
  props,
  active,
})

onMounted(() => {
  tabsRoot.registerPane(pane)
})
onUnmounted(() => {
  tabsRoot.unregisterPane(pane.uid)
})
</script>

<template>
  <div v-show="active">
    <slot />
  </div>
</template>
