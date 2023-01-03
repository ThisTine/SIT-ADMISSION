import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Heading,
  HStack,
  ModalFooter,
  Button,
  Box,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ModalProps } from "./InfoModal";

interface UpdateModalProps extends ModalProps {}

const UpdateModal: FC<UpdateModalProps> = ({ isOpen, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>อัพเดทผลการสมัคร</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            {...getRootProps()}
            p={10}
            bg={isDragActive ? "gray.200" : "gray.100"}
            borderRadius="xl"
            cursor="pointer"
          >
            <Input {...(getInputProps() as any)} />
            {isDragActive ? (
              <Heading textAlign={"center"}> วางไฟล์ที่นี่ </Heading>
            ) : (
              <Heading textAlign={"center"}>
                {file ? file.name : "อัพโหลไฟล์"}
              </Heading>
            )}
          </Box>
        </ModalBody>

        <ModalFooter display={"flex"} justifyContent={"space-between"}>
          <Link color={"blue.500"}>ดาวโหลด Template</Link>
          <Text>อัพโหลดไฟล์ csv ที่มีสถานะของผู้สมัคร</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateModal;
