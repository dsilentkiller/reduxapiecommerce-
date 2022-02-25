import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constent/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/product");
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};
export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get("/products/${id}");
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedeProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
