<!-- <template>
  <div class="canvas" ref="canvasRef" @pointerup="handleDrop">
    <div
      v-for="(node, index) in nodes"
      :key="index"
      class="canvas-item"
    >
      <component :is="node.component" :nodeData="node.defaultNodeData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import materialRegistry from '@/materials/registry'
import { nanoid } from 'nanoid'


const nodes = ref<any[]>([])
const canvasRef = ref<HTMLElement | null>(null)

const handleDrop = (e: PointerEvent) => {
  const dragData = window.__currentDragData__
  console.log('Drag Data:', dragData)
  if (!dragData?.dragging) return

  const canvas = canvasRef.value
  if (!canvas) return

  const rect = canvas.getBoundingClientRect()
  const inside =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom

  if (inside) {
    const material = materialRegistry[dragData.type]
    if (material) {
      nodes.value.push(material)
      console.log('✅ Dropped:', dragData.type)
    }
  }

  dragData.dragging = false
}
</script>

<style scoped>
.canvas {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 2px dashed #ccc;
  border-radius: 8px;
  position: relative;
  overflow: auto;
  padding: 10px;
}

.canvas-item {
  margin-bottom: 10px;
}
</style> -->


<template>
  <div class="canvas" ref="canvasRef" @pointerup="handleDrop">
    <div v-for="node in store.nodes" :key="node.id" class="canvas-item">
      <component :is="materialRegistry[node.type].component" :nodeData="node.defaultNodeData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMaterialStore } from '@/stores/useMaterialStore'
import materialRegistry from '@/materials/registry'
import { nanoid } from 'nanoid'

const store = useMaterialStore()
const canvasRef = ref<HTMLDivElement | null>(null)

const handleDrop = (e: PointerEvent) => {
  const dragData = window.__currentDragData__
  if (!dragData?.dragging) return

  const canvas = canvasRef.value
  if (!canvas) return

  const rect = canvas.getBoundingClientRect()
  const inside =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom

  if (inside) {
    console.log('✅ Dropped:', dragData.type, dragData.defaultNodeData )
    store.addNode({
      id: nanoid(),
      type: dragData.type,
      data: { ...dragData.defaultNodeData },
    })
  }

  dragData.dragging = false
}
</script>

<style scoped>
.canvas {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 2px dashed #ccc;
  border-radius: 8px;
  position: relative;
  overflow: auto;
  padding: 10px;
}

.canvas-item {
  margin-bottom: 10px;
}
</style>
