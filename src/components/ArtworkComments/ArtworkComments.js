import React from 'react';
import {
	Container,
	ImageContainer,
	Image,
	TextContainer,
	DashedLine,
	RedText
} from './styles';

const ArtworkComment = props => (
	<>
		<Container>
			<ImageContainer>
				<Image src={props.image} />
			</ImageContainer>
			<TextContainer>
				<p>{props.name}</p>
				<p>{props.body}</p>
				<div>
					<p>{props.minutesAgo} minutes ago {props.acknowledged || '|'}</p>
					{props.acknowledged || <RedText onClick={props.handleAcknowledged}>Mark as Seen</RedText>}
				</div>
			</TextContainer>
		</Container>
		{props.last || <DashedLine />}
	</>
)

export default ArtworkComment;