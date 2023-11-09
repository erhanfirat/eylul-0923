import SiparisForm from "../components/SiparisForm";

const SiparisPage = ({ setSiparisFormData }) => {
  return (
    <div>
      <h1>Sipariş</h1>
      <hr />
      <SiparisForm setSiparisFormData={setSiparisFormData} />
    </div>
  );
};

export default SiparisPage;
