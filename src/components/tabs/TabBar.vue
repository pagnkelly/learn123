<script setup lang="ts">
const props = defineProps<{
  content: string
  active: Boolean
}>()
const cls = ref(props.active ? 'bg-blue' : '')
console.log(cls)
</script>

<template>
  <div px-6 first:pl-0 last:pr-0 :class="cls">
    {{ props.content }}
  </div>
</template>
