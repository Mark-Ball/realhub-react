import React from 'react';
import {
	Container,
	ImageContainer,
	Image,
	TextContainer,
	DashedLine,
	RedText
} from './styles';

const ArtworkComment = props => {
	return (
		<>
			<Container>
				<ImageContainer>
					<Image src={props.image} />
				</ImageContainer>
				<TextContainer>
					<p>{props.name}</p>
					<p>{props.text}</p>
					<div>
						<p>{props.minutesAgo} minutes ago {props.seen || '|'}</p>
						{props.seen || <RedText onClick={props.handleSeen}>Mark as seen</RedText>}
					</div>
				</TextContainer>
			</Container>
			{props.last || <DashedLine />}
		</>
	)
}

export default ArtworkComment;