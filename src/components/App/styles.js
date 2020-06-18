import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const CommentsContainer = styled.div`
	border: 1px solid ${COLOURS.LINE};
	border-radius: 5px;
	width: 350px;
	margin: 0 auto;
`;

export const Bell = styled.div`
	height: 100px;
	width: 100px;
	border: 1px solid ${COLOURS.LINE};
	border-radius: 3px;
	margin: 0 auto;
	background-color: ${props => props.blue && COLOURS.BLUE};
`;