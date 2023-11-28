import { AxiosInstance } from "../../api/api";

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
    AxiosInstance.get("/products")
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
    AxiosInstance.get("/products/" + productId).then((res) => {
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
    AxiosInstance.delete("/products/" + productId).then((res) => {
      dispatch(deleteProductAction(productId));
    });
  };
};
