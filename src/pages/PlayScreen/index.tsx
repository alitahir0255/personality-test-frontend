import { Box, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChoiceItem from "components/ChoiceListItem";
import Loading from "components/Loading";
import { Answer, Choice, Question, Result } from "shared/interfaces";
import routes from "shared/routes";

const updateResult = (question: Question, answer: Answer) => {
  const storedResult = window.sessionStorage.getItem("result");
  if (!storedResult) {
    const result = [];
    result.push({ ...question, answer });
    window.sessionStorage.setItem("result", JSON.stringify(result));
  } else {
    const questions: Array<Result> = JSON.parse(storedResult);
    questions.push({ ...question, answer });
    window.sessionStorage.setItem("result", JSON.stringify(questions));
  }
};

const PlayScreen = () => {
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [finish, setFinish] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (finish) {
        navigate(routes.RESULT);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [finish]);

  const fetchQuestions = async () => {
    try {
      const user = window.sessionStorage.getItem("user");
      if (!user) {
        navigate(routes.HOME);
      }
      const response = await axios.get("http://localhost:3000/questions");
      const { data } = response.data;
      setQuestions(data);
      setCurrentQuestion(data[currentIndex]);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const doSomething = () => {
    setCurrentIndex(0);
    window.sessionStorage.removeItem("result");
  };

  useEffect(() => {
    window.addEventListener("beforeunload", doSomething);

    return () => {
      window.removeEventListener("beforeunload", doSomething);
    };
  }, []);

  const onClickAnswer = (answer: Answer) => {
    const question = questions[currentIndex];
    updateResult(question, answer);
    setCurrentIndex((prevState) => {
      if (prevState >= questions.length - 1) {
        setFinish(true);
        return prevState;
      } else {
        setCurrentQuestion(questions[prevState + 1]);
        return prevState + 1;
      }
    });
  };

  return questions.length > 0 && currentQuestion ? (
    <Box>
      {!finish ? (
        <VStack width={"2xl"} spacing={"6"}>
          <Text alignSelf={"flex-end"}>
            {currentIndex + 1} / {questions.length}
          </Text>
          <Text fontSize={"2xl"} alignSelf={"flex-start"}>
            {currentQuestion.question} You:
          </Text>
          <Box width={"full"}>
            {currentQuestion.choices.map((choice: Choice, index: number) => {
              return (
                <ChoiceItem
                  key={choice.choice}
                  choice={choice}
                  onClick={(selected: Answer) => onClickAnswer(selected)}
                  index={index}
                />
              );
            })}
          </Box>
        </VStack>
      ) : (
        <Loading title={"Getting your results"} />
      )}
    </Box>
  ) : (
    <Loading title={"Loading Questions"} />
  );
};

export default PlayScreen;
