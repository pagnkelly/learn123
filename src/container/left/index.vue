<script setup lang="ts">
import Tab from './tab.vue'
const handleClick = () => {}
const leftData = useLeftDataStore()
const activeName = ref(leftData[0] ? leftData[0].name : 'changyong')
</script>

<template>
  <div w-300px h-2xl mr-10 border-r-2 border-gray-1 px-4>
    <Tabs v-model="activeName" @tab-click="handleClick">
      <Tab
        v-for="c of leftData.renderData"
        :key="c.label"
        :label="c.label"
        :name="c.name"
        :data="c.data"
      />
    </Tabs>
  </div>
</template>
