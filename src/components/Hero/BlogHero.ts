import { useTSElements } from "../../utils/hooks/useTSElements";
import { config } from "./func/HeroConfig";
import { ShopHero } from "./types/Hero";

export default function BlogHero(DOM: HTMLElement) {
  const hero: ShopHero = {
    heading: "#readmore",
    desc: "Read all case studies about our products!",
  };

  const ui = useTSElements(
    DOM,
    /*html*/ `
      <div class='bg-b19 text-white md:bg-topright bg-cover bg-center p-4 h-[15em] px-[20px] md:px-[80px] flex items-center justify-center'>
        <div class='animate-[fadeInDown_1s] text-center'>
            <div class='font-bold md:text-[3em] text-[2em] leading-[1.2em]'>
                <h2>${hero.heading}</h2>
            </div>
            <p class='py-3 text-white'>${hero.desc}</p>
        </div>
      </div>
    `,
    config
  );

  return ui;
}
