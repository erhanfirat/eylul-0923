import Button from "./Button";

const ZiyaretciCard = ({ ziyaretci }) => {
  return (
    <div className="ziyaretci-card">
      <h2>Ziyaretci Sayısı: {ziyaretci}</h2>
      <Button
        btnClick={() => {
          console.log("butona tıklandı!");
        }}
      >
        Merhaba <strong>Ali</strong>
      </Button>
    </div>
  );
};

export default ZiyaretciCard;
