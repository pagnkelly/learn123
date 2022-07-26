<script setup lang="ts">
import Waterfall from './waterfall/index.vue'
import type { ArticleList, Githubs } from '~/data/type'
const props = defineProps<{
  label: string
  name: string
  data: Githubs
  articleList: ArticleList
}>()
</script>

<template>
  <TabPane :label="props.label" :name="props.name" flex flex-col overflow-y-scroll h-2xl>
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
    <Waterfall :article-list="props.articleList" />
  </TabPane>
</template>
