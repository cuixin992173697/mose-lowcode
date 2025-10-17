<template>
  <button
    class="button"
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
const data = reactive({
  ...props.nodeData
})

defineEmits(['click'])
</script>

<style scoped>
.button {
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
}
.button:hover {
  opacity: 0.9;
}
</style>
