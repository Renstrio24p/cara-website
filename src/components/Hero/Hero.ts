import { useTSElements } from "../../utils/hooks/useTSElements";
import { config } from "./func/HeroConfig";
import { HeroHead } from "./types/Hero";

export default function Hero(DOM: HTMLElement) {
  const hero: HeroHead = {
    heading: "Trade-in-offer",
    heading2: "Super value deals",
    heading3: "On all products",
    description: "Save more with coupons & up to 70% off!",
  };

  const ui = useTSElements(
    DOM,
    /*html*/ `
      <div class='bg-hero4 md:bg-topright bg-cover bg-center p-4 h-screen px-[20px] md:px-[80px] flex items-center justify-left bg-tr'>
        <div class='animate-[fadeInLeft_1s]'>
            <h1 class='font-bold pb-[15px]'>${hero.heading}</h1>
            <div class='font-bold md:text-[3em] text-[2em] leading-[1.2em]'>
                <h2>${hero.heading2}</h2>
                <h3 class='text-[#088178]'>${hero.heading3}</h3>
            </div>
            <p class='py-3 text-gray-700'>${hero.description}</p>
            <button class='bg-button bg-transparent text-[#203837] py-[14px] pr-[80px] pl-[65px] bg-no-repeat cursor-pointer font-bold text-[15px]'>Shop Now</button>
        </div>
      </div>
    `,
    config
  );

  return ui;
}
