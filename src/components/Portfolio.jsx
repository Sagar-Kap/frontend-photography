import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="p-4 text-2xl font-bold">Travel Photos</h1>
      <div className="grid grid-rows-none gap-4 p-4 md:grid-cols-5">
        <div className="w-full h-full col-span-2 row-span-2 md:col-span-3">
          <Image src="/slider1.jpg" alt="/" width="677" height="451" />
        </div>
        <div>
          <Image src="/slider2.jpg" alt="/" width="215" height="217" />
        </div>
        <div>
          <Image src="/slider3.jpg" alt="/" width="215" height="217" />
        </div>
        <div>
          <Image src="/slider4.jpg" alt="/" width="215" height="217" />
        </div>
        <div>
          <Image src="/slider5.jpg" alt="/" width="215" height="217" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
