<script setup lang="ts">
import type { ArticleListItem } from '~/data/type'
const props = defineProps<{
  data: ArticleListItem
}>()
const data = props.data || {}
const onClick = () => {
  window.open(data.url)
}
const time = new Date(data.update)
const updateTime = `${time.getFullYear()}年${time.getMonth()}月${time.getDate()}日`
</script>

<template>
  <div py-2 flex @click="onClick">
    <div w-150px h-100px>
      <img :src="data.img" alt="文章图片" h="100%" w="100%">
    </div>
    <div flex-1 mx-4>
      <Link :content="data.title" :url="data.url" text-20px />
      <div text-16px h-52px>
        {{ data.subtitle }}
      </div>
      <div flex>
        <div text-12px mr-20px>
          来源: {{ data.from }}
        </div>
        <div text-12px>
          更新: {{ updateTime }}
        </div>
      </div>
    </div>
  </div>
</template>
