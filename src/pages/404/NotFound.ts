import { useTSMetaData } from "../../utils/hooks/useTSMetaData";
import { useAnchor } from "../../utils/hooks/useTSAnchor";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { setActiveLink } from "../../components/Navbar/func/GetActiveLink";
import { useTSEvent } from "../../utils/hooks/useTSEvent";

export default function NotFound(DOM: HTMLElement) {
  // SEO Hook
  useTSMetaData({
    name: "NotFound",
    description: "Not Found Page",
    author: "Waren Gador",
  });

  document.title = "Cara E-Commerce - 404";

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='w-full h-screen grid place-items-center'>
      <div class='text-center px-3'>
        <h1 class='text-[5em] md:text-[10em] animate-[fadeIn_.7s_ease]'>404</h1>
        <h2 class='animate-[fadeInUp_.7s_ease]'>oops! nothing was found</h2>
        <p class='text-[12px] md:text-[14px] animate-[fadeInUp_.7s_ease]'>
            The page you were looking for might have been removed, had its name changed, or is temporarily unavailable. 
            <a id='return' class='text-yellow-800 underline return' href="/">Return to Homepage</a>
        </p>
      </div>
    </div>
    `
  );

  const returnBtn = DOM.querySelector(".return") as HTMLAnchorElement;
  useAnchor(returnBtn, returnBtn.href, "return home");

  useTSEvent("return", "click", () => {
    localStorage.setItem("activeLink", "/");
    const navList = document.querySelector(".nav-list") as HTMLElement;
    const homeNavItem = Array.from(navList.querySelectorAll("li")).find(li => {
      const anchor = li.querySelector("a");
      return anchor && anchor.getAttribute("href") === "/";
    }) as HTMLElement;

    if (homeNavItem) {
      return setActiveLink(homeNavItem, navList);
    }
  });

  return ui;
}
