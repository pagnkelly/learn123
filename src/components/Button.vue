<script setup lang="ts">

const props = defineProps<{
  name: string
  docs: string
  icon: string
  github: string
}>()
const icon = computed(() => ref('i-' + props.icon))
const gitUrl = 'https://github.com' + props.github
const goOtherWebside = (url: string | URL | undefined) => {
  window.open(url)
}
</script>

<template>
  <div h-32px flex-wrapper>
    <a v-if="props.icon" icon-btn @click="goOtherWebside(props.docs)">
      <div :class="icon" />
    </a>
    <Link :content="props.name" :url="props.docs" mx-2 />
    <a icon-btn @click="goOtherWebside(gitUrl)">
      <div i-carbon-logo-github />
    </a>
  </div>
</template>
