export function Row({ logo ,title, price, rate , value}) {
    function rateP(){
        if(Number(rate) < 0){
            return(
                    <p className="red">{rate}%</p>
            )
        }
        else{
            return(
                <p className="grin">{rate}%</p>
        )
        }
    }
    return (
        <div className="row">
            <img className="logo" src={logo} alt="" />
            <div className="flexC">
                <h5>{title}</h5>
                <h6 className="h6">${price}</h6>
            </div>
            <div className="flexC">
                {rateP()}
                <h6>{value}</h6>
            </div>
        </div>
    )
}
