import Image from "next/image";
import { Button, ButtonProps } from "@chakra-ui/react";

import rockImg from "../assets/icon-rock.svg";
import paperImg from "../assets/icon-paper.svg";
import scissorsImg from "../assets/icon-scissors.svg";

interface ChoiceButtonProps extends ButtonProps {
  variant: "Rock" | "Paper" | "Scissors" | "Load";
  onClick?: () => void;
}

export function ChoiceButton({
  variant,
  onClick,
  ...props
}: ChoiceButtonProps) {
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
      bg="gray.50"
      w={["32", "32", "40"]}
      h={["32", "32", "40"]}
      borderRadius={9999}
      border="16px"
      borderColor={borderColor[variant]}
      borderStyle="solid"
      onClick={onClick}
      {...props}
    >
      {variant !== "Load" && <Image src={icon[variant]} alt="" />}
    </Button>
  );
}
