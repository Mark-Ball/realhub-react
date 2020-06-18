import React from 'react';
import { Box, Number } from './styles';

const Bell = props => {
    return (
        <Box
            blue={props.blue}
            onClick={props.toggleComments}
        >
            {props.numUnseenComments > 0 && <Number>{props.numUnseenComments}</Number>}
        </Box>
    )
}

export default Bell;