import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Container = styled.div`
	position: relative;
	height: 150px;
	margin: 0 auto;
`;

export const ImageContainer = styled.div`
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
	position: absolute;
	left: 15%;
	display: inline-block;
	width: 85%;
	height: auto;

	p {
		margin: 10px;
	}

	p:nth-child(1) {
		color: ${COLOURS.BLUE};
	}

	p:nth-child(3) {
		display: inline;
		color: ${COLOURS.LIGHTGREY};
		margin-left: 10px;
		margin-right: 0;
	}
`;

export const DashedLine = styled.div`
	width: 90%;
	border-top: 1px dashed ${COLOURS.LINE};
	margin: 5px auto;
`;

export const RedText = styled.span`
	color: red;
	cursor: pointer;

	:hover {
		text-decoration: underline;
	}
`;