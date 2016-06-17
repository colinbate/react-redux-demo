import React from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['title', 'author'];

const AddBook = ({
  fields: {title, author},
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input type="text" className="form-control" id="title" placeholder="Title" {...title} />
    </div>
    <div className="form-group">
      <label htmlFor="author">Author</label>
      <input type="text" className="form-control" id="author" placeholder="Author" {...author} />
    </div>
    <button className="btn btn-default" type="submit" onClick={handleSubmit}>Save</button>
  </form>
);

export default reduxForm({
  form: 'add',
  fields,
  onSubmit (values) {
    console.log(values);
  }
})(AddBook);
