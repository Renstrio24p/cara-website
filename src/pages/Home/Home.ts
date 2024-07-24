import { useTSElements } from "../../utils/hooks/useTSElements";
import { useTSCollection } from "../../utils/hooks/useTSCollection";
import { useTSMetaData } from "../../utils/hooks/useTSMetaData";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Product1 from "../../components/Products/Product1";
import Banner from "../../components/Banners/Banner";
import Product2 from "../../components/Products/Product2";
import SmallBanners from "../../components/Banners/SmallBanners";
import SmallBanners2 from "../../components/Banners/SmallBanners2";
import NewsLetter from "../../components/NewsLetters/NewsLetter";
import { createHeading } from "../../components/Headings/Headings";

export default function Home(DOM: HTMLElement) {
  // SEO
  useTSMetaData({
    name: "home",
    description: "Cara Homepage",
    author: "Waren Gador",
  });

  document.title = "Cara E-Commerce - Home";

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div>
        <section id="hero"></section>
        <div class='px-[20px] py-[20px] md:px-[80px] md:py-[40px]'>
          <section id="features"></section>
          ${createHeading({
            title: "Featured Products",
            desc: "Summer Collection New Modern Design",
          })}
          <section id="product1"></section>
        </div>
        <section id="banner"></section>
        <div class='px-[20px] py-[20px] md:px-[80px] md:py-[40px]'>
          ${createHeading({
            title: "New Arrivals",
            desc: "Summer Collection New Modern Design",
          })}
          <section id="product2"></section>
          <section id="sm-banner"></section>
          <section id='sm-banners'></section>
        </div>
        <section id='news-letter'></section>
    </div>
`
  );

  const components = [
    "hero",
    "features",
    "product1",
    "banner",
    "product2",
    "sm-banner",
    "sm-banners",
    "news-letter",
  ];
  const componentFunc = [
    Hero,
    Features,
    Product1,
    Banner,
    Product2,
    SmallBanners,
    SmallBanners2,
    NewsLetter,
  ];

  useTSCollection(components, DOM, componentFunc);

  return ui;
}
