import { useTSPurifier } from "../../utils/hooks/useTSPurifier";
import { Banner } from "./types/generateBanner";

export const generateBanners = (data: Banner) => {
  const bgClassMap: { [key: string]: string } = {
    banner2: "bg-banner2",
    banner3: "bg-banner3",
    banner4: "bg-banner4",
    banner5: "bg-banner5",
    banner6: "bg-banner6",
  };
  const textClassMap: { [key: string]: string } = {
    white: "text-white",
    black: "text-black",
  };

  const bgClass = bgClassMap[data.image] || "bg-gray-500";
  const textClass = textClassMap[data.color] || "text-gray-500";

  return /*html*/ `
    <div class="banner-box w-full h-full ${bgClass} ${textClass} bg-cover p-8 rounded-lg shadow-lg group">
      ${
        data.text
          ? /*html*/ `<h4 class="text-lg font-normal mb-2">${useTSPurifier(
              data.text!
            )}</h4>`
          : ""
      }
      ${
        data.title &&
        /*html*/ `<h5 class="text-2xl font-semibold mb-1">${useTSPurifier(
          data.title!
        )}</h5>`
      }
      ${
        data.desc &&
        /*html*/ `<p class="text-sm mb-4">${useTSPurifier(data.desc)}</p>`
      }
      ${
        data.button
          ? /*html*/ `
          <button class="border-2 border-white bg-transparent group-hover:border-transparent group-hover:bg-[#088178] group-hover:text-black text-white text-[13px] rounded py-[11px] px-[18px] transtion duration-700">${useTSPurifier(
            data.button!
          )}</button>
        `
          : ""
      }
    </div>
  `;
};
