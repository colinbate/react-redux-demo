import {formSubmitSaga} from '../shared';
import {sagas as shelfSagas} from '../shelf';

export default function* rootSaga () {
  yield [
    ...formSubmitSaga,
    ...shelfSagas
  ];
}
