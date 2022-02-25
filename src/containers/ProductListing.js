import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
// import ProductComponent from "./ProductComponent";
import ProductContainer from "./ProductContainer";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log("Products: ", products);
  return (
    <div className="ui grid container">
      <ProductContainer />
    </div>
  );
};

export default ProductListing;
