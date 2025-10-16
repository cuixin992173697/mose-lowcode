import type { MaterialConfig } from '@/types/materials'
import Image from './image.vue'

const ImageMaterial: MaterialConfig = {
  name: 'Image',
  label: '图片',
  icon: 'mdi:image-outline',
  category: '基础组件',
  component: Image,

  // 默认节点数据（初始属性）
  defaultNodeData: {
    src: 'https://via.placeholder.com/150',
    alt: '示例图片',
    width: '150px',
    height: '150px',
    round: false,
    borderRadius: '8px',
    fit: 'cover',
  },

  // 属性面板配置
  propsSchema: {
    src: { type: 'string', label: '图片地址' },
    alt: { type: 'string', label: '替代文本' },
    width: { type: 'string', label: '宽度' },
    height: { type: 'string', label: '高度' },
    round: { type: 'boolean', label: '是否圆形' },
    borderRadius: { type: 'string', label: '圆角大小' },
    fit: {
      type: 'select',
      label: '图片裁剪模式',
      options: [
        { label: '填充（fill）', value: 'fill' },
        { label: '等比缩放（contain）', value: 'contain' },
        { label: '覆盖裁剪（cover）', value: 'cover' },
        { label: '不缩放（none）', value: 'none' },
        { label: '按比例缩小（scale-down）', value: 'scale-down' },
      ],
    },
  },

  // 可监听事件
  events: [
    { name: 'click', label: '点击图片' }
  ],
}

export default ImageMaterial
