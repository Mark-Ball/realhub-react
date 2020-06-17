import React from 'react';
import { Container, ImageContainer, Image, TextContainer } from './styles';

const ArtworkComment = props => {
	return (
		<Container>
			<ImageContainer>
				<Image src={props.image} />
			</ImageContainer>
			<TextContainer>
				<p>{props.name}</p>
				<p>{props.text}</p>
				<p>{props.minutesAgo} minutes ago</p>
			</TextContainer>
		</Container>
	)
}

export default ArtworkComment;