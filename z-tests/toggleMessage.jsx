import React from 'react';
import { createRoot } from 'react-dom/client';

const Message = () => {  
  const handleText = () => {
    const paragraph = document.querySelector('p')
    if (paragraph.style.display === 'none') {
      paragraph.style.display = 'block'
    } else {
      paragraph.style.display = 'none'
    }
  }

  return (
    <React.Fragment>
      <a onClick={handleText} href="#">Want to buy a new car?</a>
      <p style={{ display: 'none' }}>Call +11 22 33 44 now!</p>
    </React.Fragment>
  );
}


// DONE!!! 100%
