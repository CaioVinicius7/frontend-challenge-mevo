import Head from "next/head";
import { Button, Center, Flex, Heading, VStack } from "@chakra-ui/react";

import { Scoreboard } from "../components/Scoreboard";
import { ChoiceButton } from "../components/ChoiceButton";

export default function result() {
  return (
    <>
      <Head>
        <title> Jokenpo | Result </title>
      </Head>
      <VStack maxW={820} mx="auto" mt="14" px="8">
        <Scoreboard />

        <Flex w="full" flexWrap="wrap" pt="50" justifyContent="center">
          <Center w="50%">
            <ChoiceButton variant="Rock" />
          </Center>

          <Center w="50%">
            <ChoiceButton variant="Paper" />
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
          >
            Play Again
          </Button>
        </Flex>
      </VStack>
    </>
  );
}
