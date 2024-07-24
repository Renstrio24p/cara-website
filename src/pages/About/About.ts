import { useTSMetaData } from "../../utils/hooks/useTSMetaData";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { useTSComponent } from "../../utils/hooks/useTSComponent";
import AboutHero from "../../components/Hero/AboutHero";
import Features from "../../components/Features/Features";
import AboutHead from "../../components/AboutHead/AboutHead";
import AboutApp from "../../components/AboutHead/AboutApp";

export default function About(DOM: HTMLElement) {
  useTSMetaData({
    name: "About",
    description: "About page",
    author: "Waren Gador",
  });

  document.title = `Cara E-Commerce - About`;

  const ui = useTSElements(
    DOM,
    /*html*/ `
        <div>
            <section id='hero'></section>
            <div class='px-[20px] py-[20px] md:px-[80px] md:py-[40px]'>
              <section id="about-head"></section>
              <section id="about-app"></section>
            </div>
            <section id='features'></section>
        </div>
        `
  );

  useTSComponent("hero", DOM, AboutHero);
  useTSComponent("about-head", DOM, AboutHead);
  useTSComponent("about-app", DOM, AboutApp);
  useTSComponent("features", DOM, Features);
  return ui;
}
