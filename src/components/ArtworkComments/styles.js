import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Container = styled.div`
    height: 120px;
    width: 350px;
    margin: 0 auto;
`;

export const ImageContainer = styled.div`
    display: inline-block;
    height: 100%;
    width: 50px;
    border: 1px solid black;
`;

export const TextContainer = styled.div`
    display: inline-block;
    width: 250px;
    border: 1px solid ${COLOURS.LINE};
    border-radius: 5px;

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