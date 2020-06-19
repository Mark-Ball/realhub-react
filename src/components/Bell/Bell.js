import React from 'react';
import { Box, Number } from './styles';
import whiteBell from '../../svgs/whiteBell.svg';
import blackBell from '../../svgs/blackBell.svg';

const Bell = props => (
		<Box
			blue={props.numUnseenComments}
			onClick={props.toggleComments}
		>
			{props.numUnseenComments > 0 && <Number>{props.numUnseenComments}</Number>}
			<img 
				alt='bell icon'
				src={props.numUnseenComments ? whiteBell : blackBell}
			/>
		</Box>
)

export default Bell;