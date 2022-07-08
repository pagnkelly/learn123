<script setup lang="ts">
const props = defineProps<{
  content: string
  active: Boolean
  name: string
}>()
const emit = defineEmits(['onTabBarClick'])
const cls = computed(() => props.active ? 'bg-blue' : '')
const handleClick = () => {
  emit('onTabBarClick', props.name)
}
</script>

<template>
  <div px-6 first:pl-0 last:pr-0 :class="cls" @click="handleClick">
    {{ props.content }}
  </div>
</template>
