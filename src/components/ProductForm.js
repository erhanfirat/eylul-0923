import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";

const productEmpty = {
  name: "",
  description: "",
  img: "",
  price: 0,
};

const ProductForm = ({ fetchProducts, productData = productEmpty }) => {
  const [product, setProduct] = useState(productData);
  const history = useHistory();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("FROM SUBMIT EDİLDİ! ", e);

    //todo: eğer yeni ürünse post, güncelleme ise put req yap
    const reqType = product.id ? "put" : "post";
    const endpoint = `https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products${
      reqType === "put" ? "/" + product.id : ""
    }`;

    axios[reqType](endpoint, product)
      .then((res) => {
        console.log("ürün başarıyla kaydedildi!");
        fetchProducts().then(() => {
          // fetch products bitti
          history.push("/products");
        });
        // todo: redirect to products page
      })
      .catch((err) => {
        console.error("Ürün kaydedilirken bir hata ile karşılaşıldı: ", err);
      });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    console.log("product > ", product);
  }, [product]);

  useEffect(() => {
    productData && setProduct(productData);
  }, [productData]);

  return (
    <Form onSubmit={formSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Ürün adı</Form.Label>
        <Form.Control
          id="name"
          type="text"
          onChange={inputChangeHandler}
          value={product.name}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="img">Fotoğraf</Form.Label>
        <Form.Control
          id="img"
          type="url"
          onChange={inputChangeHandler}
          value={product.img}
          name="img"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="description">Açıklama</Form.Label>
        <Form.Control
          id="description"
          type="text"
          onChange={inputChangeHandler}
          value={product.description}
          name="description"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="price">Fiyat</Form.Label>
        <Form.Control
          id="price"
          type="number"
          onChange={inputChangeHandler}
          value={product.price}
          name="price"
        />
      </Form.Group>

      <button
        className="btn btn-danger me-2"
        type="button"
        onClick={() => {
          setProduct({ name: "", description: "", img: "", price: 0 });
        }}
      >
        Formu Temizle
      </button>
      <button className="btn btn-primary" type="submit">
        Kaydet
      </button>
    </Form>
  );
};

export default ProductForm;
