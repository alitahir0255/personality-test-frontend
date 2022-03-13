import { Choice } from "./Choice";

export interface Question {
  id: string;
  question: string;
  choices: Array<Choice>;
}
