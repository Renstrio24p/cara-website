import { useTSElements } from "../../utils/hooks/useTSElements";
import { generateBanners } from "../tools/generateBanners";

export default function SmallBanners(DOM: HTMLElement) {
  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='grid grid-cols-1 md:grid-cols-2 place-content-stretch gap-8 h-full lg:h-[20em]'>
        ${generateBanners({
          color: "black",
          text: "crazy deals",
          title: "buy 1 take 1 for free",
          desc: "The best classic deals is on sale at cara",
          button: "Learn more",
          image: "banner2",
        })}
        ${generateBanners({
          color: "white",
          text: "spring/summer",
          title: "upcomming season",
          desc: "The best classic deals is on sale at cara",
          button: "Collection",
          image: "banner3",
        })}
    </div>
  `
  );

  return ui;
}
