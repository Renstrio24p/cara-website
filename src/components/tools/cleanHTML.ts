import DOMPurify from "dompurify";

export const cleanHTML = (HTML: string) => {
  return DOMPurify.sanitize(HTML);
};
