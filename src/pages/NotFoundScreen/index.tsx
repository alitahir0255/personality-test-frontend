import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "shared/routes";

const NotFoundScreen: React.FC = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(routes.HOME);
  };

  return (
    <VStack spacing={"6"}>
      <Heading as={"h1"} size={"4xl"}>
        404 page | Not Found
      </Heading>
      <Text>Sorry, you're looking for something we don't have.</Text>
      <Button onClick={onNavigate} variant={"link"}>
        Return to Home
      </Button>
    </VStack>
  );
};

export default NotFoundScreen;
