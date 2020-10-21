import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Form  } from 'antd';

import { 
  getCurrencyListInitAction,
  changeAmountAction,
  changeCurrencyAction,
  swapCurrencyInitAction
} from '../store/actions/index';
import CurrencyItem from './CurrencyItem';
import { SwapOutlined } from '@ant-design/icons';

const { Content } = Layout;

class App extends Component{

  componentDidMount = () => {
    this.props.getCurrencyListInitAction(this.props.currentCurrency);
  }

  changeAmount = (value) => {
    this.props.changeAmountAction(value);
  }

  changeDefaultCurrency = (value) => {
    this.props.getCurrencyListInitAction(value);
  }

  changeCurrency = (value) => {
    this.props.changeCurrencyAction(value);
  }

  swapCurrency = () => {
    this.props.swapCurrencyInitAction(this.props.currentCurrency, this.props.currencyToChange);
  }
  
  render() {
      const { 
        currencyList,
        currentCurrency, 
        currencyToChange, 
        setAmount 
      } = this.props;
      const currencyName = currencyList ? Object.keys(currencyList) : [];

      return (
        <Layout>
          <Content>
            <Form>
              <Row>
                <Col span={24}>
                  <h1>Currency converter</h1>
                </Col>
                <Col span={24}>
                  <CurrencyItem 
                    currencyName={currencyName} 
                    currentCurrency={currentCurrency} 
                    onChangeAmount={this.changeAmount} 
                    onChangeCurrency={this.changeDefaultCurrency}
                  />
                </Col>
                <Col span={24}>
                  <SwapOutlined onClick={this.swapCurrency}/>
                </Col>
                <Col span={24}>
                  <CurrencyItem 
                    currencyName={currencyName} 
                    currentCurrency={currencyToChange} 
                    setAmount={setAmount} 
                    onChangeCurrency={this.changeCurrency}
                    disabled={true}
                  />
                </Col>
              </Row>
            </Form>
          </Content>
        </Layout>
      )
  }
}

const mapStateToProps = store => ({
  amount: store.currency.amount,
  setAmount: store.currency.setAmount,
  currentCurrency: store.currency.currentCurrency,
  currencyToChange: store.currency.currencyToChange,
  currencyList: store.currency.currencyList,
})

const mapDispatchToProps = {
  getCurrencyListInitAction,
  changeAmountAction,
  changeCurrencyAction,
  swapCurrencyInitAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);