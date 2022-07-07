<script setup lang="ts">
const props = defineProps<{
  name: string
  docs: string
  icon: string
  github: string
}>()
</script>

<template>
  <div>
    <TabBar />
  </div>
</template>
