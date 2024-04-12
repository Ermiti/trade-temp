import './App.css'
import './RSrow.css'
import search from './search.jpg'
import ether from './etherium.png'
import { Row } from './RSrow'
export function RS(){
    return(
        
        <div className='rightSide div'>
            <h5 className='abs' style={{margin: '3rem 0 1rem 1rem'}}>Cryptocurrencies list</h5>
            <input type="text" id="inptRS"/>
            <img src={search}alt="" id='search'/>
            <Row title={'Ethereum'} logo={ether} price={'3,245.03'} rate={'-13.40'} value={'0.12543 ETH'}/>
            <Row title={'Ethereum'} logo={ether} price={'3,245.03'} rate={'-13.40'} value={'0.12543 ETH'}/>
            <Row title={'Ethereum'} logo={ether} price={'3,245.03'} rate={'-13.40'} value={'0.12543 ETH'}/>
            <Row title={'Ethereum'} logo={ether} price={'3,245.03'} rate={'-13.40'} value={'0.12543 ETH'}/>
            <Row title={'Ethereum'} logo={ether} price={'3,245.03'} rate={'-13.40'} value={'0.12543 ETH'}/>
            <Row title={'Ethereum'} logo={ether} price={'3,245.03'} rate={'-13.40'} value={'0.12543 ETH'}/>
            <Row title={'Ethereum'} logo={ether} price={'3,245.03'} rate={'-13.40'} value={'0.12543 ETH'}/>
           <button className='btn'>See More</button>
        </div>
    )
}