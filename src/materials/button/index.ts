import type { MaterialConfig } from '@/types/materials'
import Button from './button.vue'


const ButtonMaterial: MaterialConfig = {
  name: 'Button',
  label: '按钮',
  icon: 'mdi:button-cursor',
  category: '基础组件',
  component: Button,

  // 默认节点数据（初始属性）
  defaultNodeData: {
    text: '按钮',
    color: '#409EFF',
    round: false,
    plain: false,
    fontSize: 14,
    padding: '8px 16px',
  },

  // 属性面板配置
  propsSchema: {
    text: { type: 'string', label: '按钮文字' },
    color: { type: 'color', label: '按钮颜色' },
    round: { type: 'boolean', label: '圆角按钮' },
    plain: { type: 'boolean', label: '朴素按钮' },
    fontSize: { type: 'number', label: '字体大小' },
    padding: { type: 'string', label: '内边距' },
  },

  // 可监听事件
  events: [
    { name: 'click', label: '点击事件' }
  ],
}

export default ButtonMaterial
