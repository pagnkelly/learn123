<script setup lang="ts">
import Item from './item.vue'
const props = defineProps<{
}>()
const renderdata = [1, 2, 3, 4, 5, 6, 7]
</script>

<template>
  <div v-for="o in renderdata" :key="o" mx-4 py-4 border-gray-2 border-dashed border-b-2>
    <Item />
  </div>
</template>
