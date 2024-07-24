import { useTSPurifier } from "../../utils/hooks/useTSPurifier";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { blogData } from "./data/getBlogData";

export default function BlogCards(DOM: HTMLElement) {
  const generateCards = blogData
    .map(blog => {
      return /*html*/ `
            <div class='blog-box flex flex-col md:flex-row items-center sm:justify-center w-full relative mb-[5em] sm:gap-3'>
                <h1 class='absolute top-[-40px] md:top-[-60px] left-0 md:left-2 z-[-1] font-bold text-[30px] md:text-[70px] text-gray-300'>${blog.date}</h1>
                <div class="blog-img w-full md:w-1/2 mr-[40px] overflow-hidden pl-4 rounded-md">
                    <img src="/blog/${blog.image}" alt="blog img" class='w-full h-[300px] object-cover'>
                </div>
                <div class="blog-details w-full md:w-1/2">
                    <h2 class='text-[1.2em] md:text-[1.5em] font-semibold mt-4'>${blog.heading}</h2>
                    <p class='my-4 text-[0.9em] md:text-[1.1em]'>${blog.desc}</p>
                    <a aria-label='continue reading' href="#" class='continue-reading text-[11px] text-black bg-white font-bold relative continue hover:text-[#088178] transition duration-300 ease-in hover:after:bg-[#088178] hover:after:w-[70px] after:z-[-1] hover:after:transition hover:after:duration-600'>CONTINUE READING</a>
                </div>
            </div>
        `;
    })
    .join("");

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='blog-container px-[20px] lg:pt-[150px] pb-0 lg:px-[150px] pt-[15%]'>
        ${useTSPurifier(generateCards)}
    </div>
    `
  );

  return ui;
}
