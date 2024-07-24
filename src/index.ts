import { useInitialDOM } from "./utils/hooks/useIntialDOM";
import DOMPurify from "dompurify";
import "./index.css";
import "animate.css";
import "typeface-spartan";
import "typeface-poppins";
import "boxicons/css/boxicons.min.css";
import "remixicon/fonts/remixicon.css";
import Start from "./Start";

// Function to sanitize all query parameters
const getSanitizedParams = (): Record<string, string> => {
  const params = new URLSearchParams(window.location.search);
  const sanitizedParams: Record<string, string> = {};

  for (const [key, value] of params.entries()) {
    sanitizedParams[key] = DOMPurify.sanitize(value);
  }

  return sanitizedParams;
};

const render = () => {
  if (typeof window !== "undefined") {
    const DOM = document.getElementById("app");
    if (!DOM) return;

    const sanitizedParams = getSanitizedParams();
    useInitialDOM("app", () => Start(DOM, sanitizedParams));
  }
};

// Ensure rendering only after DOM content is fully loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", render);
}

export default render;
