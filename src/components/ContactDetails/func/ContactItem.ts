export const generateContactItem = (iconClass: string, textContent: string) => {
  return /*html*/ `
      <li class='flex gap-6 items-center mb-2'>
        <i class='${iconClass}'></i>
        <span>${textContent}</span>
      </li>
    `;
};
