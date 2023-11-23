import axios from "axios";

export const FETCH_STATES = {
  notFethed: "NOT_FETCHED",
  fetching: "FETCHING",
  fethced: "FETCHED",
  error: "ERROR",
};

export const setProductFetchState = (fetchState) => ({
  type: "SET_PRODUCT_FETCH_STATE",
  payload: fetchState,
});

export const setProductsAction = (productList) => ({
  type: "SET_PRODUCTS",
  payload: productList,
});

export const deleteProductAction = (productId) => ({
  type: "DELETE_PRODUCT",
  payload: productId,
});

// redux thunk action
export const fetchProductsActionCreator = () => {
  // thunk function
  return (dispatch, getState) => {
    dispatch(setProductFetchState(FETCH_STATES.fetching));
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        dispatch(setProductsAction(res.data));
        dispatch(setProductFetchState(FETCH_STATES.fethced));
      })
      .catch((err) => {
        dispatch(setProductFetchState(FETCH_STATES.error));
      });
  };
};

// redux thunk action
export const fetchProductActionCreator = (productId) => {
  // thunk function
  return (dispatch, getState) => {
    axios
      .get(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId
      )
      .then((res) => {
        dispatch({
          type: "SET_PRODUCT",
          payload: res.data,
        });
      });
  };
};

// redux thunk action
export const deleteProductActionCreator = (productId) => {
  // thunk function
  return (dispatch, getState) => {
    axios
      .delete(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId
      )
      .then((res) => {
        dispatch(deleteProductAction(productId));
      });
  };
};
