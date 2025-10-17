import type { BlockProtocol } from '@/protocols/block'

type BlockTreeNode = Pick<BlockProtocol, 'id' | 'type'> & { children?: BlockTreeNode[] }

const blockTree: BlockTreeNode[] = [
	{
		id: '111',
		type: 'container',
		children: [
			{
				id: '222',
				type: 'text',
			}
		]
	}
]

const blocks: Record<string, BlockProtocol> = {
	'111': {
		id: '111',
		type: 'container',
		title: '容器',
		props: {
			layout: {
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'flex-start'
			},
			size: {
				width: '100%',
				height: '400px',
				widthUnit: '%',
				heightUnit: 'px'
			},
		},
	},

	'222': {
		id: '222',
		type: 'text',
		title: '文本',
		props: {
			layout: {
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'flex-start'
			},
			size: {
				width: '100%',
				height: '400px',
				widthUnit: '%',
				heightUnit: 'px'
			},
			text: '海上生明月，天涯共此时。',
		},
	},
}