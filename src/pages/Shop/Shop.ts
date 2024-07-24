import { useTSMetaData } from "../../utils/hooks/useTSMetaData";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { useTSComponent } from "../../utils/hooks/useTSComponent";
import Product1 from "../../components/Products/Product1";
import NewsLetter from "../../components/NewsLetters/NewsLetter";
import Product2 from "../../components/Products/Product2";
import Hero2 from "../../components/Hero/Hero2";
import Pagination from "../../components/Pagination/Pagination";

export default function Shop(DOM: HTMLElement) {
  useTSMetaData({
    name: "Shop",
    description: "Shopping Page",
    author: "Waren Gador",
  });

  document.title = "Cara E-Commerce - Shop";

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div>
        <section id="hero2"></section>
        <div class='px-[20px] py-[20px] md:px-[80px]'>
          <section id="product1"></section>
          <section id="product2"></section>
          <section id='pagination'></section>
        </div>
        <section id='news-letter'></section>
    </div>
    `
  );

  useTSComponent("hero2", DOM, Hero2);
  useTSComponent("product1", DOM, Product1);
  useTSComponent("product2", DOM, Product2);
  useTSComponent("pagination", DOM, Pagination);
  useTSComponent("news-letter", DOM, NewsLetter);

  return ui;
}
