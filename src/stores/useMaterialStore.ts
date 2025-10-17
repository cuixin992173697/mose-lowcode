import { reactive } from 'vue'
import { defineStore } from 'pinia'

export interface NodeData {
  id: string
  type: string // 对应物料类型，比如 'Button' | 'Image' | 'Text'
  data: Record<string, any> // 各个组件的配置项
}

export const useMaterialStore = defineStore('material', () => {
  const nodes = reactive<NodeData[]>([])

  // 添加节点（物料）
  const addNode = (node: NodeData) => {
    nodes.push(node)
  }

  // 更新节点属性
  const updateNode = (id: string, newData: Record<string, any>) => {
    const node = nodes.find(n => n.id === id)
    if (node) Object.assign(node.data, newData)
  }

  // 删除节点
  const removeNode = (id: string) => {
    const index = nodes.findIndex(n => n.id === id)
    if (index > -1) nodes.splice(index, 1)
  }

  return {
    nodes,
    addNode,
    updateNode,
    removeNode,
  }
})
