const yetkiGerektirenActionlar = [
  "DELETE_PRODUCT",
  "DELETE_STUDENT",
  "EDIT_STUDENT",
  "EDIT_PRODUCT",
];

export const yetkiKontrolu = (store) => (next) => (action) => {
  if (yetkiGerektirenActionlar.includes(action.type)) {
    if (store.getState().user.email && store.getState().user.name) {
      next(action);
    } else {
      // işlem iptal edilecek
      console.error(
        `${action.type} action'ını tetiklemek için kullanıcı girişi yapmalısınız.`
      );
    }
  } else {
    next(action);
  }
};
