import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { fetchProductsActionCreator } from "../store/actions/productActions";
import { AxiosInstance } from "../api/api";

const productEmpty = {
  name: "",
  description: "",
  img: "",
  price: 0,
  active: false,
  color: "",
};

const colorList = [
  "AliceBlue",
  "#F0F8FF",
  "AntiqueWhite",
  "#FAEBD7",
  "Aqua",
  "#00FFFF",
  "Aquamarine",
  "#7FFFD4",
  "Azure",
  "#F0FFFF",
  "Beige",
  "#F5F5DC",
  "Bisque",
  "#FFE4C4",
  "Black",
  "#000000",
  "BlanchedAlmond",
  "#FFEBCD",
  "Blue",
  "#0000FF",
  "BlueViolet",
  "#8A2BE2",
  "Brown",
  "#A52A2A",
  "BurlyWood",
  "#DEB887",
  "CadetBlue",
  "#5F9EA0",
  "Chartreuse",
  "#7FFF00",
  "Chocolate",
  "#D2691E",
  "Coral",
  "#FF7F50",
  "CornflowerBlue",
  "#6495ED",
  "Cornsilk",
  "#FFF8DC",
  "Crimson",
  "#DC143C",
  "Cyan",
  "#00FFFF",
  "DarkBlue",
  "#00008B",
  "DarkCyan",
  "#008B8B",
  "DarkGoldenRod",
  "#B8860B",
  "DarkGray",
  "#A9A9A9",
  "DarkGrey",
  "#A9A9A9",
  "DarkGreen",
  "#006400",
  "DarkKhaki",
  "#BDB76B",
  "DarkMagenta",
  "#8B008B",
  "DarkOliveGreen",
  "#556B2F",
  "DarkOrange",
  "#FF8C00",
  "DarkOrchid",
  "#9932CC",
  "DarkRed",
  "#8B0000",
  "DarkSalmon",
  "#E9967A",
  "DarkSeaGreen",
  "#8FBC8F",
  "DarkSlateBlue",
  "#483D8B",
  "DarkSlateGray",
  "#2F4F4F",
  "DarkSlateGrey",
  "#2F4F4F",
  "DarkTurquoise",
  "#00CED1",
  "DarkViolet",
  "#9400D3",
  "DeepPink",
  "#FF1493",
  "DeepSkyBlue",
  "#00BFFF",
  "DimGray",
  "#696969",
  "DimGrey",
  "#696969",
  "DodgerBlue",
  "#1E90FF",
  "FireBrick",
  "#B22222",
  "FloralWhite",
  "#FFFAF0",
  "ForestGreen",
  "#228B22",
  "Fuchsia",
  "#FF00FF",
  "Gainsboro",
  "#DCDCDC",
  "GhostWhite",
  "#F8F8FF",
  "Gold",
  "#FFD700",
  "GoldenRod",
  "#DAA520",
  "Gray",
  "#808080",
  "Grey",
  "#808080",
  "Green",
  "#008000",
  "GreenYellow",
  "#ADFF2F",
  "HoneyDew",
  "#F0FFF0",
  "HotPink",
  "#FF69B4",
  "IndianRed",
  "#CD5C5C",
  "Indigo",
  "#4B0082",
  "Ivory",
  "#FFFFF0",
  "Khaki",
  "#F0E68C",
  "Lavender",
  "#E6E6FA",
  "LavenderBlush",
  "#FFF0F5",
  "LawnGreen",
  "#7CFC00",
  "LemonChiffon",
  "#FFFACD",
  "LightBlue",
  "#ADD8E6",
  "LightCoral",
  "#F08080",
  "LightCyan",
  "#E0FFFF",
  "LightGoldenRodYellow",
  "#FAFAD2",
  "LightGray",
  "#D3D3D3",
  "LightGrey",
  "#D3D3D3",
  "LightGreen",
  "#90EE90",
  "LightPink",
  "#FFB6C1",
  "LightSalmon",
  "#FFA07A",
  "LightSeaGreen",
  "#20B2AA",
  "LightSkyBlue",
  "#87CEFA",
  "LightSlateGray",
  "#778899",
  "LightSlateGrey",
  "#778899",
  "LightSteelBlue",
  "#B0C4DE",
  "LightYellow",
  "#FFFFE0",
  "Lime",
  "#00FF00",
  "LimeGreen",
  "#32CD32",
  "Linen",
  "#FAF0E6",
  "Magenta",
  "#FF00FF",
  "Maroon",
  "#800000",
  "MediumAquaMarine",
  "#66CDAA",
  "MediumBlue",
  "#0000CD",
  "MediumOrchid",
  "#BA55D3",
  "MediumPurple",
  "#9370DB",
  "MediumSeaGreen",
  "#3CB371",
  "MediumSlateBlue",
  "#7B68EE",
  "MediumSpringGreen",
  "#00FA9A",
  "MediumTurquoise",
  "#48D1CC",
  "MediumVioletRed",
  "#C71585",
  "MidnightBlue",
  "#191970",
  "MintCream",
  "#F5FFFA",
  "MistyRose",
  "#FFE4E1",
  "Moccasin",
  "#FFE4B5",
  "NavajoWhite",
  "#FFDEAD",
  "Navy",
  "#000080",
  "OldLace",
  "#FDF5E6",
  "Olive",
  "#808000",
  "OliveDrab",
  "#6B8E23",
  "Orange",
  "#FFA500",
  "OrangeRed",
  "#FF4500",
  "Orchid",
  "#DA70D6",
  "PaleGoldenRod",
  "#EEE8AA",
  "PaleGreen",
  "#98FB98",
  "PaleTurquoise",
  "#AFEEEE",
  "PaleVioletRed",
  "#DB7093",
  "PapayaWhip",
  "#FFEFD5",
  "PeachPuff",
  "#FFDAB9",
  "Peru",
  "#CD853F",
  "Pink",
  "#FFC0CB",
  "Plum",
  "#DDA0DD",
  "PowderBlue",
  "#B0E0E6",
  "Purple",
  "#800080",
  "RebeccaPurple",
  "#663399",
  "Red",
  "#FF0000",
  "RosyBrown",
  "#BC8F8F",
  "RoyalBlue",
  "#4169E1",
  "SaddleBrown",
  "#8B4513",
  "Salmon",
  "#FA8072",
  "SandyBrown",
  "#F4A460",
  "SeaGreen",
  "#2E8B57",
  "SeaShell",
  "#FFF5EE",
  "Sienna",
  "#A0522D",
  "Silver",
  "#C0C0C0",
  "SkyBlue",
  "#87CEEB",
  "SlateBlue",
  "#6A5ACD",
  "SlateGray",
  "#708090",
  "SlateGrey",
  "#708090",
  "Snow",
  "#FFFAFA",
  "SpringGreen",
  "#00FF7F",
  "SteelBlue",
  "#4682B4",
  "Tan",
  "#D2B48C",
  "Teal",
  "#008080",
  "Thistle",
  "#D8BFD8",
  "Tomato",
  "#FF6347",
  "Turquoise",
  "#40E0D0",
  "Violet",
  "#EE82EE",
  "Wheat",
  "#F5DEB3",
  "White",
  "#FFFFFF",
  "WhiteSmoke",
  "#F5F5F5",
  "Yellow",
  "#FFFF00",
  "YellowGreen",
  "#9ACD32",
].filter((color, i) => !(i % 2));

