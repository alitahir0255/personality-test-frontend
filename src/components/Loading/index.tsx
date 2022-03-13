import { Image, Text, VStack } from "@chakra-ui/react";

const Loading = ({ title }: { title: string }) => {
  return (
    <VStack spacing={"6"}>
      <Image
        src="images/svgs/loading.svg"
        alt="Loading Indicator"
        boxSize={"24"}
      />
      <Text>{title}</Text>
    </VStack>
  );
};

export default Loading;
