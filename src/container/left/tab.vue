<script setup lang="ts">
import Cell from './cell.vue'
import DalaoCell from './dalaoCell.vue'
const props = defineProps<{
  label: string
  name: string
  data: any
}>()
</script>

<template>
  <TabPane :label="props.label" :name="props.name" flex flex-col>
    <div v-if="props.name === 'famous'">
      <DalaoCell
        v-for="c in props.data"
        :key="c.content"
        :content="c.content"
        :url="c.url"
        :works="c.works"
        :avatar="c.avatar"
      />
    </div>
    <div v-else>
      <Cell
        v-for="(c, index) in props.data"
        :key="c.content"
        :content="c.content"
        :index="index + 1"
        :url="c.url"
      />
    </div>
  </TabPane>
</template>
