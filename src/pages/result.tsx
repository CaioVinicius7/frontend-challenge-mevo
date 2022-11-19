import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Center, Flex, Heading, VStack } from "@chakra-ui/react";

import { Scoreboard } from "../components/Scoreboard";
import { ChoiceButton } from "../components/ChoiceButton";

import { GameContext } from "../contexts/GameContext";

export default function Result() {
  const { playerChoice, machineChoice } = useContext(GameContext);

  return (
    <>
      <Head>
        <title> Jokenpo | Result </title>
      </Head>
      <VStack maxW={820} mx="auto" mt="14" px="8">
        <Scoreboard />

        <Flex w="full" flexWrap="wrap" pt="50" justifyContent="center">
          <Center w="50%">
            <ChoiceButton as="span" variant={playerChoice} />
          </Center>

          <Center w="50%">
            <ChoiceButton as="span" variant={machineChoice} />
          </Center>

          <Heading
            color="gray.50"
            textTransform="uppercase"
            mt="9"
            w="full"
            textAlign="center"
            fontSize={["2xl", "3xl", "4xl"]}
          >
            You Win
          </Heading>

          <Button
            as={Link}
            bg="blue.400"
            color="gray.50"
            fontSize={["sm", "md", "lg"]}
            textTransform="uppercase"
            mt="6"
            height={["42", "48px"]}
            width={"246px"}
            transition="0.2s"
            _hover={{
              filter: "brightness(0.8)"
            }}
            href="/"
          >
            Play Again
          </Button>
        </Flex>
      </VStack>
    </>
  );
}
