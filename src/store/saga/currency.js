import axios from 'axios';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { 
    URL,
    GET_CURRENCY_LIST_INIT,
    SWAP_CURRENCY_INIT
} from '../constants/index'
import { 
    getCurrencyListAction,
    swapCurrencyAction
} from '../actions/index';

function fetchGetInitialUsersList(currency) {
    return axios.get(`${URL}?base=${currency}`);
}

function* getInitialCurrencyList (data) {
    try {
        const response = yield call(fetchGetInitialUsersList, data.currency);
        const currencyList = response.data;
    
        yield put (getCurrencyListAction(currencyList));
        
      } catch (error) {
        console.log("Something went wrong!");
    }
}

function* swapCurrency (data) {
    try {
        const response = yield call(fetchGetInitialUsersList, data.currencyToChange);
        const currencyList = response.data;
    
        yield put (swapCurrencyAction(currencyList, data.currentCurrency));
        
      } catch (error) {
        console.log("Something went wrong!");
    }
}


function* watchCurrency() {
    yield takeLatest(GET_CURRENCY_LIST_INIT, getInitialCurrencyList);
    yield takeLatest(SWAP_CURRENCY_INIT, swapCurrency);
}

export default watchCurrency;