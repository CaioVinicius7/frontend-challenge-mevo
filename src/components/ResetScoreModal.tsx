import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
  Box
} from "@chakra-ui/react";

import { useGame } from "../hooks/useGame";

interface ResetScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResetScoreModal({ isOpen, onClose }: ResetScoreModalProps) {
  const { resetScore } = useGame();

  const toast = useToast();

  function handleResetScore() {
    resetScore();
    onClose();

    toast({
      title: `Your score was successfully reset`,
      status: "success",
      isClosable: true
    });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Reset Score</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          Are you sure you want to reset the score? Your score will be lost and
          cannot be recovered.
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>

          <Button colorScheme="blue" onClick={handleResetScore}>
            Reset
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
