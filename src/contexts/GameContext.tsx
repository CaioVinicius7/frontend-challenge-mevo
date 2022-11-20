import { createContext, ReactNode, useEffect, useState } from "react";
import Router from "next/router";

type ChoiceOptions = "Rock" | "Paper" | "Scissors" | "None";
type GameResultOptions = "win" | "lose" | "tied";

interface GameContextType {
  playerChoice: ChoiceOptions;
  machineChoice: ChoiceOptions;
  score: number;
  gameResult: GameResultOptions;
  startGame: (playerChoice: ChoiceOptions) => void;
  resetScore: () => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContext = createContext({} as GameContextType);

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [playerChoice, setPlayerChoice] = useState<ChoiceOptions>("None");
  const [machineChoice, setMachineChoice] = useState<ChoiceOptions>("None");
  const [gameResult, setGameResult] = useState<GameResultOptions>("lose");
  const [score, setScore] = useState(0);

  const choices: ChoiceOptions[] = ["Rock", "Paper", "Scissors"];

  async function startGame(playerChoice: ChoiceOptions) {
    setPlayerChoice(playerChoice);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const randomChoice = Math.floor(Math.random() * choices.length);

    setMachineChoice(choices[randomChoice]);

    calculateGameResult(playerChoice, choices[randomChoice]);

    Router.push("/result");
  }

  function calculateGameResult(
    firstChoice: ChoiceOptions,
    secondChoice: ChoiceOptions
  ) {
    const winCondition =
      (firstChoice === "Paper" && secondChoice === "Rock") ||
      (firstChoice === "Rock" && secondChoice === "Scissors") ||
      (firstChoice === "Scissors" && secondChoice === "Paper");

    setGameResult("lose");

    if (firstChoice === secondChoice) {
      setGameResult("tied");
    }

    if (winCondition) {
      setGameResult("win");
      setScore((state) => state + 1);

      localStorage.setItem("@jokenpo-score", JSON.stringify(score + 1));
    }
  }

  function resetScore() {
    setScore(0);
    localStorage.setItem("@jokenpo-score", JSON.stringify(0));
  }

  useEffect(() => {
    const storageScore = localStorage.getItem("@jokenpo-score");

    if (storageScore) {
      setScore(JSON.parse(storageScore));
    }
  }, []);

  return (
    <GameContext.Provider
      value={{
        playerChoice,
        machineChoice,
        score,
        gameResult,
        startGame,
        resetScore
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
