import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "shared/routes";

const HomeScreen: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [isNameValidated, setNameValidation] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.sessionStorage.removeItem("user");
    window.sessionStorage.removeItem("result");
  }, []);

  const onStart = () => {
    if (!name) {
      setNameValidation(true);
    } else {
      setNameValidation(false);
      window.sessionStorage.setItem("user", name);
      navigate(routes.PLAY);
    }
  };

  const onEnterPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      onStart();
    }
  };

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      alignContent={"center"}
      alignItems={"center"}
    >
      <Heading as={"h1"} size={"4xl"}>
        Welcome to the Personality Test
      </Heading>
      <Text fontSize={"xl"} my={"6"}>
        What are you? An introvert or an extrovert? Find out by taking the test
      </Text>
      <Box display={"flex"}>
        <Box mr={"3"}>
          <Input
            variant={"flushed"}
            isInvalid={isNameValidated}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Your name"}
            value={name}
            color={"white"}
            autoFocus={true}
            onKeyPress={onEnterPress}
          />
          <Text fontSize={"medium"} color={"red.300"} height={"25px"} mt={"2"}>
            {isNameValidated ? "Enter your name to start" : ""}
          </Text>
        </Box>
        <Button onClick={onStart}>START</Button>
      </Box>
    </Box>
  );
};

export default HomeScreen;
