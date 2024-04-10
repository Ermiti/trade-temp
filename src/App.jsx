import logo from './logo.svg';
import './App.css';
import { LeftSide } from './LeftSide';
import { Table } from './table';
import { RS } from './rightSide';

function App() {
  return (
    <div className="App">
      <LeftSide />
      <Table usdOrBtc0={'BTC '} usdOrBtc={'USD '} amntOne={"1200"} amntTwe={'0.450122'} className={'table buy'} receiveAmnt={"0.450122BTC"} sellOrBuy={'Buy'} text={'I want to buy'} btnClass={'button button-buy'} inputBtn={'input-btn input-btn-buy'}/>
      <Table usdOrBtc0={'USD '} usdOrBtc={'BTC '} amntOne={"0"} amntTwe={'0'} className={'table sell'} receiveAmnt={'0.000000BTC'} sellOrBuy={'Buy'} text={'I want to buy'} btnClass={'button button-sell'} inputBtn={'input-btn input-btn-sell'} />
      <RS />
    </div>
  );
}

export default App;
