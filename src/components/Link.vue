<script setup lang="ts">
const props = defineProps<{
  content: string
  url: string
}>()
const content = props.content
const jumpOut = () => {
  window.open(props.url)
}
</script>

<template>
  <button
    link
    h-24px
    @click="jumpOut"
  >
    {{ content }}
  </button>
</template>
