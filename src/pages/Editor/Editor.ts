import { useTSMetaData } from "utils/hooks/useTSMetaData";
import { useTSElements } from "../../utils/hooks/useTSElements";

export default function Editor(DOM: HTMLElement) {
  useTSMetaData({
    name: "Editor",
    description: "Editor Page",
    author: "",
  });

  document.title = "Cara E-Commerce - Editor";

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div>
      <h1>Editor</h1>
    </div>
  `
  );

  return ui;
}
