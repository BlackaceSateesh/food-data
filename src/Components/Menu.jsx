import { createContext, useContext, useState } from "react";
import "../Components/Menu.css"
import data from "../Components/feed";
import Ordersummary from "./OrderSummary";


const Menu = () => {

    const [product, setProduct] = useState(data);
    const [orderData, setOrderData] = useState([]);

    const SendValue = createContext();

    <SendValue.Provider value={orderData}>
        <Ordersummary/>
    </SendValue.Provider>

const increamentValue = (e)=> {
    const newdata = e.target.value;
    setOrderData(newdata)
    // setOrderData([...newdata],()=>{
    //     orderData.push(newdata)
    // })
}   


  return (
    <>
    <div className="menu-main">

        <div className="menu-cards">

            {product.map((curElem,index)=>{
                const {name, price, image} =curElem;
                return( <div key={index} className="menu-card">
                <div className="product-img"><img src={`../images/${image}`} alt="product-img" /></div>
                <div className="product-detail">
                    <h3  className="product-name">{name}</h3>
                    <h6 className="product-price">Price : {price}</h6>

                    <div  className="pro-inc-dec-btn-box">
                       < button value={name} onClick={increamentValue} className="inc-btn">+</button>
                        <button  className="inc-btn dec-btn">-</button>
                    </div>
                </div>

            </div>)
            })}
           
        </div>

    </div>
    </>
  );
}

export default Menu;
// export {SendValue};