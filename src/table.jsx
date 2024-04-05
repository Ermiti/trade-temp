import lock from './lock.png'
export function Table({ text, usdOrBtc0, usdOrBtc, className, amntOne, amntTwe, receiveAmnt, sellOrBuy }) {
    return (
        <div className={className}>
            <h5>{text}</h5>
            <form action="/action_page.php">
                <div className="form">
                    <h5 className="h5 h">Amount</h5>
                    <div>

                        <img src={lock}></img>
                        <input type="text" value={amntOne}></input>
                        <button className='input-btn'>{usdOrBtc}</button>
                    </div>
                    <br></br>
                    <h5 className="h5 h">Amount</h5>
                    <div>

                        <img src={lock}></img>
                        <input type="text" value={amntTwe}></input>
                        <button className='input-btn'>{usdOrBtc0}</button>
                    </div>
                </div>
                <div className='gap'> <h5 className="h5 h">you will receive</h5> <h3>{receiveAmnt}</h3> </div>
                <button type="button" className='button' value="Submit">{sellOrBuy}</button>
            </form>


        </div>
    )
}