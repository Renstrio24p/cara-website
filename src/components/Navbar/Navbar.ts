import { useAnchor } from "../../utils/hooks/useTSAnchor";
import {
  useTSEventAll,
  useTSEventSelectAll,
} from "../../utils/hooks/useTSAllElements";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { useTSEvent } from "../../utils/hooks/useTSEvent";
import { closeMenu, toggleMenu } from "./func/Toggle";
import { setActiveLink } from "./func/GetActiveLink";
import { config } from "./func/NavbarConfig";

export default function Navbar(DOM: HTMLElement) {
  // Render UI
  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class="navbar-container py-[14px] px-[20px] md:px-[80px] flex justify-between items-center bg-gray-200 shadow-md transition duration-500 hover:bg-gray-300 group">
      <a href="/" aria-label="logo">
        <img src="/logo.webp" alt="logo">
      </a>
      <ul id="nav-list" class="nav-list flex flex-col sm:justify-start h-screen w-[300px] shadow-md md:shadow-none md:w-fit md:h-fit md:flex-row fixed bg-gray-200 sm:bg-none md:relative top-0 right-[-300px] md:right-0 items-start gap-3 font-semibold group p-4 transition-all duration-500 ease-in-out group-hover:bg-gray-300"></ul>
      <div id='mobile' class='visible sm:visible md:hidden text-[#1a1a1a] text-[24px]'>
        <a href="/shop" id='shopicon' aria-label='shopping icon'><i class="bx bx-shopping-bag"></i></a>
        <button id='menu' class='menu-icon bx bx-right-indent'></button>
      </div>
    </div>
    `,
    config
  );

  const navItems = [
    {
      href: "#",
      html: "<button class='visible md:hidden'><i class='bx bx-x'></i></button>",
    },
    { href: "/", text: "Home" },
    { href: "/shop", text: "Shop" },
    { href: "/blog", text: "Blog" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/cart", html: '<i class="bx bx-shopping-bag"></i>' },
  ];

  const navList = DOM.querySelector("#nav-list") as HTMLElement;

  if (navList) {
    navItems.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const content = document.createElement("span");

      if (item.html) {
        content.innerHTML = item.html;
      } else {
        content.textContent = item.text ?? "";
      }

      useAnchor(
        a,
        item.href,
        item.text ?? item.html,
        "hover:text-teal-600 underline-anim group-hover:transition-all duration-700 relative after:absolute after:h-[3px] after:bg-teal-500 after:hover:w-1/2 after:w-0",
        content
      );

      li.appendChild(a);
      navList.appendChild(li);
      window.screenY = 0;
    });
  }

  useTSEventAll("li", "click", e => {
    const target = e.currentTarget as HTMLElement;
    setActiveLink(target, DOM);
    toggleMenu(navList);
    e.preventDefault();
  });

  const activeLink = localStorage.getItem("activeLink");
  if (activeLink) {
    const activeElement = Array.from(DOM.querySelectorAll("li")).find(
      li => li.querySelector("a")?.getAttribute("href") === activeLink
    );
    if (activeElement) {
      setActiveLink(activeElement as HTMLElement, DOM);
    }
  } else {
    const firstLink = DOM.querySelector("li");
    if (firstLink) {
      setActiveLink(firstLink as HTMLElement, DOM);
    }
  }

  const logoLink = DOM.querySelector("a") as HTMLAnchorElement;
  const shopIcon = DOM.querySelector("#shopicon") as HTMLAnchorElement;
  useAnchor(logoLink, "/", "home logo");
  useAnchor(shopIcon, "/shop", "shop icon");

  useTSEvent("menu", "click", () => {
    toggleMenu(navList);
  });

  useTSEventSelectAll(["main", "ul", "footer"], "click", () => {
    closeMenu(navList);
  });

  return ui;
}

const i = document.getElementById("i");
if (i) {
  const childElement = document.createElement("span");
  childElement.textContent = "Custom Element";
  useAnchor(
    i,
    "/custom-href",
    "Custom Aria Label",
    "custom-class",
    childElement
  );
}
