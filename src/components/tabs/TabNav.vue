<script setup lang="ts">
import type { PaneProperties } from './constant'
const props = defineProps<{
  panes: PaneProperties[]
  onTabClick: () => {}
}>()
console.log(props, props.onTabClick, 'props')
const vm = getCurrentInstance()!
watch(
  () => props.panes,
  () => vm.update(),
  { flush: 'post' },
)
</script>

<template>
  <div flex>
    <TabBar v-for="t of props.panes" :key="t.uid" :content="t.props.label" :active="t.active" />
  </div>
</template>
