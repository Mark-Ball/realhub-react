import React from 'react';
import { Box } from './styles';

const Bell = props => {
    console.log(props.numUnseenComments);
    return (
        <Box
            blue={props.blue}
            onClick={props.toggleComments}
        >
            {props.numUnseenComments > 0 && props.numUnseenComments}
        </Box>
    )
}

export default Bell;