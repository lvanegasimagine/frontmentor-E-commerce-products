import { useState } from "react";

import imgProduct1 from "@/assets/image-product-1.jpg";
import imgProduct2 from "@/assets/image-product-2.jpg";
import imgProduct3 from "@/assets/image-product-3.jpg";
import imgProduct4 from "@/assets/image-product-4.jpg";

import imgProductSmall1 from "@/assets/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/image-product-4-thumbnail.jpg";

import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

export default () => {
  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="relative col-span-4">
        <img src={ARRAY_IMGS[index]} alt="" className="aspect-[16/12]" />
        <div className="absolute top-1/2 left-0 w-full flex px-4 justify-between -translate-y-1/2">
          <button
            className="grid place-items-center w-10 h-10 rounded-full bg-white"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="grid place-items-center w-10 h-10 rounded-full bg-white"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      <img src={imgProductSmall1} alt="" className="hidden md:block" />
      <img src={imgProductSmall2} alt="" className="hidden md:block" />
      <img src={imgProductSmall3} alt="" className="hidden md:block" />
      <img src={imgProductSmall4} alt="" className="hidden md:block" />
    </section>
  );
};
