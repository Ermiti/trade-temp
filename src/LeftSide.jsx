import { LSdiv } from "./LSdiv";
import logo from './logoA.png'
import logOut from './logout.png'
import notif from './notif1.png'
import setting from './setting.png'
import calender from './calender1.png'
import wallet from './wallet2.png'
import chart from './chart.png'
import Untitled from './Untitled.png'
import './App.css'
export function LeftSide() {
    return (
        <div className="left-side">
            <LSdiv className={'blue'} logo={logo} text={'Dashboard'} />

            <h5 className="h5">Market</h5>
            <LSdiv logo={chart} text={'Stock market'} />
            <LSdiv logo={Untitled} text={'My offers'} />
            <h5 className="h5">Account</h5>
            <LSdiv logo={wallet} text={'Wallet'} />
            <LSdiv logo={calender} text={'History'} />
            <LSdiv logo={setting} text={'Setting'} />


            <section>

            </section>

            <LSdiv logo={notif} text={'Notifications'} />
            <LSdiv logo={logOut} text={'Log out'} />
        </div>
    )
}
