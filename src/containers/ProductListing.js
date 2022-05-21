import React from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent.js";
import { useSelector } from "react-redux";
const ProductListing = () => {
  const products = useSelector((state) => state);

  const fetchProducts = async () => {
    const respons = await axios.get("https://fakestoreapi.com/products").catch(err=>{
      console.log('Err', err);
    })
    }
    console.log(respons);
  };
  useEffect(()=>{

  },[])
  console.log(products);
  return (
    <div className="ui  grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
