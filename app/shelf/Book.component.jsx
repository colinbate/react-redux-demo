import React from 'react';

const Book = ({title, author, image}) => (
  <div>
    <h4>{title}</h4>
    <p>{author}</p>
    <img src={image}/>
  </div>
);

export default Book;
