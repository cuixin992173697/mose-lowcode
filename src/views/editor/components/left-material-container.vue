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
    inertia: true,
    autoScroll: true,
    listeners: {
      start(event) {
        // console.log('Drag started', event, event.interaction?.dragData)
        // const type = event.target.dataset.type
        // event.interaction?.dragData || (event.interaction.dragData = {})
        // event.interaction.dragData.type = type

        console.log('Drag started', event)
        const original = event.target
        const clone = original.cloneNode(true) as HTMLElement
        clone.classList.add('drag-clone')
        clone.classList.add('material-item')
        document.body.appendChild(clone)
        event.interaction.dragData = { clone, type: original.dataset.type }
      },
      move(event) {
        // 1. 移动克隆节点
        console.log('Drag moving1111111', event.interaction.dragData )
        const { clone } = event.interaction.dragData || {}
        if (clone) {
          clone.style.left = event.client.x - clone.offsetWidth / 2 + 'px'
          clone.style.top = event.client.y - clone.offsetHeight / 2 + 'px'
        }
  
      },
      end(event) {
        // 拖拽结束后复位
        // const target = event.target
        // target.style.transform = 'none'
        // target.removeAttribute('data-x')
        // target.removeAttribute('data-y')
        const { clone } = event.interaction.dragData || {}
        if (clone && clone.parentNode) clone.remove()
      },
    }
    
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
