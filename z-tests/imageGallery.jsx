import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const ImageGallery = ({ links }) => {
  const [images, setImages] = useState(links)

  const handleImageRemove = (e, i) => {
    const newImages = images.filter((image, index) => index !== i )
    setImages(newImages)
  }


  React.useEffect(() => {

  }, [images])

  return (
    <div>
      {
        images.map((image, i) => {
          return (
            <div className='image' key={i}>
              <img src={image}></img>
              <button className='remove' onClick={e => handleImageRemove(e, i)}>X</button>
            </div>
          )
        })
      }
    </div>
  );
}

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
const root = createRoot(rootElement);
root.render(<ImageGallery links={ links } />);

setTimeout(() => {
  document.querySelectorAll('.remove')[0]?.click();
  setTimeout(() => {
    console.log(rootElement?.innerHTML);
  });
});

// DONE!!!! 100%