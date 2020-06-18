import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Box = styled.div`
    position: relative;
	height: 50px;
	width: 50px;
	border: 1px solid ${COLOURS.LINE};
	border-radius: 3px;
	margin: 0 auto;
	background-color: ${props => props.blue && COLOURS.BLUE};
    cursor: pointer;
`;

export const Number = styled.div`
    position: absolute;
    right: 5px;
    color: ${COLOURS.DARKGREY};
`;