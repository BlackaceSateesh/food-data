import { useState } from "react";
import "../Components/OrderSummary.css"
import { NavLink } from "react-router-dom";


const Ordersummary = () =>{

    const [productValue, setProductValue] = useState(1);
    const [productAmt, setProductAmt] = useState(120);
    const [totalValue, setTotalValue] = useState(productAmt);
    

    const incValue =()=>{
        setProductValue(productValue+1)
        setTotalValue(productValue*productAmt);
    }
    const decValue =()=>{
        if(productValue<=1){
            alert("minimum quantity 1")
        }else{

            setProductValue(productValue-1)
            const total = (productValue-1)*productAmt;
        setTotalValue(total);

        }
    }


    console.log(totalValue);
    return(<>
    <div className="order-main">

        <div className="summary-card">
            <div ><h1 className="summary-heading">Order Summary</h1></div>
            <div className="summary-details">
                <div className="order-product-det">
                    <h3 className="order-pro-name">coke : 120</h3>
                    <p className="order-pro-quantity"></p>
                    
                </div>
                <div className="pro-inc-dec-btn-box order-inc-btn">
                       < button onClick={incValue} className="inc-btn ">+</button>
                        <button onClick={decValue} className="inc-btn">-</button>
                    </div>

            </div>
            <div className="total">Total (INR) : {totalValue} </div>
            <div className="checkout-btn-box">
                <button className="checkout-btn"><NavLink to="/ordered">save and checkout</NavLink></button>
                <button className="cancel-btn"><NavLink to="/menu">cancel</NavLink></button>

            </div>
        </div>
    </div>
    </>)
};


export default Ordersummary;