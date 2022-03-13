import { Result } from "shared/interfaces";

export const findCount = (
  list: Array<Result>,
  type: "Introvert" | "Extrovert"
): number => {
  return list.filter((result) => result.answer.type === type).length;
};
