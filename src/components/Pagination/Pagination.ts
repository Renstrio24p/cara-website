import { useTSElements } from "../../utils/hooks/useTSElements";

export default function Pagination(DOM: HTMLElement) {
  useTSElements(
    DOM,
    /*html*/ `
    <div class='text-center mt-4'>
        <button class='py-[15px] px-[20px] rounded-[4px] text-white font-semibold bg-[#088178]'>1</button>
        <button class='py-[15px] px-[20px] rounded-[4px] text-white font-semibold bg-[#088178]'>2</button>
        <button class='ri-arrow-right-line py-[15px] px-[20px] rounded-[4px] text-white font-semibold bg-[#088178]'></button>
    </div>
    `
  );
}
