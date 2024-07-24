import { TSRouter } from "../../utils/routes/class/Router.class";
import Shop from "../../pages/Shop/Shop";
import Home from "../../pages/Home/Home";
import Blog from "../../pages/Blog/Blog";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Cart from "../../pages/Cart/Cart";
import NotFound from "../../pages/404/NotFound";
import { useTSPurifier } from "utils/hooks/useTSPurifier";

export const Router = (DOM: HTMLElement) => {
  const routes = new TSRouter(
    [
      {
        path: "/",
        element: () => Home(DOM),
      },
      {
        path: "/shop",
        element: () => Shop(DOM),
      },
      {
        path: "/blog",
        element: () => Blog(DOM),
      },
      {
        path: "/about",
        element: () => About(DOM),
      },
      {
        path: "/contact",
        element: () => Contact(DOM),
      },
      {
        path: "/cart",
        element: () => Cart(DOM),
      },
      {
        path: "*",
        element: () => NotFound(DOM),
      },
    ],
    [String(useTSPurifier(window.location.search))]
  );
  return routes.navigate("");
};
