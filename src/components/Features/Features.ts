import { featureData } from "../../data/feature";
import { useTSElements } from "../../utils/hooks/useTSElements";

export default function Features(DOM: HTMLElement) {
  const generateFeatures = () => {
    return featureData.map(
      feature => /*html*/ `
        <div key='${feature.name}' class=' transition duration-700 text-center shadow-md border border-gray-300 rounded-md px-[15px] py-[25px] my-[15px] font-semibold hover:shadow-2xl'>
            <img class='w-full mb-[15px]' src="${feature.icon}" alt="feature img">
            <p class='inline-block pt-[9px] pb-[6px] px-[8px] text-teal-900' style='background-color: ${feature.bgCol}'>
              ${feature.description}
            </p>
        </div>
      `
    );
  };

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='flex flex-wrap justify-evenly sm:justify-center w-full gap-x-3'>
        ${generateFeatures().join("")}
    </div>
    `
  );

  return ui;
}
