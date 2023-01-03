import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { MdTimer } from "react-icons/md";
import { FormState } from "../ApplicationForm";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface InfoModalProps extends ModalProps {
  applicationData: FormState;
}

const InfoModal: FC<InfoModalProps> = ({
  isOpen,
  onClose,
  applicationData,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ข้อมูลการรับสมัคร</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading>{applicationData.name}</Heading>
          <HStack>
            <Heading>
              <MdTimer />
            </Heading>
            <Text>
              {applicationData.announceRange[0]?.toISOString()} -{" "}
              {applicationData.announceRange[1]?.toISOString()} เวลาประกาศผล{" "}
            </Text>
          </HStack>
          <HStack>
            <Heading>
              <MdTimer />
            </Heading>
            <Text>
              {applicationData.announceInteviewRange[0]?.toISOString()} -{" "}
              {applicationData.announceInteviewRange[1]?.toISOString()}{" "}
              เวลาประกาศผลสอบสัมภาษณ์
            </Text>
          </HStack>
          <HStack>
            <Heading>
              <MdTimer />
            </Heading>
            <Text>
              {applicationData.openRange[0]?.toISOString()} -{" "}
              {applicationData.openRange[1]?.toISOString()} เวลารับสมัคร{" "}
            </Text>
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            ลบข้อมูล
          </Button>
          <Button colorScheme="yellow">แก้ไขข้อมูล</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;
