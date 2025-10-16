<template>
  <div class="canvas" ref="canvasRef">
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
import interact from 'interactjs'
import ButtonMaterial from '@/materials/button'
import ImageMaterial from '@/materials/image'
import TextMaterial from '@/materials/text'

const materials = { Button: ButtonMaterial, Image: ImageMaterial, Text: TextMaterial }
const nodes = ref<any[]>([])
const canvasRef = ref<HTMLDivElement | null>(null)

// onMounted(() => {
//   interact(canvasRef.value!).dropzone({
//     accept: '.material-item',
//     overlap: 0.5,
//     ondrop(event) {
//       console.log('Dropped1111111111', event, event.interaction)
//       const type = event.interaction?.dragData?.type
//       const material = materials[type]
//       if (material) {
//         nodes.value.push(material)
//       }
//     },
//   })
// })
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
