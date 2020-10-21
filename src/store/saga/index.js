import { all } from 'redux-saga/effects';

import watchCurrency from './currency';

export default function* rootSaga() {
  yield all([
    watchCurrency()
  ]);
}
