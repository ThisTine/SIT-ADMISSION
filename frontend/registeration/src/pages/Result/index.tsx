import {
  VStack,
  Box,
  Heading,
  HStack,
  Container,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import BlurCard from "../../components/BlurCard";
import Devider from "../../components/Devider";
import { sitInput } from "../../components/FloatingInput";
import AppLayout from "../../Layout/AppLayout";

const Result = () => {
  return (
    <AppLayout>
      <BlurCard>
        <VStack
          w="100%"
          minH="md"
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Box w="100%">
            <Heading>เช็คผลการรับสมัคร</Heading>
            <Devider mb={10} />
          </Box>
          <HStack justifyContent={"center"} w="100%">
            <Container maxW={"container.sm"}>
              <VStack>
                <Text color={"white"} fontSize="lg">
                  นาย สิทธิโชค อ่วมศิริ
                </Text>
                <Heading size={"2xl"}>มีสิทธิ์สอบสัมภาษณ์</Heading>
              </VStack>
            </Container>
          </HStack>

          <HStack pb={12} justifyContent={"center"} w="100%">
            <Link to="/review">
              <Button size={"lg"} fontSize="2xl" variant={"sit-blue"}>
                ตรวจสอบข้อมูลใหม่
              </Button>
            </Link>
          </HStack>
        </VStack>
      </BlurCard>
    </AppLayout>
  );
};

export default Result;
