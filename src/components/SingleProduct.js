import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToWishlist, setSelectedProduct } from "../actions/ProductAction";
import { addToCart } from "../actions/ProductAction";

export default function SingleProduct(props) {
  const [productDetail, setProductDetail] = useState();
  let params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => {
    return state.products.productList;
  });
  // console.log("single",product);

  const productId = params.productId;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`).then(
      async (response) => {
        const data = await response.json();
        setProductDetail(data);
        //console.log("single", data);
        dispatch(setSelectedProduct(data));
      }
    );
  }, [productId]);

  //add click
  const onAddToCart = (product) => {
    product.qty=1;
    dispatch(addToCart(product));
    alert("Item added to Cart")
  };

  //add wishlist
  const onAddToWishList=(event)=>{
    dispatch(addToWishlist(event));
     alert("Item Added to WishList");
  }

  // useEffect(()=>{
  // console.log("Fetching from api",productId)
  // },[productId])

  

  const filteredProd = product?.filter((p) => {
    return p.id == productId;
  });

  return filteredProd.map((prod) => {
    return (
      <>
        <div>
          <Card
            key={prod.id}
            className="card h-100 text-center p-3 m-2"
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              className="card-img-top"
              src={prod.image}
              height250px
            />
            <Card.Body className="card-body">
              <div>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text className="card-text lead fw-bold">
                  {prod.price}
                </Card.Text>
                {/* <Button className="btn btn-outline-dark">Buy Now</Button> */}
                <div>
                <Button
                  className="btn btn-outline-dark addcartbtn"
                  onClick={() => { onAddToCart(prod)}}> 
                  Add-To-Cart
                </Button>
                <Button
                  className="btn btn-outline-dark" onClick={()=>{onAddToWishList(prod)}}>
                  Add-to-Whishlist
                </Button>
                </div>
               
              </div>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  });
}
