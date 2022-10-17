import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../actions/ProductAction";
import "../styles/Prodcard.css";

export default function ProductCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("card",product)
  const product = props.product;
 

  //add cart
  const onAddToCart = (product) => {
    product.qty=1;
    dispatch(addToCart(product));
    console.log("productqty",product.qty)
    alert("Item added to Cart")
  };

  return (
    <>
    
      <div style={{ marginBottom: "50px" }} className="shadowcard" >
        <Card
          key={product.id}
          className="card h-100 text-center p-3 m-2"
          style={{ width: "18rem" }}
          onClick={() => {
            navigate("/products/" + product.id);
          }}
        >
          <Card.Img
            variant="top"
            className="cardimg"
            src={product.image}
            height250px
          />
          <Card.Body className="card-body">
            <div className=" text-center cardtxt">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className="card-text lead fw-bold">
                {product.price}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        <div className="addcartbtn" >
       <Button className="btn btn-outline-dark " onClick={()=>{onAddToCart(product)}}>  
           Add-To-Cart
        </Button>
      </div>
      </div>

      
    </>
  );
}
