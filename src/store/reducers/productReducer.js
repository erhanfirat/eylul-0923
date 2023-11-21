export const setProductsAction = (productList) => ({
  type: "SET_PRODUCTS",
  payload: productList,
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

    default:
      return state;
      break;
  }
};
