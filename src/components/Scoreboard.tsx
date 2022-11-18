import { VStack, Heading, Text } from "@chakra-ui/react";

export function Scoreboard() {
  return (
    <VStack
      as="header"
      borderRadius={8}
      bg="gray.200"
      w="full"
      pt="3"
      spacing={["0", "-1", "-1.5"]}
      color="blue.700"
    >
      <Heading textTransform="uppercase" fontSize={["xl", "xl", "2xl"]}>
        Score
      </Heading>
      <Text as="strong" fontSize={["2xl", "3xl", "4xl"]}>
        15
      </Text>
    </VStack>
  );
}
