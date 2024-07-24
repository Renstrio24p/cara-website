import { useTSElements } from "../../utils/hooks/useTSElements";
import { generateBanners } from "../tools/generateBanners";

export default function SmallBanners2(DOM: HTMLElement) {
  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full lg:h-[15em] gap-8'>
        ${generateBanners({
          image: "banner4",
          color: "white",
          title: "SEASONAL SALE",
          desc: "Winter Collection -50% OFF",
        })}
        ${generateBanners({
          image: "banner5",
          color: "white",
          title: "SEASONAL SALE",
          desc: "Winter Collection -50% OFF",
        })}
        ${generateBanners({
          image: "banner6",
          color: "white",
          title: "SEASONAL SALE",
          desc: "Winter Collection -50% OFF",
        })}
    </div>
  `
  );

  return ui;
}
