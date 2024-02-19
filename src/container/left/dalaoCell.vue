<script setup lang="ts">
const props = defineProps<{
  content: string
  url: string
  works: string
  avatar: string
}>()
</script>

<template>
  <div flex items-center mb-2 truncate>
    <img :src="props.avatar" :alt="props.content" h-50px w-50px border-rd-6>
    <Link :content="props.content" :url="props.url" m-l-1 />
    <div v-if="props.works" ml-1>
      -
      {{ props.works }}
    </div>
  </div>
</template>
