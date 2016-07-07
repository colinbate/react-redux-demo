import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {onSubmitActions} from '../shared';
export const formName = 'add';

const preventAndHandle = sub => e => {
  e.preventDefault();
  sub();
};

const BootstrapField = props => (
  <div className="form-group">
    <label htmlFor={props.input.name}>{props.input.placeholder}</label>
    <input className="form-control" {...props.input} id={props.input.name} />
    {props.touched && props.error && <span>{props.error}</span>}
  </div>
);

const AddBook = ({
  handleSubmit
}) => (
  <form onSubmit={preventAndHandle(handleSubmit)}>
    <Field type="text" name="title" component={BootstrapField} placeholder="Title"/>
    <Field type="text" name="author" component={BootstrapField} placeholder="Author"/>

    <button className="btn btn-default" type="submit">Save</button>
  </form>
);

export default reduxForm({
  form: formName,
  onSubmit: onSubmitActions('ADD_BOOK')
})(AddBook);
