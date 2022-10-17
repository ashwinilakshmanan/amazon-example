import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContext from "../contexts/AppContext";
import ProductCard from "./ProductCard";
import { setProducts } from "../actions/ProductAction";

export default function Products() {
  const [productList1, setProductList1] = useState([]);
  const { productList, searchText, dept } = useSelector((state) => {
    return state.products;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")?.then(async (response) => {
      const data = await response.json();
      //setProductList1(data);
      //console.log("Products",data)
      dispatch(setProducts(data));
    });
  }, []);

  useEffect(() => {
    setProductList1(productList);
  }, [productList]);
  // const products = useSelector((state) => {
  //   return state.products.productList;
  // });

  useEffect(() => {
    if (searchText) {
      const filteredProds = productList?.filter((p) => {
        return p.title?.toLowerCase().indexOf(searchText?.toLowerCase()) > -1;
      });
      setProductList1(filteredProds);
    }
  }, [searchText]);

  useEffect(() => {
    if (dept) {
      const filteredDept = productList?.filter((d) => {
        return d.category === dept;
      });
      setProductList1(filteredDept);
    }
  }, [dept]);

  return (
    <div className="d-flex flex-wrap">
      {productList1.map((p) => {
        return <ProductCard product={p} />;
      })}
    </div>
  );
}
