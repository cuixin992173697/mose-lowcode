export interface MaterialConfig {
  name: string            // 物料名称
  label: string           // 面板显示名字
  icon?: string           // 图标
  category?: string       // 分类
  component: any          // 渲染组件
  defaultNodeData?: Record<string, any> // 节点默认数据
  propsSchema?: Record<string, any>     // 属性面板 schema
  events?: { name: string; label: string }[]  // 支持的事件
}