import { useTSCSP } from "./utils/hooks/useTSCSP";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Router } from "./components/Router/router";
import { useTSComponent } from "./utils/hooks/useTSComponent";
import { useTSElements } from "./utils/hooks/useTSElements";

interface SanitizedParams {
  [key: string]: string;
}

export default function Start(
  DOM: HTMLElement | null,
  params: SanitizedParams
) {
  if (!DOM) return null;

  useTSCSP(
    "self",
    "'self'",
    "'self'",
    [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.google.com/maps/",
    ],
    true
  );

  const config = {
    ALLOWED_ATTR: [
      "src",
      "width",
      "height",
      "loading",
      "referrerpolicy",
      "class",
      "id",
    ],
    ALLOW_UNSAFE_SCRIPT: false,
  };

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='font-spartans relative'>
      <header class='sticky top-0 z-[999]'>
         <nav id="navbar"></nav>
      </header>
      <main class='animate-[fadeIn_0.7s_ease] main' id="router"></main>
      <footer class='px-[20px] md:px-[80px]' id="footer"></footer>
    </div>
    `,
    config
  );

  useTSComponent("navbar", DOM, Navbar, params);
  useTSComponent("router", DOM, Router, params);
  useTSComponent("footer", DOM, Footer, params);

  return ui;
}
