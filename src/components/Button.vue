<script setup lang="ts">
const props = defineProps<{
  name: string
  docs: string
  icon: string
  github: string
}>()
const icon = props.icon
const gitUrl = `https://github.com${props.github}`
const goOtherWebside = (url: string | URL | undefined) => {
  window.open(url)
}
const isIcon = icon.startsWith('i-')
</script>

<template>
  <div h-32px flex-wrapper>
    <a v-if="props.icon" icon-btn @click="goOtherWebside(props.docs)">
      <div v-if="isIcon" :class="icon" />
      <img v-else :src="icon" alt="图标" w-5 h-5>
    </a>
    <Link :content="props.name" :url="props.docs" mx-2 />
    <a icon-btn @click="goOtherWebside(gitUrl)">
      <div i-carbon-logo-github />
    </a>
  </div>
</template>