const ProductForm = ({ productData = productEmpty }) => {
  const [product, setProduct] = useState(productData);
  const [formErrors, setFormErrors] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    active: "",
    color: "",
  });
  const [formValid, setFormValid] = useState(true);

  const history = useHistory();
  const dispatch = useDispatch();

  const productFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("İsim alanı boş bırakılamaz!")
      .min(3, "Ürün ismi 3 karakterden az olamaz."),
    description: Yup.string().required("Açıklama alanı zorunludur."),
    img: Yup.string()
      .url("Lütfen geçerli bir URL adresi giriniz.")
      .required("Lütfen ürün fotoğrafı ekleyiniz"),
    price: Yup.number().positive("Fiyat bilgisi eksi değer alamaz."),
    active: Yup.boolean(),
    color: Yup.string().required("Lütfen renk seçiniz."),
    createdAt: Yup.string(),
    id: Yup.string(),
    stock: Yup.number(),
  });

  const formSubmit = (e) => {
    e.preventDefault();
    for (let key in product) {
      console.log(
        "checkValidationFor(key, product[key]) > ",
        key,
        product[key]
      );
      checkValidationFor(key, product[key]);
    }

    if (formValid) {
      console.log("FROM SUBMIT EDİLDİ! ", e);

      //todo: eğer yeni ürünse post, güncelleme ise put req yap
      const reqType = product.id ? "put" : "post";
      const endpoint = `/products${reqType === "put" ? "/" + product.id : ""}`;

      AxiosInstance[reqType](endpoint, product)
        .then((res) => {
          console.log("ürün başarıyla kaydedildi!");
          dispatch(fetchProductsActionCreator());
        })
        .catch((err) => {
          console.error("Ürün kaydedilirken bir hata ile karşılaşıldı: ", err);
        });
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({ ...product, [name]: type === "checkbox" ? checked : value });

    checkValidationFor(name, type === "checkbox" ? checked : value);
  };

  const checkValidationFor = (field, value) => {
    Yup.reach(productFormSchema, field)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [field]: "" });
      })
      .catch((err) => {
        console.log("HATA! ", field, err.errors[0]);

        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          [field]: err.errors[0],
        }));
      });
    /*
    setFormErrors({ name: "", decription: "", img: "", price: "", name: "hata mesajı"});
    setFormErrors({ name: "", decription: "", img: "", price: "", decription: "hata mesajı"});
    setFormErrors({ name: "", decription: "", img: "", price: "", img: "hata mesajı"});
    setFormErrors({ name: "", decription: "", img: "", price: "", price: "hata mesajı"});
    */
  };

  // ESLint - Ecma Script Lint
  // const func = () => {{{{{}

  useEffect(() => {
    console.error("form error > ", formErrors);
  }, [formErrors]);

  useEffect(() => {
    productData && setProduct(productData);
  }, [productData]);

  useEffect(() => {
    console.log("product > ", product);
    productFormSchema.isValid(product).then((valid) => setFormValid(valid));
  }, [product]);

  return (
    <Form onSubmit={formSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Ürün adı</Form.Label>
        <Form.Control
          id="name-input"
          type="text"
          onChange={inputChangeHandler}
          value={product.name}
          name="name"
          isInvalid={!!formErrors.name}
        />
        <Form.Control.Feedback id="name-validation" type="invalid">
          {formErrors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="img">Fotoğraf</Form.Label>
        <Form.Control
          id="img"
          type="url"
          onChange={inputChangeHandler}
          value={product.img}
          name="img"
          isInvalid={!!formErrors.img}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.img}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="description">Açıklama</Form.Label>
        <Form.Control
          id="description"
          type="text"
          onChange={inputChangeHandler}
          value={product.description}
          name="description"
          isInvalid={!!formErrors.description}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.description}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="price">Fiyat</Form.Label>
        <Form.Control
          id="price"
          type="number"
          onChange={inputChangeHandler}
          value={product.price}
          name="price"
          isInvalid={!!formErrors.price}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.price}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="price">Renk</Form.Label>
        <Form.Select
          name="color"
          value={product.color}
          onChange={inputChangeHandler}
          isInvalid={!!formErrors.color}
        >
          <option value={""} default disabled>
            Lütfen renk değerini seçiniz
          </option>
          {colorList.map((color) => (
            <option key={color} value={color.toLowerCase()}>
              {color}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {formErrors.color}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          id="active"
          type="checkbox"
          label="Aktif mi?"
          onChange={inputChangeHandler}
          checked={product.active}
          name="active"
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
