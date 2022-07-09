<script setup lang="ts">
const props = defineProps<{
  content: string
  active: Boolean
  name: string
}>()
const emit = defineEmits(['onTabBarClick'])
const cls = computed(() => props.active ? 'color-blue' : '')
const activeBorder = computed(() => props.active ? 'border-b-2 border-blue-500' : '')
const handleClick = () => {
  emit('onTabBarClick', props.name)
}
</script>

<template>
  <div
    px-6
    first:pl-0
    last:pr-0
    cursor-pointer
    hover:color-blue
    :class="cls"
    @click="handleClick"
  >
    <div
      :class="activeBorder"
      mb--2px
      py-2
    >
      {{ props.content }}
    </div>
  </div>
</template>
