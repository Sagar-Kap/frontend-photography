import {
  FaLinkedin,
  FaGithub,
  FaSitemap,
  FaVolleyballBall,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between p-10 text-white bg-black sm:flex-row">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-4xl font-bold">Capture</h1>

        <ul>
          <li class="after:content-[`>`]">Home </li>
          <li>Gallerry</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="mt-5">
        <p>© All rights reserved</p>
        <div className="flex flex-row gap-5 mt-5 sm:mt-9">
          <FaLinkedin size="20" />
          <FaGithub size="20" />
          <FaVolleyballBall size="20" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
