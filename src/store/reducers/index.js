import { combineReducers } from 'redux';

import currencyReduser from './currency';

const rootReducer = combineReducers({
    currency: currencyReduser
})

export default rootReducer