import React from 'react';
import { Select , InputNumber } from 'antd';

const { Option } = Select;

const CurrencyItem = (props) => {
    const { 
        currencyName, 
        currentCurrency, 
        onChangeAmount, 
        onChangeCurrency, 
        setAmount,
        disabled
    } = props;
    
    const prepareInput = (value) => {
        if((typeof (value)) && value >= 0) {
            onChangeAmount(value);
        }
    }

    return (
        <React.Fragment>
            {disabled ? 
            (<InputNumber value={setAmount && setAmount} readOnly />) 
            : 
            (<InputNumber min={0} onChange={prepareInput}/>)}

            <Select showSearch value={currentCurrency} onChange={onChangeCurrency}>
                {currencyName.map(item =>
                    <Option key={item}>{item}</Option>
                )}
            </Select>
        </React.Fragment>
    )
}

export default CurrencyItem;