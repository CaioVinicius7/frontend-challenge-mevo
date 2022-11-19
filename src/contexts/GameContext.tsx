import { createContext, ReactNode, useState } from "react";
import Router from "next/router";

type ChoiceOptions = "Rock" | "Paper" | "Scissors" | "None";

interface GameContextType {
  playerChoice: ChoiceOptions;
  machineChoice: ChoiceOptions;
  score: number;
  startGame: (playerChoice: ChoiceOptions) => void;
  setScore: (value: number) => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContext = createContext({} as GameContextType);

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [playerChoice, setPlayerChoice] = useState<ChoiceOptions>("None");
  const [machineChoice, setMachineChoice] = useState<ChoiceOptions>("None");
  const [score, setScore] = useState(0);

  const choices: ChoiceOptions[] = ["Rock", "Paper", "Scissors"];

  async function startGame(playerChoice: ChoiceOptions) {
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
        score,
        startGame,
        setScore
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
