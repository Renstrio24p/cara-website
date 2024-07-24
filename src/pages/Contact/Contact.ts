import { useTSMetaData } from "../../utils/hooks/useTSMetaData";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { useTSComponent } from "../../utils/hooks/useTSComponent";
import ContactHero from "../../components/Hero/ContactHero";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import { config } from "./func/ContactConfig";

export default function Contact(DOM: HTMLElement) {
  useTSMetaData({
    name: "Contact",
    description: "Contact us page of Cara",
    author: "Waren Gador",
  });

  document.title = "Cara E-Commerce - Contact Us";

  const ui = useTSElements(
    DOM,
    /*html*/ `
        <section id='hero'></section>
        <div class='px-[20px] md:px-[80px]'>
          <section id="contact-details"></section>
        </div>
        `,
    config
  );

  useTSComponent("hero", DOM, ContactHero);
  useTSComponent("contact-details", DOM, ContactDetails);

  return ui;
}
