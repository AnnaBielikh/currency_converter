import { 
    GET_CURRENCY_LIST,
    GET_CURRENCY_LIST_INIT,
    CHANGE_AMOUNT,
    CHANGE_CURRENCY,
    SWAP_CURRENCY,
    SWAP_CURRENCY_INIT
} from '../constants/index';

export const getCurrencyListAction = (data) => ({
    type: GET_CURRENCY_LIST,
    data
});

export const getCurrencyListInitAction = (currency) => ({
    type: GET_CURRENCY_LIST_INIT,
    currency
});

export const changeAmountAction = (data) => ({
    type: CHANGE_AMOUNT,
    data
});

export const changeCurrencyAction = (data) => ({
    type: CHANGE_CURRENCY,
    data
});

export const swapCurrencyAction = (data, currentCurrency) => ({
    type: SWAP_CURRENCY,
    data,
    currentCurrency
});

export const swapCurrencyInitAction = (currentCurrency, currencyToChange) => ({
    type: SWAP_CURRENCY_INIT,
    currentCurrency,
    currencyToChange
});