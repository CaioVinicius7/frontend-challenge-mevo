import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Center, Flex, Text, VStack } from "@chakra-ui/react";

import { Scoreboard } from "../components/Scoreboard";
import { ChoiceButton } from "../components/ChoiceButton";

type PlayerChoiceOptions = "Rock" | "Paper" | "Scissors";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [playerChoice, setPlayerChoice] =
    useState<PlayerChoiceOptions>("Paper");

  const router = useRouter();

  async function handleStartGame(playerChoice: PlayerChoiceOptions) {
    setIsLoading(true);

    setPlayerChoice(playerChoice);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    router.push("/result");
  }

  return (
    <>
      <Head>
        <title> Jokenpo | Home </title>
      </Head>
      <VStack maxW={820} mx="auto" mt="14" px="8">
        <Scoreboard />

        {isLoading ? (
          <Flex w="full" flexWrap="wrap" pt="50" justifyContent="center">
            <Center w="50%">
              <ChoiceButton variant={playerChoice} />
            </Center>

            <Center w="50%">
              <ChoiceButton variant="Load" />
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
              />
            </Center>

            <Center w="50%">
              <ChoiceButton
                variant="Paper"
                onClick={() => {
                  handleStartGame("Paper");
                }}
              />
            </Center>

            <Center w="full" pt={["4", "10"]}>
              <ChoiceButton
                variant="Scissors"
                onClick={() => {
                  handleStartGame("Scissors");
                }}
              />
            </Center>
          </Flex>
        )}
      </VStack>
    </>
  );
}
