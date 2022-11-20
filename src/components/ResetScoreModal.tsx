import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  Button
} from "@chakra-ui/react";

interface ResetScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResetScoreModal({ isOpen, onClose }: ResetScoreModalProps) {
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

          <Button colorScheme="blue">Reset</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
