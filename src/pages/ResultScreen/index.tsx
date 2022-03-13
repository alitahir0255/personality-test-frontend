import { Button, Heading, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Result } from "shared/interfaces";
import routes from "shared/routes";
import { findCount } from "utils";

const ResultScreen: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    findResult();
  }, []);

  const onReset = () => {
    navigate(routes.HOME);
  };

  const findResult = () => {
    const storedResult = window.sessionStorage.getItem("result");
    if (storedResult) {
      const listOfResults: Array<Result> = JSON.parse(storedResult);
      const introvertCount = findCount(listOfResults, "Introvert");
      const extrovertCount = findCount(listOfResults, "Extrovert");
      if (introvertCount > extrovertCount) {
        setResult("Introvert");
      } else {
        setResult("Extrovert");
      }
    } else {
      navigate(routes.HOME);
    }
  };

  return (
    <VStack spacing={"6"}>
      <Heading as={"h1"} size={"4xl"}>
        You are an {result}
      </Heading>
      <Button onClick={onReset}>PLAY AGAIN</Button>
    </VStack>
  );
};

export default ResultScreen;
