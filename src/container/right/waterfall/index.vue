<script setup lang="ts">
import Item from './item.vue'
import type { ArticleList } from '~/data/type'
const props = defineProps<{
  articleList: ArticleList
}>()
</script>

<template>
  <div v-for="o in props.articleList" :key="o.update" mx-4 py-4 border-gray-2 border-dashed border-b-2>
    <Item :data="o" />
  </div>
</template>
