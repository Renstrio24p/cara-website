import { useTSElements } from "../../utils/hooks/useTSElements";

export default function NewsLetter(DOM: HTMLElement) {
  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='flex flex-col text-center md:text-left md:flex-row justify-between px-[20px] lg:px-[80px] py-[40px] items-center bg-banner7 bg-no-repeat bg-topleft bg-[#041e42] text-white'>
        <div class='py-2 lg:py-0'>
            <h4 class='text-[22px] font-semibold'>Sign Up For NewsLetter</h4>
            <p class='text-[14px] font-medium text-[#818ea0]'>
                Get E-mail updates about out latest shop and <span class='text-yellow-500 font-semibold'>special offers</span>.
            </p>
        </div>
        <div class='inline-flex h-10 rounded-md overflow-hidden text-gray-500 text-[14px]'>
            <input class='placeholder:text-[14px] px-3 w-full h-full outline-none' type='email' placeholder='Enter your email address' class='border border-gray-300 p-2 w-full' />
            <button class='btn-normal bg-[#088178] rounded-none p-2 w-2/5'>Subscribe</button>
        </div>
    </div>
    `
  );

  return ui;
}
