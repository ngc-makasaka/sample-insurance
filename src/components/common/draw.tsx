import CloseIcon from '@mui/icons-material/Close'
import { Drawer } from '@mui/material'

import { CommonDrawProps } from '@/src/types/components/common/draw'

export default function CommonDrawer({
	anchor = 'right',
	...props
}: CommonDrawProps) {
	return (
		<Drawer anchor={anchor} open={props.open} onClose={props.onClose}>
			<div className="border-b border-gray-200 flex justify-between items-center p-6">
				<h2 className="text-xl font-bold">{props.title}</h2>
				<CloseIcon
					className="cursor-pointer hover:opacity-50"
					onClick={(e) => {
						if (props.onClose) {
							props.onClose(e, 'backdropClick')
						}
					}}
				/>
			</div>
			<div className="w-[500px] p-6">{props.children}</div>
		</Drawer>
	)
}
