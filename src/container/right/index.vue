<script setup lang="ts">
import Tab from './tab.vue'
const handleClick = () => {}
const activeName = ref('aa')
const rightData: any = useRightDataStore()
</script>

<template>
  <div flex-1 h-2xl border-l-2 border-gray-1 px-4>
    <Tabs v-model="activeName" @tab-click="handleClick">
      <Tab
        v-for="c of rightData.renderData"
        :key="c.label"
        :label="c.label"
        :name="c.name"
        :data="c.data"
      />
    </Tabs>
  </div>
</template>
