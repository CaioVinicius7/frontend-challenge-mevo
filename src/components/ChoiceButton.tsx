import Image from "next/image";
import { Button } from "@chakra-ui/react";

import rockImg from "../assets/icon-paper.svg";
import paperImg from "../assets/icon-rock.svg";
import scissorsImg from "../assets/icon-scissors.svg";

interface ChoiceButtonProps {
  variant: "Rock" | "Paper" | "Scissors" | "Load";
  onClick: () => void;
}

export function ChoiceButton({ variant, onClick }: ChoiceButtonProps) {
  const borderColor = {
    Rock: "green.500",
    Paper: "yellow.400",
    Scissors: "blue.400",
    Load: "red.500"
  };

  const icon = {
    Rock: rockImg,
    Paper: paperImg,
    Scissors: scissorsImg
  };

  return (
    <Button
      bg="#ecf0f1"
      w={["32", "32", "40"]}
      h={["32", "32", "40"]}
      borderRadius={9999}
      border="16px"
      borderColor={borderColor[variant]}
      borderStyle="solid"
      _hover={{
        transform: "scale(1.1)"
      }}
      onClick={onClick}
    >
      {variant !== "Load" && <Image src={icon[variant]} alt="" />}
    </Button>
  );
}
