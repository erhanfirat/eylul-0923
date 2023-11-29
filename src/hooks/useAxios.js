/**
 * Params:
 * - * Request Type: put, post, get, delete
 * - * URL: endpoint
 * - ? payload: data to send in case of need (POST, PUT için geçerli)
 * - ? config: axios request configutaion
 * - ? initialData: response datanın başlangıç değeri
 */

import { useState } from "react";
import { AxiosInstance } from "../api/api";
import { toast } from "react-toastify";

export const REQ_TYPES = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
};

export const useAxios = ({
  reqType,
  endpoint,
  payload,
  config,
  initialData,
  successCallback, // function
  errorCallback, // function
}) => {
  const [data, setData] = useState(initialData);
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  //  request gerçekleştirmesi ?
  const doRequest = () => {
    setLoading(true);
    return AxiosInstance[reqType](endpoint, payload ? payload : config, config)
      .then((res) => {
        setData(res.data);
        successCallback && successCallback();
        return res.data;
      })
      .catch((error) => {
        // Uygulamanın tüm requestleri için Error Handling mekanizması buraya eklenebilir
        toast(
          `${endpoint} URL ine ${reqType} isteği gönderilirken bir hata ile karşılaşıldı.`
        );
        //hatayiDByeKaydet(err);
        setErr(error);
        errorCallback && errorCallback();
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [data, doRequest, loading, err];
};

// // Object Return
// const { data, doRequest, loading, err } = useAxios({});
// const {
//   data: yeniData,
//   doRequest: yeniDoReq,
//   loading: yeniLoading,
//   err: yeniErr,
// } = useAxios({});

// // Array Return

// const [products, getProducts, productsLoading, productsErr] = useAxios({});

/*
    Axios Method Signatures 
      axios.get(endpoint, config)
      axios.post(endpoint, payload, config)
      axios.put(endpoint, payload, config)
      axios.delete(endpoint, config)
    */
// //const a = useAxios("get", "/products", null, { header: { lang: "tr" } })

// const a = useAxios({
//   reqType: "get",
//   endpoint: "/products",
//   config: { header: { lang: "tr" } },
// });
