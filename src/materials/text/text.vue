<template>
  <p
    class="lc-text"
    :style="{
      color: data.color,
      fontSize: data.fontSize + 'px',
      fontWeight: data.bold ? 'bold' : 'normal',
      textAlign: data.align,
      lineHeight: data.lineHeight + 'px',
      margin: data.margin
    }"
  >
    {{ data.text }}
  </p>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface NodeData {
  text: string
  color: string
  fontSize: number
  bold: boolean
  align: 'left' | 'center' | 'right'
  lineHeight: number
  margin?: string
}

const props = defineProps<{
  nodeData?: Partial<NodeData>
}>()

defineEmits(['click'])

// 默认数据
const defaultNodeData: NodeData = {
  text: '这是一个文本',
  color: '#333',
  fontSize: 16,
  bold: false,
  align: 'left',
  lineHeight: 24,
  margin: '0'
}

// 合并默认与外部数据
const data = reactive({
  ...defaultNodeData,
  ...props.nodeData
})
</script>

<style scoped>
.lc-text {
  cursor: text;
  white-space: pre-wrap;
  word-break: break-word;
  transition: color 0.2s;
}
.lc-text:hover {
  color: #007aff;
}
</style>
