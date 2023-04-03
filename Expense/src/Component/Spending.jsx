import data from '../data'

export default function Spending(){

    const dataPrice = data.map(item => item)
    console.log(dataPrice)

    return(
        
        <div className="secondContainer">
            <div>
                <h2 className="days"> Spending - Last 7 days</h2>
                <div className="WeeksChart">
                    <div className="Box1 Box"><div className="price">{dataPrice[0].amount}</div><p>{dataPrice[0].day}</p></div>
                    <div className="Box2 Box"><div className="price">{dataPrice[1].amount}</div><p>{dataPrice[1].day}</p></div>  
                    <div className="Box3 Box"><div className="price">{dataPrice[2].amount}</div><p>{dataPrice[2].day}</p></div>  
                    <div className="Box4 Box"><div className="price">{dataPrice[3].amount}</div><p>{dataPrice[3].day}</p></div>   
                    <div className="Box5 Box"><div className="price">{dataPrice[4].amount}</div><p>{dataPrice[4].day}</p></div>   
                    <div className="Box6 Box"><div className="price">{dataPrice[5].amount}</div><p>{dataPrice[5].day}</p></div>    
                    <div className="Box7 Box"><div className="price">{dataPrice[6].amount}</div><p>{dataPrice[6].day}</p></div>   
                </div>
                <hr></hr>
                <div className="lastBox">
                    <h3>Total this month</h3>
                    <div className="totalPrice">
                        <h1>$478.33</h1>
                        <div className="percentage">
                            <h4>+2.4%</h4>
                            <p>from last month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

