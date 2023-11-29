import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProductAction,
  deleteProductActionCreator,
} from "../store/actions/productActions";
import { REQ_TYPES, useAxios } from "../hooks/useAxios";
import { useEffect } from "react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const [deleteResponse, deleteProduct, deleteLoading, deleteError] = useAxios({
    reqType: REQ_TYPES.DELETE,
    endpoint: "/products/" + product.id,
    successCallback: () => {
      console.log(
        "successCallback > DELETE işlemi başarıyla tamamlandı ve yakalandı"
      );
    },
    errorCallback: () => {},
  });

  const del = () => {
    console.time();
    // dispatch(deleteProductActionCreator(product.id));
    deleteProduct()
      .then((resData) => {
        console.log(
          "PROMISE CHAINING SUCCESS > Delete Silme başarıyla tamamlandı "
        );
      })
      .catch((err) => {
        console.log(
          "PROMISE CHAINING ERROR > Delete Silme başarıyla tamamlandı "
        );
      });
    console.timeEnd();
  };

  useEffect(() => {
    //console.log("deleteResponse: ", deleteResponse);
    if (deleteResponse) {
      // Silme işlemi başarıyla sonuçlandı
      console.log(
        "useEffect: deleteResponse Silme işlemi başarıyla tamamlandı!"
      );
    }
  }, [deleteResponse]);

  return (
    <div>
      <img src={product.img} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
      <Link
        className="btn btn-primary"
        to={`/products/${product.id}/${product.name
          .replaceAll(" ", "-")
          .toLowerCase()}`}
      >
        <i className="fa-solid fa-search me-2" />
        İncele
      </Link>
      <Link className="btn btn-primary" to={`/edit-product/${product.id}`}>
        <i className="fa-solid fa-pen me-2" />
        Düzenle
      </Link>
      <button className="btn btn-danger" onClick={del}>
        <i className="fa-solid fa-trash me-2" />
        Sil
      </button>
    </div>
  );
};

export default ProductCard;
