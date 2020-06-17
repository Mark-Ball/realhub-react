import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Container = styled.div`
	position: relative;
	height: 120px;
	width: 350px;
	margin: 0 auto;
	border: 1px solid ${COLOURS.LINE};
	border-radius: 5px;
`;

export const ImageContainer = styled.div`
	display: inline-block;
	height: 100%;
	width: 15%;
`;

export const TextContainer = styled.div`
	position: absolute;
	left: 15%;
	display: inline-block;
	height: 100%;
	width: 85%;

	p {
			margin: 10px;
	}

	p:nth-child(1) {
			color: ${COLOURS.BLUE};
	}

	p:nth-child(3) {
			color: ${COLOURS.LIGHTGREY};
	}
`;