import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Box = styled.div`
	height: 50px;
	width: 50px;
	border: 1px solid ${COLOURS.LINE};
	border-radius: 3px;
	margin: 0 auto;
	background-color: ${props => props.blue && COLOURS.BLUE};
    cursor: pointer;
`;