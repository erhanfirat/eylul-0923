import { useState } from "react";
import ZiyaretciCard from "../components/ZiyaretciCard";

const AboutUsPage = () => {
  const [ziyaretci, setZiyaretci] = useState(0);

  return (
    <div>
      <h1>Hakkımızda</h1>
      <hr />
      <ZiyaretciCard ziyaretci={ziyaretci} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae omnis
        animi beatae deleniti tempora deserunt ullam. Enim, modi odio officiis
        sit at, neque dignissimos voluptas, cupiditate excepturi esse suscipit!
        Eos?
      </p>
      <p>
        Tempora deserunt ullam. Enim, modi odio officiis sit at, neque
        dignissimos voluptas, cupiditate excepturi esse suscipit! Eos? tempora
        deserunt ullam. Enim, modi odio officiis sit at, neque dignissimos
        voluptas, cupiditate excepturi esse suscipit! Eos?Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Quae omnis animi beatae deleniti
        tempora deserunt ullam. Enim, modi odio officiis sit at, neque
        dignissimos voluptas, cupiditate excepturi esse suscipit! Eos?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae omnis
        animi beatae deleniti tempora deserunt ullam.
      </p>
    </div>
  );
};

export default AboutUsPage;
