import Image from "next/image";
import { Roboto } from "next/font/google";
import InstagramIcon from "../../public/static/images/services/instagramicon.png";
import FacebookIcon from "../../public/static/images/services/facebookicon.png";
import TwitterIcon from "../../public/static/images/services/twittericon.png";

const roboto = Roboto({
  weight: "700",
  style: ["italic"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="w-screen h-[30%] flex justify-center items-center bg-[#062F54]">
      <div className="w-fit flex flex-col items-center">
        <div className="flex gap-6 items-center">
          <Image src={InstagramIcon} alt="Instagram icon" />
          <p className="text-white">Edureka</p>
        </div>

        <div className="flex gap-6 items-center">
          <Image src={FacebookIcon} alt="Facebook icon" />
          <p className="text-white">Edureka</p>
        </div>

        <div className="flex gap-6 items-center">
          <Image src={TwitterIcon} alt="Twitter icon" />
          <p className="text-white">Edureka</p>
        </div>
      </div>

      <div className="w-48 h-1 bg-white rotate-90"></div>

      <p className={`${roboto.className} text-white text-4xl`}>
        EDUREKA HERHANGİ BİR SLOGANI
      </p>
    </div>
  );
};

export default Footer;
