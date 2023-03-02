import {
  FaLinkedin,
  FaGithub,
  FaSitemap,
  FaVolleyballBall,
} from "react-icons/fa";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="text-white bg-black">
      <h1 className="p-5 text-3xl font-bold text-center">Capture</h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-5 mb-5">
          <FaLinkedin
            size="20"
            className="transition-all duration-300 hover:transform hover:scale-110"
          />
          <FaGithub size="20" />
          <FaVolleyballBall size="20" />
        </div>
        <p className="mb-5 text-xs">All rights reserved ©2020-{year} </p>
      </div>
    </div>
  );
};

export default Footer;
