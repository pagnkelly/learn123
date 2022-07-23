<script setup lang="ts">
import Waterfall from './waterfall/index.vue'
const props = defineProps<{
  label: string
  name: string
  data: any
}>()
</script>

<template>
  <TabPane :label="props.label" :name="props.name" flex flex-col>
    <div flex flex-wrap>
      <Button
        v-for="c in props.data"
        :key="c.name"
        :name="c.name"
        :icon="c.icon"
        :docs="c.docs"
        :github="c.github"
        mx-4
      />
    </div>
    <Waterfall />
  </TabPane>
</template>
