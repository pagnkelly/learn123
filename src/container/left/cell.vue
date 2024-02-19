<script setup lang="ts">
import NumberTransformRoman from '~/utils/index'
const props = defineProps<{
  content: string
  url: string
  index: number
}>()
const ntr = new NumberTransformRoman()
const romanIdx = ntr.transformRoman(props.index)
</script>

<template>
  <div flex truncate>
    <div w-25px>
      {{ romanIdx }}
    </div>
    <Link :content="props.content" :url="props.url" />
  </div>
</template>
