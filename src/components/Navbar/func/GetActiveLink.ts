export const setActiveLink = (target: HTMLElement, DOM: HTMLElement) => {
  const links = DOM.querySelectorAll("li") as NodeListOf<HTMLLIElement>;
  links.forEach(link => {
    link.classList.remove("active");
  });
  target.classList.add("active");

  localStorage.setItem(
    "activeLink",
    target.querySelector("a")?.getAttribute("href") ?? ""
  );
};
