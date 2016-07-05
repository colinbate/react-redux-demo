import React from 'react';
import {reduxForm, Field} from 'redux-form';
export const fields = ['title', 'author'];

const preventAndHandle = (sub, reset) => e => {
  e.preventDefault();
  sub().then(() => reset());
};

const BootstrapField = props => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.placeholder}</label>
    <input className="form-control" {...props} id={props.name} />
    {props.touched && props.error && <span>{props.error}</span>}
  </div>
);

const AddBook = ({
  handleSubmit,
  reset
}) => (
  <form onSubmit={preventAndHandle(handleSubmit, reset)}>
    <Field type="text" name="title" component={BootstrapField} placeholder="Title"/>
    <Field type="text" name="author" component={BootstrapField} placeholder="Author"/>

    <button className="btn btn-default" type="submit">Save</button>
  </form>
);

export default reduxForm({
  form: 'add',
  fields
})(AddBook);
