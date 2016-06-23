import React from 'react';
import styles from './book.css';

const s = (a, b) => a === b ? 'info' : 'default';

const StatusButton = ({setTo, book, icon, onChange, children}) => (
  <button
    type="button"
    className={`btn btn-${s(book.status, setTo)}`}
    onClick={() => onChange(book, setTo)}>
    <span className={`glyphicon glyphicon-${icon}`}></span> {children}
  </button>
);

const Book = ({book, onStatusChange}) => (
  <div className={`${styles[book.status]} cf`}>
    <img src={book.image} className={styles.bookImage}/>
    <h4>{book.title}</h4>
    <p>{book.author}</p>
    <div className="btn-group" role="group" aria-label="Set status">
      <StatusButton book={book} icon="book" setTo="unread" onChange={onStatusChange}>Unread</StatusButton>
      <StatusButton book={book} icon="bookmark" setTo="currently-reading" onChange={onStatusChange}>Reading</StatusButton>
      <StatusButton book={book} icon="ok" setTo="read" onChange={onStatusChange}>Read</StatusButton>
    </div>
  </div>
);

export default Book;
