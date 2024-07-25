import { useInitialDOM } from "./utils/hooks/useIntialDOM";
import "./index.css";
import "animate.css";
import "typeface-spartan";
import "typeface-poppins";
import "boxicons/css/boxicons.min.css";
import "remixicon/fonts/remixicon.css";
import Start from "./Start";
import {
  useTSCheckInvalidParams,
  useTSURLState,
} from "./utils/hooks/useTSURLState";

const render = (): void => {
  if (typeof window !== "undefined") {
    useTSCheckInvalidParams();
    const DOM = document.getElementById("app");
    if (!DOM) return;

    const sanitizedParams = useTSURLState();
    return useInitialDOM("app", () => Start(DOM, sanitizedParams));
  }
};

// Ensure rendering only after DOM content is fully loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", render);
}

export default render;
