import { createContext, ReactNode, useState } from "react";
import Router from "next/router";

type ChoiceOptions = "Rock" | "Paper" | "Scissors";

interface GameContextType {
  playerChoice: ChoiceOptions;
  machineChoice: ChoiceOptions;
  machineIsChoosing: boolean;
  score: number;
  handleStartGame: (playerChoice: ChoiceOptions) => void;
  setMachineIsChoosing: (value: boolean) => void;
  setScore: (value: number) => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContext = createContext({} as GameContextType);

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [playerChoice, setPlayerChoice] = useState<ChoiceOptions>("Paper");
  const [machineChoice, setMachineChoice] = useState<ChoiceOptions>("Paper");
  const [score, setScore] = useState(0);
  const [machineIsChoosing, setMachineIsChoosing] = useState(false);

  const choices: ChoiceOptions[] = ["Rock", "Paper", "Scissors"];

  async function handleStartGame(playerChoice: ChoiceOptions) {
    setMachineIsChoosing(true);

    setPlayerChoice(playerChoice);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const randomChoice = Math.floor(Math.random() * choices.length);

    setMachineChoice(choices[randomChoice]);

    Router.push("/result");
  }

  return (
    <GameContext.Provider
      value={{
        playerChoice,
        machineChoice,
        machineIsChoosing,
        score,
        handleStartGame,
        setMachineIsChoosing,
        setScore
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
