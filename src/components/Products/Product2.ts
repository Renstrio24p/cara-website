import { useTSElements } from "../../utils/hooks/useTSElements";
import { generateProducts } from "../tools/generateProducts";

export default function Product2(DOM: HTMLElement) {
  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div>
        <div class='flex justify-center md:justify-between items-center flex-wrap gap-3 py-8'>
            ${generateProducts(false, DOM)}
        </div>
    </div>
`
  );

  return ui;
}
