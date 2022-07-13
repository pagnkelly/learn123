<script setup lang="ts">
import Cell from './cell.vue'
const props = defineProps<{
  label: string
  name: string
  data: any
}>()
</script>

<template>
  <TabPane :label="props.label" :name="props.name" flex flex-col>
    <Cell
      v-for="(c, index) in props.data"
      :key="c.content"
      :content="c.content"
      :index="index + 1"
      :url="c.url"
    />
  </TabPane>
</template>
