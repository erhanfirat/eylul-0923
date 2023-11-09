const Sidebar = ({ siparisFormData }) => {
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
    </div>
  );
};

export default Sidebar;
