<template>
  <img
    class="lc-image"
    :src="data.src"
    :alt="data.alt"
    :style="{
      width: data.width,
      height: data.height,
      borderRadius: data.round ? '50%' : data.borderRadius,
      objectFit: data.fit
    }"
    @click="$emit('click')"
  />
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface NodeData {
  src: string
  alt?: string
  width: string
  height: string
  round: boolean
  borderRadius?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}

// 默认数据
const defaultNodeData: NodeData = {
  src: 'https://via.placeholder.com/150',
  alt: '示例图片',
  width: '150px',
  height: '150px',
  round: false,
  borderRadius: '8px',
  fit: 'cover'
}

const props = defineProps<{
  nodeData?: Partial<NodeData>
}>()

// 合并默认和传入数据
const data = reactive({
  ...defaultNodeData,
  ...props.nodeData
})

defineEmits(['click'])
</script>

<style scoped>
.lc-image {
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s;
}
.lc-image:hover {
  opacity: 0.9;
}
</style>
