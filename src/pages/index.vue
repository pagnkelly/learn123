<script setup lang="ts">
import Left from '~/container/left/index.vue'
const placeholder = ref('搜一下')
const name = ref('name')
const go = () => {}
const activeName = ref('aa')
const handleClick = (tab: any, event: Event) => {
  console.log(tab, event)
}
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
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
