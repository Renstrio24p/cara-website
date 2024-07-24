import { Product } from "data/types/ProductType";
import { product1Data } from "../../data/product1";
import { generateStars } from "./generateStars";
import { useTSElements } from "../../utils/hooks/useTSElements";
import Modal from "../../components/Modals/Modal";
import { useTSElementEach } from "../../utils/hooks/useTSForEach";

const cardUI = (product: Product) => {
  return /*html*/ `
    <div class="product-card w-[23%] min-w-[250px] border border-[#cce7d0] py-[10px] px-[12px] cursor-pointer rounded-md shadow-sm hover:shadow-lg transition duration-300" data-id='${
      product.id
    }'>
      <img class='w-full rounded-md' src="${product.icon}" alt="${
    product.name
  }" />
      <div class='text-start py-[10px] leading-[1rem] relative'>
        <span class='text-[#606063] text-[12px]'>${product.brandName}</span>
        <h5 class='pt-[7px] text-[#1a1a1a] text-[14px]'>${product.name}</h5>
        <div class='star text-yellow-600'>
          ${generateStars(Number(product.stars.toFixed(2))).join("")}
        </div>
        <h6 class='pt-[7px] text-[15px] font-semibold text-[#088178]'>
          ${product.currency} ${product.price}
        </h6>
        <a href="#" aria-label='cart' class='absolute bottom-1 right-0 w-[40px] h-[40px] grid place-items-center bg-[#e8f6ea] rounded-[50px] hover:bg-teal-200 border border-[#cce7d0]'>
          <i class="ri-shopping-cart-2-line"></i>
        </a>
      </div>
    </div>
  `;
};

function getCardModal(
  product: Product,
  DOM: HTMLElement,
  allproducts: Product[]
) {
  Modal(DOM, product, allproducts);
}

const addCardEventListeners = (products: Product[]) => {
  useTSElementEach(".product-card", ["click"], card => {
    const dataId = card.getAttribute("data-id");
    const product = products.find(p => p.id.toString() === dataId);
    if (product) {
      const modal = document.getElementById("modal") as HTMLElement;
      modal.classList.remove("hidden");
      getCardModal(product, modal, products);
    }
  });
};

export const generateProducts = (data: boolean, DOM: HTMLElement) => {
  const filteredProducts = product1Data.filter(product => product.new !== data);

  const cards = filteredProducts.map(product => cardUI(product)).join("");

  const ui = useTSElements(
    DOM,
    /*html*/ `
        ${cards}
        <div id='modal' class='fixed bottom-0 right-0 z-[999] hidden'></div>
    `
  );

  setTimeout(() => {
    addCardEventListeners(filteredProducts);
  }, 500);

  return ui;
};
