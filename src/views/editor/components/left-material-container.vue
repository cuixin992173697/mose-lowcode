<template>
  <div class="material-panel">
    <div
      v-for="(material, index) in materials"
      :key="index"
      class="material-item"
      :data-type="material.name"
    >
      <div class="label">{{ material.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import interact from 'interactjs'
import ButtonMaterial from '@/materials/button'
import ImageMaterial from '@/materials/image'
import TextMaterial from '@/materials/text'

// ✅ 给每个物料加唯一 name
const materials = [
  { name: 'Button', label: '按钮', component: ButtonMaterial },
  { name: 'Image', label: '图片', component: ImageMaterial },
  { name: 'Text', label: '文字', component: TextMaterial },
]

onMounted(() => {
  interact('.material-item').draggable({
    inertia: true,
    autoScroll: true,
    listeners: {
      start(event) {
        const original = event.target
        const clone = original.cloneNode(true) as HTMLElement
        clone.classList.add('drag-clone')
        document.body.appendChild(clone)

        // ✅ 把 type 存在 dragData 中
        event.interaction.dragData = { clone, type: original.dataset.type }
      },
      move(event) {
        const { clone } = event.interaction.dragData || {}
        if (clone) {
          clone.style.left = event.client.x - clone.offsetWidth / 2 + 'px'
          clone.style.top = event.client.y - clone.offsetHeight / 2 + 'px'
        }
      },
      end(event) {
        const { clone } = event.interaction.dragData || {}
        if (clone && clone.parentNode) clone.remove()
      },
    },
  })
})
</script>

<style scoped>
.material-panel {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
}

.material-item {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  font-weight: 500;
  cursor: grab;
  user-select: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.material-item:hover {
  border-color: #c7c7c7;
}
.label {
  color: #808080;
}
.drag-clone {
  position: fixed;
  pointer-events: none;
  opacity: 0.8;
  z-index: 9999;
  transform: scale(1.05);
  border: 1px solid #007bff;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}
</style>
