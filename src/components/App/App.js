import React, { useState } from 'react';
import ArtworkComment from '../ArtworkComments/ArtworkComments';
import Bell from '../Bell/Bell';
import { CommentsContainer } from './styles';
import portrait from '../../svgs/portrait.svg';

const comments = [
  {
    id: 1,
    name: 'Frank Greeff',
    text: 'Also, the address is 79/104 New Order Road not 78 | and if i make this comments very very very long it goes over the page on no!',
    minutesAgo: 5,
    seen: false
  },
  {
    id: 2,
    name: 'Frank Greeff',
    text: 'Looks pretty good but could you please move the image to the left.',
    minutesAgo: 5,
    seen: false
  },
  {
    id: 3,
    name: 'Darrell Gardiner',
    text: 'Please review artwork and let me know if you require any changes.',
    minutesAgo: 9,
    seen: false
  }
]

const App = () => {
  const [seen, setSeen] = useState(comments
    .sort((a, b) => a.minutesAgo - b.minutesAgo)
    .map(comment => comment.seen)
  );

  const [showComments, setShowComments] = useState(false);

  const handleSeen = index => {
    return () => {
      setSeen(prevState => {
        prevState[index] = true;
        return [...prevState];
      });
    }
  }

  const toggleComments = () => {
    setShowComments(prevState => !prevState);
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Comments</h1>
      <Bell
        blue={seen.includes(false)}
        numUnseenComments={seen.filter(val => val === false).length}
        toggleComments={toggleComments}
      />
      {showComments &&
        <CommentsContainer>
          {comments.sort((a, b) => a.minutesAgo - b.minutesAgo).map((comment, i) => (
            <ArtworkComment
              key={comment.id}
              last={i === comments.length - 1 ? true : false}
              image={portrait}
              name={comment.name}
              text={comment.text}
              minutesAgo={comment.minutesAgo}
              seen={seen[i]}
              handleSeen={handleSeen(i)}
            />
          ))}
        </CommentsContainer>
      }
    </>
  );
}

export default App;