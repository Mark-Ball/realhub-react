import React, { useState } from 'react';
import ArtworkComment from '../ArtworkComments/ArtworkComments';
import Bell from '../Bell/Bell';
import { CommentsContainer } from './styles';
import comments from '../../data';
import './App.css';

const App = () => {
  const [acknowledged, setAcknowledged] = useState(comments
    .sort((a, b) => a.minutesAgo - b.minutesAgo)
    .map(comment => comment.acknowledged)
  );

  const [showComments, setShowComments] = useState(false);

  const handleAcknowledged = index => {
    return () => {
      setAcknowledged(prevState => {
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
        numUnseenComments={acknowledged.filter(val => val === false).length}
        toggleComments={toggleComments}
      />
      {showComments &&
        <CommentsContainer>
          {comments.sort((a, b) => a.minutesAgo - b.minutesAgo).map((comment, i) => (
            <ArtworkComment
              key={comment.id}
              last={i === comments.length - 1 ? true : false}
              image={comment.user.image.original_url}
              name={comment.user.first_name + ' ' + comment.user.last_name}
              body={comment.body}
              minutesAgo={comment.minutesAgo}
              acknowledged={acknowledged[i]}
              handleAcknowledged={handleAcknowledged(i)}
            />
          ))}
        </CommentsContainer>
      }
    </>
  );
}

export default App;