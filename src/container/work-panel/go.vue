<script setup lang="ts">
import colors from '../../data/colors'
const props = defineProps<{
  name: string
  icon: string
  link: string
}>()
const icon = props.icon
const isIcon = icon.startsWith('i-')
const goOtherWebside = () => {
  window.open(props.link)
}
const randomBg = `bg-${colors[Math.floor(Math.random() * 10)]}`
</script>

<template>
  <div id="work-panel-go" flex flex-col flex-items-center justify-center px-24px py-12px b-rd-12px cursor-pointer @click="goOtherWebside">
    <div :class="randomBg" w-10 h-10 flex justify-center flex-items-center b-rd-5>
      <div v-if="isIcon" :class="icon" color-white />
      <img v-else :src="icon" alt="图标" w-5 h-5 z-1>
    </div>
    <div mt>
      {{ props.name }}
    </div>
  </div>
</template>
