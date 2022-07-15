<script setup lang="ts">
const name = ref('')
const placeholder = '输入要查找的内容～'
const go = () => {}
const searchStore = useSearchStore()
const onChange = (e: any) => {
  searchStore.setValue(e.target.value)
}
</script>

<template>
  <input
    id="input"
    v-model="name"
    :placeholder="placeholder"
    :aria-label="placeholder"
    type="text"
    autocomplete="false"
    p="x6 y4"
    w="full"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
    shadow
    @input="onChange"
    @keydown.enter="go"
  >
</template>
