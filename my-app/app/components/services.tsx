import Image from "next/image";
import { Roboto } from "next/font/google";
import BaseBackground from "../../public/static/images/services/basebackground.png";
import SlideDown from "../../public/static/images/services/slidepage.svg";
import SearchIcon from "../../public/static/images/services/searchicon.png";
import TimeIcon from "../../public/static/images/services/timeicon.png";
import LambIcon from "../../public/static/images/services/lambicon.png";
import RightArrowIcon from "../../public/static/images/services/rightarrowicon.png";
import BaseBackground2 from "../../public/static/images/services/basebackground2.png";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const Services = () => {
  return (
    <main>
      <section className="relative w-screen h-screen background">
        <Image
          className="w-screen h-screen z-0 opacity-50"
          src={BaseBackground}
          alt="Base photograph."
          draggable={false}
        />

        <p
          className={`${roboto.className} text-white absolute z-10 top-1/3 left-[10%] text-7xl`}
          draggable={false}>
          HİZMETLERİMİZ
        </p>

        <p
          className="text-white absolute bottom-24 make-center italic"
          draggable={false}>
          Daha fazlası için kaydır
        </p>

        <Image
          className="absolute bottom-10 make-center cursor-pointer"
          src={SlideDown}
          alt="Slide down page."
          draggable={false}
        />
      </section>

      <section className="w-screen h-screen bg-white">
        <div
          className={`${roboto.className} w-8/12 h-screen absolute flex flex-col justify-between items-center font-semibold make-center`}>
          <p className="mt-12 make-gradient-text text-7xl h-20">
            Seviyeni Tespit Et
          </p>

          {/* Road Map Kısmı */}

          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col justify-center items-center gap-5">
              <Image
                className="w-16 h-auto"
                src={SearchIcon}
                alt="Search icon"
              />

              <p>Analiz Et</p>
            </div>

            <Image
              className="w-32 h-14"
              src={RightArrowIcon}
              alt="Right arrow icon"
            />

            <div className="flex flex-col justify-center items-center gap-5">
              <Image className="w-16 h-auto" src={TimeIcon} alt="Search icon" />

              <p>Gerçeği Gör</p>
            </div>

            <Image
              className="w-32 h-14"
              src={RightArrowIcon}
              alt="Right arrow icon"
            />

            <div className="flex flex-col justify-center items-center gap-5">
              <Image className="w-16 h-auto" src={LambIcon} alt="Search icon" />

              <p>Başarıya Ulaş</p>
            </div>
          </div>

          {/* Soru Çözümü Kısmı */}

          <div className="flex justify-center items-center gap-10">
            <Image
              className="w-[35%]"
              src={BaseBackground2}
              alt="Talking people."
            />

            <div className="flex flex-col">
              <div className="flex flex-col gap-2 mb-3">
                <p className={`${roboto.className} text-3xl`}>Soru Çözümü</p>
                <div className="w-96 h-1 bg-[#05C9F4]"></div>
              </div>

              <p className="w-80">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                minima dignissimos mollitia sed aspernatur et modi corporis ex
                commodi accusamus exercitationem, maiores quia blanditiis
                eligendi atque, pariatur facere perspiciatis explicabo?
              </p>
            </div>
          </div>

          {/* Canlı Ders Kısmı */}

          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-2 mb-3">
              <p className={`${roboto.className} text-3xl`}>Canlı Ders</p>
              <div className="w-[30rem] h-1 bg-[#05C9F4]"></div>
            </div>

            <p className="mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
              minima dignissimos mollitia sed aspernatur et modi corporis ex
              commodi accusamus exercitationem, maiores quia blanditiis eligendi
              atque, pariatur facere perspiciatis explicabo? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Totam, minima dignissimos
              mollitia sed aspernatur et modi corporis ex commodi accusamus
              exercitationem, maiores quia blanditiis eligendi atque, pariatur
              facere perspiciatis explicabo? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Totam, minima dignissimos mollitia
              sed aspernatur et modi corporis ex commodi accusamus
              exercitationem, maiores quia blanditiis eligendi atque, pariatur
              facere perspiciatis explicabo? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Totam, minima dignissimos mollitia
              sed aspernatur et modi corporis ex commodi accusamus
              exercitationem, maiores quia blanditiis eligendi atque, pariatur
              facere perspiciatis explicabo?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
