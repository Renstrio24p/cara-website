import DOMPurify from "dompurify";
import { useTSPurifier } from "../../utils/hooks/useTSPurifier";
import { product1Data } from "../../data/product1";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { config } from "./func/CartConfig";

export default function CartSection(DOM: HTMLElement) {
  const getProductData = product1Data
    .map(product => {
      const sanitizedIcon = DOMPurify.sanitize(product.icon);
      const sanitizedName = DOMPurify.sanitize(product.name);
      const sanitizedPrice = DOMPurify.sanitize(product.price.toString());
      const sanitizedCurrency = DOMPurify.sanitize(product.currency);

      return /*html*/ `
        <tr class='hover:bg-gray-50'>
          <td class='border border-gray-300 p-2'>
            <a href="#" aria-label='remove' class='text-red-500 hover:text-red-700'>
              <i class='bx bxs-trash-alt'></i>
            </a>
          </td>
          <td class='border border-gray-300 p-2'>
            <img src="${sanitizedIcon}" alt="${sanitizedName}" class='w-16 h-16 object-cover'>
          </td>
          <td class='border border-gray-300 p-2'>
            <p class='truncate'>${sanitizedName}</p>
          </td>
          <td class='border border-gray-300 p-2'>
            <p>${sanitizedCurrency} ${sanitizedPrice}</p>
          </td>
          <td class='border border-gray-300 p-2'>
            ${useTSPurifier(/*html*/ `<input 
                              type="number" 
                              id="count" 
                              placeholder='1'
                              class='w-16 border border-gray-300 p-1 text-center'>`)}
          </td>
          <td class='border border-gray-300 p-2'>
            <p>${sanitizedCurrency} ${sanitizedPrice}</p>
          </td>
        </tr>
      `;
    })
    .join("");

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <table class='w-full border-collapse border border-gray-200'>
      <thead>
        <tr class='bg-gray-100'>
          <td class='border border-gray-300 p-2 text-left'>Remove</td>
          <td class='border border-gray-300 p-2 text-left'>Image</td>
          <td class='border border-gray-300 p-2 text-left'>Product</td>
          <td class='border border-gray-300 p-2 text-left'>Price</td>
          <td class='border border-gray-300 p-2 text-left'>Quantity</td>
          <td class='border border-gray-300 p-2 text-left'>Subtotal</td>
        </tr>
      </thead>
      <tbody>
        ${getProductData}
      </tbody>
    </table>
  `,
    config
  );

  return ui;
}
