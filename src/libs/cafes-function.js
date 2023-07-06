import { cafes } from "./cafes";

export const getCafeDetail = (id) => {
  return cafes.find((cafe) => cafe.id === id);
};
