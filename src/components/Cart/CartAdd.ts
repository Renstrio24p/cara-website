import { useTSElements } from "../../utils/hooks/useTSElements";
import { config } from "./func/CartConfig";
import { useTSPurifier } from "../../utils/hooks/useTSPurifier";

export default function CartAdd(DOM: HTMLElement) {
  const inputConfig = {
    ALLOWED_ATTR: ["id", "class", "placeholder"],
    ALLOW_UNSAFE_SCRIPT: false,
  };

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='flex flex-wrap flex-col md:flex-row justify-between'>
        <div id='coupon' class='w-full md:w-1/2 mb-[30px]'>
           <h3 class='pb-[15px] font-semibold'>Apply Coupon</h3>
           <div>
              ${useTSPurifier(
                /*html*/ `<input type="text" class='py-[10px] px-[20px] outline-none w-full md:w-[60%] mr-[10px] border border-[#e2e9e1] mb-[10px] md:mb-0' placeholder="Enter your Coupon">`,
                inputConfig
              )}
              <button class='btn-normal bg-teal-900 text-white py-[12px] px-[20px] w-full md:w-fit'>Apply</button>
           </div>
        </div>
          <div id="subtotal" class='w-full md:w-1/2 mb-[30px] border border-[#e2e9e1] p-[30px]'>
             <h3 class='font-semibold pb-[20px]'>Cart Totals</h3>
             <table class='border border-collapse w-full mb-[20px]'>
              <tr>
                <td class='w-1/2 border border-[#e2e9e1] p-[10px] text-[13px]'>Cart Subtotal</td>
                <td class='w-1/2 border border-[#e2e9e1] p-[10px] text-[13px]'>$ 335</td>
              </tr>
              <tr>
                <td class='w-1/2 border border-[#e2e9e1] p-[10px] text-[13px]'>Shipping</td>
                <td class='w-1/2 border border-[#e2e9e1] p-[10px] text-[13px]'>Free</td>
              </tr>
              <tr>
                <td class='w-1/2 border border-[#e2e9e1] p-[10px] text-[13px]'>
                  <strong>Total</strong>
                </td>
                <td class='w-1/2 border border-[#e2e9e1] p-[10px] text-[13px]'>
                  <strong>$ 335</strong>
                </td>
              </tr>
             </table>
             <button class='btn-normal bg-teal-900 text-white'>Proceed to checkout</button>
          </div>
    </div>
    `,
    config
  );

  return ui;
}
