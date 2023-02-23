import Image from "next/image";

const Slider = ({ data }) => {
  return (
    <div>
      <h1>Gallery</h1>
      <div>
        {data.map((slider, index) => {
          return <Image src={slider.image} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
