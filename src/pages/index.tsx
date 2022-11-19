import { useContext, useState } from "react";
import Head from "next/head";
import { Center, Flex, Text, VStack } from "@chakra-ui/react";

import { GameContext } from "../contexts/GameContext";

import { Scoreboard } from "../components/Scoreboard";
import { ChoiceButton } from "../components/ChoiceButton";

type PlayerChoiceOptions = "Rock" | "Paper" | "Scissors";

export default function Home() {
  const [machineIsChoosing, setMachineIsChoosing] = useState(false);

  const { playerChoice, startGame } = useContext(GameContext);

  function handleStartGame(choice: PlayerChoiceOptions) {
    setMachineIsChoosing(true);
    startGame(choice);
  }

  return (
    <>
      <Head>
        <title> Jokenpo | Home </title>
      </Head>
      <VStack maxW={820} mx="auto" mt="14" px="8">
        <Scoreboard />

        {machineIsChoosing ? (
          <Flex w="full" flexWrap="wrap" pt="50" justifyContent="center">
            <Center w="50%">
              <ChoiceButton as="span" variant={playerChoice} />
            </Center>

            <Center w="50%">
              <ChoiceButton as="span" />
            </Center>

            <Text
              mt="10"
              fontSize={["2xl", "3xl", "4xl"]}
              fontWeight="bold"
              color="gray.50"
            >
              MACHINE IS CHOOSING...
            </Text>
          </Flex>
        ) : (
          <Flex w="full" flexWrap="wrap" pt="50">
            <Center w="50%">
              <ChoiceButton
                variant="Rock"
                onClick={() => {
                  handleStartGame("Rock");
                }}
                _hover={{
                  transform: "scale(1.1)"
                }}
              />
            </Center>

            <Center w="50%">
              <ChoiceButton
                variant="Paper"
                onClick={() => {
                  handleStartGame("Paper");
                }}
                _hover={{
                  transform: "scale(1.1)"
                }}
              />
            </Center>

            <Center w="full" pt={["4", "10"]}>
              <ChoiceButton
                variant="Scissors"
                onClick={() => {
                  handleStartGame("Scissors");
                }}
                _hover={{
                  transform: "scale(1.1)"
                }}
              />
            </Center>
          </Flex>
        )}
      </VStack>
    </>
  );
}
