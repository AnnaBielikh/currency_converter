import { 
    GET_CURRENCY_LIST,
    CHANGE_AMOUNT,
    CHANGE_CURRENCY,
    SWAP_CURRENCY
} from '../constants/index';

const initial = {
    amount: null,
    setAmount: null,
    currentCurrency: 'USD',
    currencyToChange: 'EUR',
    currencyList: {}
}

const currencyReduser = (state = initial, action) => {
    switch (action.type) {
        case GET_CURRENCY_LIST:
            return {
                ...state,
                currentCurrency: action.data.base,
                currencyList: action.data.rates,
                setAmount: state.amount && state.amount*action.data.rates[state.currencyToChange]
            };
        case CHANGE_AMOUNT:
            return {
                ...state,
                amount: action.data,
                setAmount: action.data*state.currencyList[state.currencyToChange]
            };
        case CHANGE_CURRENCY:
            return {
                ...state,
                currencyToChange: action.data,
                setAmount: state.amount*state.currencyList[action.data]
            };
        case SWAP_CURRENCY:
            return {
                ...state,
                currencyList: action.data.rates,
                currentCurrency: action.data.base,
                currencyToChange: action.currentCurrency,
                setAmount: state.amount && state.amount*action.data.rates[action.currentCurrency]
            };
        default:
            return state;
    }
}

export default currencyReduser