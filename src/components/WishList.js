import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


export default function WishList() {
 
    const[wishData,setWishData]=useState();
    const dispatch=useDispatch();
    const{wishList}=useSelector((state)=>{
        console.log(state)
        return state.carts;
        
    })

    useEffect(()=>{
        //console.log("wishlist",wishList);
        setWishData(wishList);
    },[wishList])
    //console.log("Wishdata",wishData);
  return (
  <>
  
    <div>
        <span style={{fontWeight:"bold",fontSize:"2rem"}}>WhishList</span>
      {wishData?.map((product) => {
        return (
          <div key={product.id} className="cart-box">
            <div className="cart-img">
              <img src={product.image} />
              <div className="d-flex flex-column">
              <p>{product.title}</p>
              Price:<p>{product.price}</p>
              {/* <p>{ProductData.department}</p>
              <p>Size: {ProductData.size}</p>
              <p>Color: {ProductData.color}</p> */}
              </div>
            </div>
            {/* <div>
              <Button  className="incbtn">+</Button>
              <Button className="btnd" >q</Button>
              <Button className="incbtn" >-</Button>
            </div> */}
            <div>
              {/* <span className="prodprice">{product.price}</span> */}
              <Button className="removebtn" onClick={()=>{dispatch({type:"REMOVE_FROM_WISHLIST",payload:product})}} >
                Remove-from-WishList
              </Button>
            </div>
          </div>
        );
      })}
      {/* <div className="total">
        <span>Total Price</span>
        <span>Rs - </span>
      </div> */}
    </div>
    </>
  );
}
