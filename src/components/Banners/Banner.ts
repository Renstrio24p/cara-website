import { useTSElements } from "../../utils/hooks/useTSElements";

export default function Banner(DOM: HTMLElement) {
  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='text-center my-[40px] bg-banner1 p-6 w-full h-[40vh] bg-cover grid place-items-center'>
        <div class='text-white'>
            <h2 class='text-[1em] font-semibold'>Repair Services</h2>
            <p class='text-white text-[1em] md:text-[2em] font-semibold py-[10px]'>Up to <span class='font-bold text-[#f5e6e6]'>70% Off</span> - All T-Shirts & Accessories</p>
            <button class='bg-white text-black btn-sm md:btn-normal'>Explore More</button>
        </div>
    </div>
    `
  );

  return ui;
}
