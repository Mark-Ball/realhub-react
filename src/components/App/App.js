import React from 'react';
import ArtworkComment from '../ArtworkComments/ArtworkComments';
import { CommentsContainer } from './styles';
import portrait from '../../svgs/portrait.svg';

const comments = [
  {
    id: 1,
    name: 'Frank Greeff',
    text: 'Also, the address is 79/104 New Order Road not 78 | and if i make this comments very very very long it goes over the page on no!',
    minutesAgo: 5
  },
  {
    id: 2,
    name: 'Frank Greeff',
    text: 'Looks pretty good but could you please move the image to the left.',
    minutesAgo: 5
  },
  {
    id: 3,
    name: 'Darrell Gardiner',
    text: 'Please review artwork and let me know if you require any changes.',
    minutesAgo: 9
  }
]

const App = () => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Comments</h1>
        <CommentsContainer>
          {comments.sort((a, b) => a.minutesAgo - b.minutesAgo).map((comment, i) => (
            <ArtworkComment
              key={comment.id}
              last={i === comments.length - 1 ? true : false}
              image={portrait}
              name={comment.name}
              text={comment.text}
              minutesAgo={comment.minutesAgo}
            />
          ))}
        </CommentsContainer>
    </>
  );
}

export default App;