import { useTSElements } from "../../utils/hooks/useTSElements";

export default function AboutHead(DOM: HTMLElement) {
  const ui = useTSElements(
    DOM,
    /*html*/ `
            <div class='flex flex-col md:flex-row w-full items-center gap-6'>
              <div class=' w-full md:w-1/2'>
                <img class='w-full' src="/about/a6.webp" alt="about image">
              </div>
              <div class='w-full md:w-1/2'>
                <h2 class='mb-3 font-semibold text-[2em]'>Who We Are?</h2> 
                <p class='mb-3 text-[0.8em] md:text-[0.9em]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum quae ad! Tenetur cum quisquam 
                    quia, quaerat hic id rem ad voluptatum, sint numquam quo. Magnam eos dignissimos quisquam placeat fugit,
                    repellat qui beatae eaque aut tempore dolores nihil eum ratione facere magni laborum id nostrum odio 
                    nesciunt dolorum modi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum quae ad! Tenetur cum quisquam 
                    quia, quaerat hic id rem ad voluptatum, sint numquam quo.
                </p>
                <abbr title="desc" class='text-[0.8em] md:text-[0.9em]'>
                    Create stunning images with as much as or as little control you like to choose of basic and Creative modes.
                </abbr>
                <div class="marquee mt-4 bg-[#ccc] w-full">
                    <div class="marquee-content text-[0.7em]">
                        Create stunning images with as much as or as little control you like to choose of basic and Creative modes.
                    </div>
                </div>
              </div>
            </div>
        `
  );

  return ui;
}
