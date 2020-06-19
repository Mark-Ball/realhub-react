import React from 'react';
import {
	Container,
	ImageContainer,
	Image,
	TextContainer,
	DashedLine,
	RedText
} from './styles';
import { convertStringToUTZ, timeSince } from '../../utils/';

const ArtworkComment = props => {
	const date = new Date(convertStringToUTZ(props.dateCreated));
	const timeAgo = timeSince(date);

	return (
		<>
			<Container>
				<ImageContainer>
					<Image src={props.image} />
				</ImageContainer>
				<TextContainer>
					<p>{props.name}</p>
					<p>{props.body}</p>
					<div>
						<p>{timeAgo} ago {props.acknowledged || '|'}</p>
						{props.acknowledged || <RedText onClick={props.handleAcknowledged}>Mark as Seen</RedText>}
					</div>
				</TextContainer>
			</Container>
			{props.last || <DashedLine />}
		</>
	)
}

export default ArtworkComment;