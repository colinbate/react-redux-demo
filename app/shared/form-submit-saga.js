import {put, take, race} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import {SubmissionError} from 'redux-form';

const FORM_SUBMIT = 'react-redux-demo/FORM_SUBMIT';
const SUFFIX = [
  'STARTED',
  'SUCCESS',
  'FAILURE'
];

function formSubmit (submitAction, successAction, failureAction, values, resolve, reject) {
  console.log(`Submitting form with action (${submitAction}) and values:`, values);
  return {
    type: FORM_SUBMIT,
    meta: {
      submitAction,
      successAction,
      failureAction,
      resolve,
      reject
    },
    payload: values
  };
}

function normalizeActionArray (input) {
  if (!input.length) {
    throw new Error('You must provide action types.');
  }
  if (input.length === 3) {
    return input;
  }
  if (typeof input[0] === 'string') {
    return SUFFIX.map(s => `${input}_${s}`);
  }
  if (typeof input[0] === 'object') {
    return [input.submit, input.success, input.failure];
  }
  throw new Error('Unknown action type.');
}

export default function onSubmitActions (...actions) {
  const actionArray = normalizeActionArray(actions);
  console.log('Returning onSubmit function to handle', actionArray);
  return (values, dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(formSubmit(...actionArray, values, resolve, reject));
    });
}

function* formSubmitSaga ({
  meta: {
    submitAction,
    successAction,
    failureAction,
    resolve,
    reject
  },
  payload
}) {
  console.log('Starting formSubmitSaga for', submitAction, 'with payload', payload);
  yield put({type: submitAction, payload});

  const {success, failure} = yield race({
    success: take(successAction),
    failure: take(failureAction)
  });

  if (success) {
    console.log('formSubmitSaga success');
    resolve();
  } else {
    console.log('formSubmitSaga failure', failure);
    reject(new SubmissionError(failure.payload));
  }
}

function* watchFormSubmitSaga () {
  yield* takeEvery(FORM_SUBMIT, formSubmitSaga);
}

export const sagas = [
  watchFormSubmitSaga()
];
