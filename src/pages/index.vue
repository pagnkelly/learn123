<script setup lang="ts">
const placeholder = ref('搜一下')
const name = ref('name')
</script>

<template>
  <div>
    <header flex mt>
      <img w-203px h-33px mr src="https://gift-static.hongyibo.com.cn/static/kfpub/7724/learn.png">
      <div bg-blue flex-1 />
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

    <div flex mt h-200px>
      <Button />
    </div>

    <div flex mt>
      <div w-sm bg-green h-2xl mr />
      <div flex-1 bg-red h-2xl>
        <Button />
      </div>
    </div>

    <div fixed bg-yellow h-50px w-50px right-20 bottom-20 />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
