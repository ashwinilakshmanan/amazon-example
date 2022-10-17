import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../styles/cart.css";

export default function Cart() {
  const [cartData, setCartData] = useState();
  const dispatch = useDispatch();
  const { cartList, incItem } = useSelector((state) => {
    return state.carts;
  });

  useEffect(() => {
    //console.log("cartlist1", cartList);
    setCartData(cartList);
  }, [cartList]);
  console.log("Cartdata", cartData);

  // const onRemoveFromCart=(event)=>{
  //   dispatch(setCartData(event));
  // }

  const calculateTotalPrice = () => {
    let amt = 0;
    cartData?.map((p) => {
      amt = amt + p.qty * p.price;
      
    });
    return amt;
  };

  return (
    <>
      {/* <span style={{fontWeight:"bold",fontSize:"2rem"}}>CartItems</span> */}
      {cartData?.map((data) => {
        return (
          <div key={data.id} className="cart-box">
            <div className="cart-img">
              <img src={data.image} />
              <div className="d-flex flex-column">
                <p>{data.title}</p>
              </div>
            </div>
            <div>
              <Button
                className="incbtn"
                onClick={() => {
                  dispatch({ type: "UPDATE_ITEM_QTY", payload:{item:data,action:'increment'} });
                }}
              >
                +
              </Button>
              <Button className="btnd">{data.qty}</Button>
              <Button className="incbtn"  onClick={() => {
                  dispatch({ type: "UPDATE_ITEM_QTY", payload:{item:data,action:'decrement'} });
                }}>-</Button>
            </div>
            <div>
              <span className="prodprice">{data.price * data.qty}</span>
              <Button
                className="removebtn"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: data });
                }}
              >
                Remove-from-Cart
              </Button>
            </div>
          </div>
        );
      })}
      <div className="total">
        <span>Total Price</span>
        <span>Rs {calculateTotalPrice()} </span>
      </div>
    </>
  );
}
