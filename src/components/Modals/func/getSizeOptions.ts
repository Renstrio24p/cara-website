import { Product } from "data/types/ProductType";

export const getSizeOptions = (data: Product) => {
  return Object.entries(data.size)
    .map(
      ([size, price]) =>
        `<option value="${price}">${size.toUpperCase()}</option>`
    )
    .join("");
};
