<script setup lang="ts">
const handleClick = () => {}
const activeName = ref('aa')
</script>

<template>
  <div flex-1 h-2xl border-l-2 border-gray-1 px-4>
    <Tabs v-model="activeName" @tab-click="handleClick">
      <TabPane label="aaaaaa" name="aa">
        123456
      </TabPane>
      <TabPane label="b" name="bb">
        122222
      </TabPane>
      <TabPane label="ccc" name="cc">
        dwdw
      </TabPane>
    </Tabs>
  </div>
</template>
