import { useContext } from "react";
import {
  VStack,
  Heading,
  Text,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";
import { ArrowCounterClockwise } from "phosphor-react";

import { GameContext } from "../contexts/GameContext";
import { ResetScoreModal } from "./ResetScoreModal";

export function Scoreboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { score } = useContext(GameContext);

  return (
    <>
      <VStack
        as="header"
        borderRadius={8}
        bg="gray.200"
        w="full"
        pt="3"
        spacing={["0", "-1", "-1.5"]}
        color="blue.700"
        position="relative"
      >
        <Heading textTransform="uppercase" fontSize={["xl", "xl", "2xl"]}>
          Score
        </Heading>

        <Text as="strong" fontSize={["2xl", "3xl", "4xl"]}>
          {score}
        </Text>

        <IconButton
          aria-label="Restart Game"
          icon={<ArrowCounterClockwise />}
          position="absolute"
          right={["2", "3", "4"]}
          top={["2", "3", "4"]}
          padding="2"
          alignItems="flex-start"
          bg="transparent"
          fontSize="lg"
          onClick={onOpen}
          _hover={{
            color: "gray.900"
          }}
        />
      </VStack>

      <ResetScoreModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
