import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const roboto2 = Roboto({
  weight: "300",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white z-10 absolute w-screen mt-8">
      <p
        className={`${roboto.className} ml-8 text-2xl cursor-pointer`}
        draggable={false}>
        EDUREKA
      </p>

      <div className="flex items-center gap-7 mr-8">
        <p
          className={`${roboto2.className} text-xl cursor-pointer`}
          draggable={false}>
          Ana Sayfa
        </p>
        <p
          className={`${roboto2.className} text-xl cursor-pointer`}
          draggable={false}>
          Biz Kimiz?
        </p>
        <p
          className={`${roboto2.className} text-xl cursor-pointer`}
          draggable={false}>
          Hizmetlerimiz
        </p>
        <p
          className={`${roboto2.className} text-xl cursor-pointer`}
          draggable={false}>
          Blog
        </p>

        <button
          className={`${roboto2.className} text-xl cursor-pointer p-4 background-button rounded-[40px]`}
          draggable={false}>
          <a>Giriş Yap</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
