<template>
  <button
    class="lc-button"
    :style="{
      backgroundColor: data.plain ? '#fff' : data.color,
      color: data.plain ? data.color : '#fff',
      borderColor: data.color,
      borderRadius: data.round ? '20px' : '6px',
      fontSize: data.fontSize + 'px',
      padding: data.padding || '8px 16px'
    }"
    @click="$emit('click')"
  >
    {{ data.text }}
  </button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface NodeData {
  text: string
  color: string
  round: boolean
  plain: boolean
  fontSize: number
  padding?: string
}



const props = defineProps<{
  nodeData?: Partial<NodeData>
}>()
defineEmits(['click'])

// 定义默认数据
const defaultNodeData: NodeData = {
  text: '按钮',
  color: '#409EFF',
  round: false,
  plain: false,
  fontSize: 14,
  padding: '8px 16px'
}



// 合并默认数据和父组件传入的数据
const data = reactive({
  ...defaultNodeData,
  ...props.nodeData
})
</script>

<style scoped>
.lc-button {
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
}
.lc-button:hover {
  opacity: 0.9;
}
</style>
