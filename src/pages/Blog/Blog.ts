import { useTSMetaData } from "../../utils/hooks/useTSMetaData";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { useTSComponent } from "../../utils/hooks/useTSComponent";
import BlogHero from "../../components/Hero/BlogHero";
import Pagination from "../../components/Pagination/Pagination";
import BlogCards from "../../components/BlogCards/BlogCards";

export default function Blog(DOM: HTMLElement) {
  useTSMetaData({
    name: "Blog",
    description: "Blog Site of Cara",
    author: "Waren Gador",
  });

  document.title = "Cara E-Commerce - Blog";

  const ui = useTSElements(
    DOM,
    /*html*/ `
        <div>
            <section id='blog-hero'></section>
            <section id='blog-cards'></section>
            <section id='pagination'></section>
        </div>
        `
  );

  useTSComponent("blog-hero", DOM, BlogHero);
  useTSComponent("blog-cards", DOM, BlogCards);
  useTSComponent("pagination", DOM, Pagination);

  return ui;
}
