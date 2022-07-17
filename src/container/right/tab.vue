<script setup lang="ts">
const props = defineProps<{
  label: string
  name: string
  data: any
}>()
</script>

<template>
  <TabPane :label="props.label" :name="props.name" flex flex-col>
    <Button
      v-for="c in props.data"
      :key="c.name"
      :name="c.name"
      :icon="c.icon"
      :docs="c.docs"
      :github="c.github"
    />
  </TabPane>
</template>
