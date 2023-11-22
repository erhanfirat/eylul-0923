export const setProductsAction = (productList) => ({
  type: "SET_PRODUCTS",
  payload: productList,
});

export const deleteProductAction = (productId) => ({
  type: "DELETE_PRODUCT",
  payload: productId
});

export const productReducer = (
  state = {
    title: "Ürünler Redux",
    list: [],
    total: 0,
  },
  action
) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, list: action.payload, total: action.payload.length };
      break;

    case "SET_TITLE":
      return { ...state, title: action.payload };
      break;

    case "DELETE_PRODUCT":
      const newList = state.list.filter((p) => p.id !== action.payload);
      return {
        ...state,
        list: newList,
        total: newList.length,
      };

    default:
      return state;
      break;
  }
};
