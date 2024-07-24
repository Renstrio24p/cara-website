import { useTSElements } from "../../utils/hooks/useTSElements";

export default function AboutApp(DOM: HTMLElement) {
  const createVideo = () => {
    return /*html*/ `
        <video src="/about/1.mp4" class='w-full md:w-[70%] h-full rounded-xl' loop autoplay></video>
    `;
  };

  const ui = useTSElements(
    DOM,
    /*html*/ `
        <div class='text-center my-6'>
            <h3 class='font-bold text-[2em] md:text-[3em]'>
                Download Our 
                <a href="#" aria-label='app'>
                    <span class='text-violet-700 underline'>App</span>
                </a>
            </h3>
            <div class="video rounded-xl overflow-hidden mt-[30px] flex flex-col justify-center w-full items-center">
                ${createVideo()}
            </div>
        </div>
        `
  );

  return ui;
}
