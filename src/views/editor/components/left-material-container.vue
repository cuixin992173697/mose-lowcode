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


const materials = [
  { name: 'Button', label: '按钮', component: ButtonMaterial },
  { name: 'Image', label: '图片', component: ImageMaterial },
  { name: 'Text', label: '文字', component: TextMaterial },
]


onMounted(() => {
  interact('.material-item').draggable({
    inertia: false,
    autoScroll: false,
    listeners: {
      start(event) {
        const original = event.target as HTMLElement
        const type = original.dataset.type!
        const clone = original.cloneNode(true) as HTMLElement

        clone.classList.add('drag-clone')
        document.body.appendChild(clone)

        // 用于跨组件通信
        window.__currentDragData__ = { type, clone, dragging: true }

        // 初始化克隆节点位置
        clone.style.position = 'fixed'
        clone.style.left = event.client.x + 'px'
        clone.style.top = event.client.y + 'px'
      },
      move(event) {
        const dragData = window.__currentDragData__
        if (!dragData?.clone) return

        dragData.clone.style.left = event.client.x - dragData.clone.offsetWidth / 2 + 'px'
        dragData.clone.style.top = event.client.y - dragData.clone.offsetHeight / 2 + 'px'
      },
      end() {
        const dragData = window.__currentDragData__
        if (dragData?.clone && dragData.clone.parentNode) dragData.clone.remove()
        if (dragData) dragData.dragging = false
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

.drag-placeholder {
  opacity: 0.3;
  border: 2px dashed #007bff;
}
</style>
