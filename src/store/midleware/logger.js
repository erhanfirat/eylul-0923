export const logger = (store) => (next) => (action) => {
  console.warn("***************** REDUX ACTION START *****************");
  console.log("[Middleware] Şimdiki state:", store.getState());
  console.log("[Middleware] Şu aksiyon dispatch edilecek:", action);
  const result = next(action);
  console.log("[Middleware] Sonraki state:", store.getState());
  console.log("***************** REDUX ACTION END *****************");

  return result;
};
