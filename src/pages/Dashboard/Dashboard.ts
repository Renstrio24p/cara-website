import { useTSMetaData } from "utils/hooks/useTSMetaData";
import { useTSElements } from "../../utils/hooks/useTSElements";

export default function Dashboard(DOM: HTMLElement) {
  useTSMetaData({
    name: "Dashboard",
    description: "Dashboard Page",
    author: "",
  });

  document.title = "Cara E-Commerce - Dashboard";

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div>
      <h1>Dashboard</h1>
    </div>
    `
  );

  return ui;
}
