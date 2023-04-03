import logo from '/public/images/logo.svg'

export default function Balance(){
    return(
        <div className='BalanceBox'>
            <div className='BalanceTotal'>
                <p>My balance</p>
                <h1>$921.48</h1>
            </div>
            <img src={logo}></img>
        </div>
    )
}