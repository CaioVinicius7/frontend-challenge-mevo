import { Center, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";

import { Scoreboard } from "../components/Scoreboard";
import { ChoiceButton } from "../components/ChoiceButton";

export default function Home() {
  return (
    <VStack maxW={820} mx="auto" mt="14" px="8">
      <Scoreboard />

      <Flex w="full" flexWrap="wrap" pt="50">
        <Center w="50%">
          <ChoiceButton variant="Rock" onClick={() => {}} />
        </Center>

        <Center w="50%">
          <ChoiceButton variant="Paper" onClick={() => {}} />
        </Center>

        <Center w="full" pt={["4", "10"]}>
          <ChoiceButton variant="Scissors" onClick={() => {}} />
        </Center>
      </Flex>
    </VStack>
  );
}
