<script setup lang="ts">
import type { PaneProperties } from './constant'
const props = defineProps<{
  panes: PaneProperties[]
}>()
const emit = defineEmits(['onTabClick'])
const vm = getCurrentInstance()!

const handleTabClick = (val: string) => {
  emit('onTabClick', val)
}
watch(
  () => props.panes,
  () => vm.update(),
  { flush: 'post' },
)
</script>

<template>
  <div flex>
    <TabBar v-for="t of props.panes" :key="t.uid" :content="t.props.label" :name="t.props.name" :active="t.active" @on-tab-bar-click="handleTabClick" />
  </div>
</template>
