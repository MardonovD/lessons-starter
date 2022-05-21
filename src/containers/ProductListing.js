import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction.js";
import ProductComponent from "./ProductComponent.js";
import { useSelector, useDispatch } from "react-redux";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const respons = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(respons.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products", products);

  return (
    <div className="ui  grid container d-flex justify-content-between">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
