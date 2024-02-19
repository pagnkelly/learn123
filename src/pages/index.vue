<script setup lang="ts">
import Left from '~/container/left/index.vue'
import Right from '~/container/right/index.vue'
import WorkPanel from '~/container/work-panel/index.vue'
const overUseStore = useDataStore()
</script>

<template>
  <div>
    <header flex mt>
      <img w-203px h-33px mr src="https://gift-static.hongyibo.com.cn/static/kfpub/7724/learn.png">
      <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
    </header>

    <div flex mt>
      <Search />
    </div>

    <div flex mt flex-wrap flex-wrapper>
      <Button v-for="o in overUseStore.mainData" :key="o.name" :name="o.name" :docs="o.docs" :github="o.github" :icon="o.icon" mx-4 />
    </div>

    <div flex mt>
      <WorkPanel />
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
