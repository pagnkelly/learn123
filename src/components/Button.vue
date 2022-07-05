<script setup lang="ts">
const props = defineProps<{
  content: string
  url: string
}>()
const content = props.content
</script>

<template>
  <div h-32px flex-wrapper>
    <a icon-btn>
      <div i-logos-vue />
    </a>
    <Link :content="content" url="{{url}}" mx-2 />
    <a icon-btn>
      <div i-carbon-logo-github />
    </a>
  </div>
</template>
