import { Box, Text } from "@chakra-ui/react";
import { Answer, Choice } from "../../shared/interfaces";

interface ChoiceListItem {
  choice: Choice;
  onClick: (answer: Answer) => void;
  index: number;
}

const ChoiceItem = ({ choice, onClick, index }: ChoiceListItem) => {
  return (
    <Box
      width={"full"}
      onClick={() => onClick({ selected: choice.placement, type: choice.type })}
      borderRadius={"md"}
      backgroundColor={"whiteAlpha.100"}
      _hover={{
        backgroundColor: "teal",
      }}
      _focus={{
        backgroundColor: "teal",
      }}
      px={"3"}
      py={"4"}
      cursor={"pointer"}
      mt={index === 0 ? "0" : "4"}
    >
      <Text>
        {choice.placement} - {choice.choice}
      </Text>
    </Box>
  );
};

export default ChoiceItem;
