import React from 'react';
import ArtworkComment from '../ArtworkComments/ArtworkComments';
import portrait from '../../svgs/portrait.svg';

const comments = [
  {
    name: 'Frank Greeff',
    text: 'Also, the address is 79/104 New Order Road not 78',
    minutesAgo: 5
  },
  {
    name: 'Frank Greeff',
    text: 'Looks pretty good but could you please move the image to the left.',
    minutesAgo: 5
  },
  {
    name: 'Darrell Gardiner',
    text: 'Please review artwork and let me know if you require any changes.',
    minutesAgo: 9
  }
]

const App = () => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Comments</h1>
      <ArtworkComment
        image={portrait}
        name={'Frank Greeff'}
        text={'Also, the address is 79/104 New Order Road not 78'}
        minutesAgo={5}
      />
    </>
  );
}

export default App;