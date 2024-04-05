import logo from './logo.svg';
import './App.css';
import { LeftSide } from './LeftSide';
import { Table } from './table';

function App() {
  return (
    <div className="App">
      <LeftSide />
      <Table usdOrBtc0={'BTC '} usdOrBtc={'USD '} amntOne={1200} amntTwe={0.450122} className={'table buy'} receiveAmnt={0.450122} sellOrBuy={'Buy'} text={'I want to buy'}/>
    </div>
  );
}

export default App;
