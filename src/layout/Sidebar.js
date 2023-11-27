import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CounterContextObject } from "../context/CounterContext";
import { StudentContextObject } from "../context/StudentContext";

const Sidebar = ({ siparisFormData }) => {
  const productReduxTitle = useSelector((store) => store.product.title);
  const productTotal = useSelector((store) => store.product.total);
  const { toplamFiyat } = useContext(CounterContextObject);
  const { students } = useContext(StudentContextObject);

  return (
    <div>
      Sidebar gelecek
      {siparisFormData && (
        <>
          <h3>Sipariş Bilgileri</h3>
          <p>Adet: {siparisFormData?.adet}</p>
          <p>Yiyecek: {siparisFormData?.yiyecek}</p>
          <p>İçecek: {siparisFormData?.icecek}</p>
        </>
      )}
      <div>
        <Link to="/products-redux">
          {productReduxTitle} [{productTotal}]
        </Link>
      </div>
      <div>
        Yumurta Fiyatı: <strong>{toplamFiyat}</strong>
      </div>
      <div>
        Öğrenci Sayısı: <strong>{students.length}</strong>
      </div>
    </div>
  );
};

export default Sidebar;
