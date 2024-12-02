import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1',
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2',
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3',
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide
        indicators={true}
        arrows={true}
        duration={3000}
        transitionDuration={500}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="rounded-lg flex items-center justify-center h-96 md:h-[600px] w-full bg-cover object-cover bg-center"
              style={{
                backgroundImage: `url(${slideImage.url})`, 
              }}
            >
              <p className="text-white text-3xl font-bold p-4 bg-black bg-opacity-50 rounded">
                {slideImage.caption}
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;