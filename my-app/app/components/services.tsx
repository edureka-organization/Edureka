import Image from "next/image";
import { Roboto } from "next/font/google";
import BaseBackground from "../../public/static/images/services/basebackground.png";
import SlideDown from "../../public/static/images/services/slidepage.svg";
import SearchIcon from "../../public/static/images/services/searchicon.png";
import TimeIcon from "../../public/static/images/services/timeicon.png";
import LambIcon from "../../public/static/images/services/lambicon.png";
import RightArrowIcon from "../../public/static/images/services/rightarrowicon.png";
import BaseBackground2 from "../../public/static/images/services/basebackground2.png";
import BaseBackground3 from "../../public/static/images/services/basebackground3.png";
import BaseBackground4 from "../../public/static/images/services/basebackground4.png";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const roboto2 = Roboto({
  weight: "500",
  subsets: ["latin"],
});

const roboto3 = Roboto({
  weight: "300",
  style: ["italic"],
  subsets: ["latin"],
});

const Services = () => {
  return (
    <main className="w-screen overflow-hidden">
      {/* Başlangıç Kısmı */}
      <section className="relative w-screen h-screen background">
        <Image
          className="absolute w-screen h-screen z-0 opacity-50"
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
          className={`${roboto3.className} text-white absolute bottom-24 make-center`}
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

      {/* Detaylar Kısmı */}
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

              <p className={`${roboto2.className} w-80`}>
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

            <p className={`${roboto2.className} mb-10`}>
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

      {/* Derslerimiz Kısmı */}
      <section className="relative h-3/5 bg-[#2BC58D]">
        <div className="w-screen absolute flex gap-20 justify-center top-1/2 translate-y-[-50%]">
          <div className="relative">
            <Image src={BaseBackground3} alt="Base background 3." />
            <p className="absolute text-white top-[35%] left-[10%] rotate-[-45deg] text-4xl">
              Matematik
            </p>
          </div>
          <div className="relative">
            <Image src={BaseBackground3} alt="Base background 3." />
            <p className="absolute text-white top-[35%] left-[25%] rotate-[-45deg] text-4xl">
              Türkçe
            </p>
          </div>
          <div className="relative">
            <Image src={BaseBackground3} alt="Base background 3." />
            <p className="absolute text-white top-[35%] left-[35%] rotate-[-45deg] text-4xl">
              Fizik
            </p>
          </div>
          <div className="relative">
            <Image src={BaseBackground3} alt="Base background 3." />
            <p className="absolute text-white top-[35%] left-[25%] rotate-[-45deg] text-4xl">
              Kimya
            </p>
          </div>
          <div className="relative">
            <Image src={BaseBackground3} alt="Base background 3." />
            <p className="absolute text-white top-[35%] left-[20%] rotate-[-45deg] text-4xl">
              Biyoloji
            </p>
          </div>
        </div>
      </section>

      {/* Mentörlük Kısmı */}
      <section className="relative w-screen h-[70%]">
        <div className="absolute w-screen flex justify-center gap-20 top-[17%]">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 mb-3">
              <p className={`${roboto.className} text-3xl`}>Mentörlük</p>
              <div className="w-96 h-1 bg-[#05C9F4]"></div>
            </div>

            <p className={`${roboto2.className} w-[30rem]`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              distinctio, enim nam quos rerum animi alias aliquam soluta sed
              autem magni accusantium impedit et atque labore qui tempore
              voluptas eius? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Officia distinctio, enim nam quos rerum animi alias aliquam
              soluta sed autem magni accusantium impedit et atque labore qui
              tempore voluptas eius? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officia distinctio, enim nam quos rerum animi
              alias aliquam soluta sed autem magni accusantium impedit et atque
              labore qui tempore voluptas eius?
            </p>
          </div>

          <Image
            className="w-[30%]"
            src={BaseBackground4}
            alt="Base background 4"
          />
        </div>
      </section>
    </main>
  );
};

export default Services;
