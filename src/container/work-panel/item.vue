<script setup lang="ts">
import item from './item.vue'
import Go from './go.vue'

const props = defineProps<{
  category: string
  children: any
}>()

</script>

<template>
  <div flex>
    <div v-if="props.category" mt-12px font-500 mr>
      {{props.category}}
    </div>
    <div flex>
      <Go v-for="child of props.children" :key="child.name" :name="child.name" :link="child.link" :icon="child.icon" />
    </div>
  </div>
</template>
