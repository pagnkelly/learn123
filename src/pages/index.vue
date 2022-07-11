<script setup lang="ts">
import Left from '~/container/left/index.vue'
import Right from '~/container/right/index.vue'
const placeholder = ref('搜一下')
const name = ref('name')
const go = () => {}
const overUseData = useDataStore()
</script>

<template>
  <div>
    <header flex mt>
      <img w-203px h-33px mr src="https://gift-static.hongyibo.com.cn/static/kfpub/7724/learn.png">
    </header>

    <div flex mt>
      <input
        id="input"
        v-model="name"
        :placeholder="placeholder"
        :aria-label="placeholder"
        type="text"
        autocomplete="false"
        p="x4 y2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="go"
      >
    </div>

    <div flex mt h-200px flex-wrap flex-wrapper>
      <Button v-for="o in overUseData.overuse" :key="o.name" :name="o.name" :docs="o.docs" :github="o.github" :icon="o.icon" mx-4 />
    </div>

    <div flex mt>
      <Left />
      <Right />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
