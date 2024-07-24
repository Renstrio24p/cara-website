import { cleanHTML } from "../../components/tools/cleanHTML";

type Header = {
  title: string;
  desc: string;
};

export const createHeading = ({ title, desc }: Header) => {
  return cleanHTML( /*html*/ `
            <div class='text-center my-6'>
                 <h2 class='text-[2em] md:text-[3em] font-semibold'>${title}</h2>
                 <p class='text-gray-600'>${desc}</p>
            </div>
        `);
};
