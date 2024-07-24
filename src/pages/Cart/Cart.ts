import { useTSMetaData } from "../../utils/hooks/useTSMetaData";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { useTSComponent } from "../../utils/hooks/useTSComponent";
import CartHero from "../../components/Hero/CartHero";
import CartSection from "../../components/Cart/CartSection";
import CartAdd from "../../components/Cart/CartAdd";

export default function Cart(DOM: HTMLElement) {
  useTSMetaData({
    name: "Cart",
    description: "Cart Page",
    author: "Waren Gador",
  });

  document.title = "Cara E-Commerce - Shopping Cart";

  const ui = useTSElements(
    DOM,
    /*html*/ `
        <div>
            <section id="hero"></section>
            <div class='px-[20px] md:px-[80px] py-4 flex flex-col gap-6'>
              <section id="cart" class='overflow-x-auto'></section>
              <section id="cart-add"></section>
            </div>
        </div>
        `
  );

  useTSComponent("hero", DOM, CartHero);
  useTSComponent("cart", DOM, CartSection);
  useTSComponent("cart-add", DOM, CartAdd);

  return ui;
}
