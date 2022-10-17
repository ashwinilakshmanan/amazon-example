import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDepartment } from "../actions/ProductAction";
import {ProductCard}from "../components/ProductCard"

export default function Department() {
  
  const dispatch = useDispatch();
  const{productList}=useSelector((state)=>{
    return state.products;
  })
  const[filter,setFilter]=useState(productList)
  const onDeptClick = (event) => {
    dispatch(setDepartment(event));
  };

  // const filterDept=(dept)=>{
  //   const filteredProducts=productList.filter((d)=>d.category===dept);
  //   setFilter(filteredProducts);
  // }
  return (
    <>
      <div style={{ marginleft: "50px" }}>
        <b style={{paddingleft:"30px"}}>Department</b>
        <br />
        <div >
          <button
            className="btn btn-link dept"
            onClick={() => {
              onDeptClick("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-link dept"
            onClick={() => {
              onDeptClick("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-link dept"
            onClick={() => {
              onDeptClick("jewelery");
            }}
          >
            Jewelery
          </button>
          <button
            className="btn btn-link dept"
            onClick={() => {
              onDeptClick("electronics");
            }}
          >
            Electronics
          </button>
        </div>
      </div>
    </>
  );

 
}
