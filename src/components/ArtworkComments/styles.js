import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Container = styled.div`
	display: flex;
	margin: 0 auto;
`;

export const ImageContainer = styled.div`
	position: relative;
	display: inline-block;
	height: 100%;
	width: 15%;
`;

export const Image = styled.img`
	position: absolute;
	left: 10px;
	top: 10px;
	height: 35px;
	width: 35px;
	border: 1px solid ${COLOURS.LINE};
	border-radius: 50%;
`;

export const TextContainer = styled.div`
	display: inline-block;
	width: 85%;
	height: auto;

	p {
		margin: 10px;
	}

	p:nth-child(1) {
		color: ${COLOURS.BLUE};
	}

	div:nth-child(3) {
		display: flex;
		margin: 10px;

		p {
			margin: 0;
		}

		p:nth-child(1) {
			color: ${COLOURS.LIGHTGREY};
			margin: 0;
		}

		p:nth-child(2) {
			margin-left: .25em;
		}
	}
`;

export const DashedLine = styled.div`
	width: 90%;
	border-top: 1px dashed ${COLOURS.LINE};
	margin: 0 auto;
`;

export const RedText = styled.p`
	color: red;
	cursor: pointer;

	:hover {
		text-decoration: underline;
	}
`;