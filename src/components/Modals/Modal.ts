import { useTSElements } from "../../utils/hooks/useTSElements";
import { Product } from "../../data/types/ProductType";
import { useTSEvent } from "../../utils/hooks/useTSEvent";
import { cleanHTML } from "../../components/tools/cleanHTML";
import { shuffleArray } from "./func/Shuffle";
import { useTSElementEach } from "../../utils/hooks/useTSForEach";
import { useTSPurifier } from "../../utils/hooks/useTSPurifier";
import { getSizeOptions } from "./func/getSizeOptions";

export default function Modal(
  DOM: HTMLElement,
  data: Product,
  allproducts: Product[]
) {
  const shuffledProducts = shuffleArray([...allproducts]).slice(0, 4);

  const listData = shuffledProducts
    .map(product => {
      return cleanHTML(/*html*/ `
        <div class='list-none cursor-pointer' 
             data-name='${useTSPurifier(product.name)}' 
             data-price='${product.price}' 
             data-brandname='${useTSPurifier(product.brandName)}' 
             data-size='${JSON.stringify(product.size)}'
             data-description='${useTSPurifier(product.description)}'>
          <img class='w-full h-full list-image' 
               src='${product.icon}' 
               alt='list image' 
               data-src='${product.icon}'/>
        </div>
      `);
    })
    .join("");

  const ui = useTSElements(
    DOM,
    /*html*/ `
      <div class='grid place-items-center w-screen h-screen bg-black bg-opacity-[0.6] animate-[fadeIn_0.9s_ease_in] p-4'>
        <div class='text-black bg-white p-4 rounded-sm animate-[fadeInUp_0.5s] w-full lg:w-1/2 h-[30em] md:h-fit relative overflow-y-scroll md:overflow-hidden'>
            <button id='closed' class='absolute top-1 right-1'>
               <i class='ri-close-fill'></i>
            </button>
            <div class='mt-5 mb-3 flex flex-col md:flex-start md:flex-row gap-6 w-full h-fit'>
               <div class='w-full'>
                  <img class='' id="main-image" src="${
                    data.icon
                  }" alt="product image"
                    data-name="${useTSPurifier(data.name)}"
                    data-brandname="${useTSPurifier(data.brandName)}"
                    data-size='${JSON.stringify(data.size)}'
                    data-description='${useTSPurifier(data.description)}'>
                  <div class='flex justify-between gap-1 mt-1'>
                    ${listData}
                  </div>
               </div>
               <div class='w-full flex flex-col gap-3'>
                  <h1 id="brand-name" class='text-[12px]'>${useTSPurifier(
                    data.brandName
                  )}</h1>
                  <h2 id="product-name" class='font-semibold'>${useTSPurifier(
                    data.name
                  )}</h2>
                  <div class='text-[12px]'>
                    <label for="size-select">Select Size:</label>
                    <select id="size-select" class='p-1'>
                      ${getSizeOptions(data)}
                    </select>
                  </div>
                  <div class='inline-flex gap-1 overflow-hidden text-[12px] h-[25px]'>
                     <div class='w-[50px] grid place-items-center border border-gray-500'>
                         <input class='px-1 border-none outline-none w-full' type="text" id="quantity" value="1" min="1">
                     </div>
                     <button class='bg-teal-600 px-2 w-fit rounded-sm'>Add to Cart</button>
                  </div>
                  <p id="total-price" class='text-[14px] font-bold'>
                      ${useTSPurifier(data.currency)} 
                      ${Number(Object.values(data.size)[0]).toFixed(2)}</p>
                  <h3 class='font-semibold'>Product Details</h3>
                  <p id="product-description" class='text-[12px] mt-4'>${useTSPurifier(
                    data.description
                  )}</p>
               </div>
            </div>
        </div>
      </div>
    `
  );

  const modal = document.querySelector("#modal") as HTMLElement;
  const sizeSelect = modal.querySelector("#size-select") as HTMLSelectElement;
  const quantityInput = modal.querySelector("#quantity") as HTMLInputElement;
  const totalPrice = modal.querySelector("#total-price") as HTMLElement;
  const productDescription = modal.querySelector(
    "#product-description"
  ) as HTMLElement;

  const updateTotalPrice = () => {
    const selectedSizePrice = Number(sizeSelect.value);
    const quantity = Number(String(useTSPurifier(quantityInput.value)));
    const total = selectedSizePrice * quantity;
    totalPrice.textContent = `${data.currency} ${total.toFixed(2)}`;
  };

  const updateProductDetails = (item: HTMLElement) => {
    const mainImage = modal.querySelector("#main-image") as HTMLImageElement;
    const brandName = modal.querySelector("#brand-name") as HTMLElement;
    const productName = modal.querySelector("#product-name") as HTMLElement;
    const description = item.getAttribute("data-description") as string;

    const listImage = item.querySelector(".list-image") as HTMLImageElement;
    const src = listImage.getAttribute("data-src") as string;
    const mainImageSrc = mainImage.src;

    // Swap images
    listImage.src = mainImageSrc;
    listImage.setAttribute("data-src", mainImageSrc);
    mainImage.src = src;

    // Swap data attributes
    const mainName = mainImage.getAttribute("data-name");
    const mainBrandName = mainImage.getAttribute("data-brandname");
    const mainSize = mainImage.getAttribute("data-size");
    const mainDescription = mainImage.getAttribute("data-description");

    mainImage.setAttribute(
      "data-name",
      item.getAttribute("data-name") as string
    );
    mainImage.setAttribute(
      "data-brandname",
      item.getAttribute("data-brandname") as string
    );
    mainImage.setAttribute(
      "data-size",
      item.getAttribute("data-size") as string
    );
    mainImage.setAttribute(
      "data-description",
      item.getAttribute("data-description") as string
    );

    item.setAttribute("data-name", mainName as string);
    item.setAttribute("data-brandname", mainBrandName as string);
    item.setAttribute("data-size", mainSize as string);
    item.setAttribute("data-description", mainDescription as string);

    // Update UI with new data
    productName.textContent = item.getAttribute("data-name") as string;
    brandName.textContent = item.getAttribute("data-brandname") as string;
    productDescription.textContent = String(useTSPurifier(description));

    sizeSelect.innerHTML = Object.entries(
      JSON.parse(item.getAttribute("data-size") as string)
    )
      .map(([size, price]) => {
        return `<option value="${price}">${size.toUpperCase()}</option>`;
      })
      .join("");

    const newDefaultSizePrice = Number(sizeSelect.value);
    const newTotal = newDefaultSizePrice * Number(quantityInput.value);
    totalPrice.textContent = `${data.currency} ${newTotal.toFixed(2)}`;

    attachEvents();
  };

  const attachEvents = () => {
    useTSEvent("size-select", "change", updateTotalPrice);
    useTSEvent("quantity", "input", updateTotalPrice);
    useTSEvent("closed", "click", () => modal.classList.add("hidden"));
  };

  attachEvents();

  useTSElementEach(".list-none", ["click"], item => {
    updateProductDetails(item);
  });

  return ui;
}
