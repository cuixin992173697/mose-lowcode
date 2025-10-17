// src/protocols/block.ts

/**
 * 基础布局属性
 */
export interface LayoutProps {
  flexDirection: 'row' | 'column'
  justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
  alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
}

/**
 * 尺寸属性
 */
export interface SizeProps {
  width: string
  height: string
  widthUnit: 'px' | '%' | 'vw' | 'vh'
  heightUnit: 'px' | '%' | 'vw' | 'vh'
}

/**
 * 通用 Props 类型（每个物料都可在此基础上扩展）
 */
export interface BlockProps {
  layout: LayoutProps
  size: SizeProps

  // 通用字段
  text?: string
  color?: string
  backgroundColor?: string
  [key: string]: any
}

/**
 * Block 协议定义
 */
export interface BlockProtocol {
  id: string              // 唯一标识
  type: string            // 物料类型（如 'text' | 'container'）
  title: string           // 物料标题，用于展示
  props?: Partial<BlockProps>  // 可选的属性配置
  events?: Record<string, Function> // 可绑定的事件
}
