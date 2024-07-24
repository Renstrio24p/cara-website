export function toggleMenu(navList: HTMLElement) {
  if (navList.classList.contains("right-0")) {
    navList.classList.remove("right-0");
    navList.classList.add("right-[-300px]");
  } else {
    navList.classList.add("right-0");
    navList.classList.remove("right-[-300px]");
  }
}

export function closeMenu(navList: HTMLElement) {
  navList.classList.remove("right-0");
  navList.classList.add("right-[-300px]");
}
