import { Answer } from "./Answer";
import { Question } from "./Question";

export interface Result extends Question {
  answer: Answer;
}
