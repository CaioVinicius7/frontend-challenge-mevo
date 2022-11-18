import { VStack } from "@chakra-ui/react";

import { Scoreboard } from "../components/Scoreboard";

export default function Home() {
  return (
    <VStack maxW={820} h="full" mx="auto" mt="14" px="8">
      <Scoreboard />
    </VStack>
  );
}
