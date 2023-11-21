import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ({ siparisFormData }) => {
  const productReduxTitle = useSelector((store) => store.product.title);
  const productTotal = useSelector((store) => store.product.total);

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
    </div>
  );
};

export default Sidebar;
