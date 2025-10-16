import type { MaterialConfig } from '@/types/materials'
import Text from './text.vue'

const TextMaterial: MaterialConfig = {
  name: 'Text',
  label: '文本',
  icon: 'mdi:format-text',
  category: '基础组件',
  component: Text,

  // 默认节点数据
  defaultNodeData: {
    text: '这是一个文本',
    color: '#333',
    fontSize: 16,
    bold: false,
    align: 'left',
    lineHeight: 24,
    margin: '0'
  },

  // 属性面板配置
  propsSchema: {
    text: { type: 'string', label: '文本内容' },
    color: { type: 'color', label: '文字颜色' },
    fontSize: { type: 'number', label: '文字大小' },
    bold: { type: 'boolean', label: '是否加粗' },
    align: {
      type: 'select',
      label: '对齐方式',
      options: [
        { label: '左对齐', value: 'left' },
        { label: '居中', value: 'center' },
        { label: '右对齐', value: 'right' }
      ]
    },
    lineHeight: { type: 'number', label: '行高' },
    margin: { type: 'string', label: '外边距' }
  },

  // 可监听事件
  events: [
    { name: 'click', label: '点击事件' }
  ],
}

export default TextMaterial
