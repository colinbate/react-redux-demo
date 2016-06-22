import React from 'react';
import styles from './book.css';

const s = (a, b) => a === b ? 'info' : 'default';

const Book = ({title, author, image, status, id, onStatusChange}) => (
  <div className={`${styles[status]} cf`}>
    <img src={image} className={styles.bookImage}/>
    <h4>{title}</h4>
    <p>{author}</p>
    <div className="btn-group" role="group" aria-label="Set status">
      <button type="button" onClick={() => onStatusChange(id, 'unread')} className={`btn btn-${s(status, 'unread')}`}><span className="glyphicon glyphicon-book"></span> Unread</button>
      <button type="button" onClick={() => onStatusChange(id, 'currently-reading')} className={`btn btn-${s(status, 'currently-reading')}`}><span className="glyphicon glyphicon-bookmark"></span> Reading</button>
      <button type="button" onClick={() => onStatusChange(id, 'read')} className={`btn btn-${s(status, 'read')}`}><span className="glyphicon glyphicon-ok"></span> Read</button>
    </div>
  </div>
);

export default Book;
