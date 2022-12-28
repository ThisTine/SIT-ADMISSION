import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { FormEvent, FormEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BlurCard from "../../components/BlurCard";
import Devider from "../../components/Devider";
import FloatingInput, { sitInput } from "../../components/FloatingInput";
import AppLayout from "../../Layout/AppLayout";

const Check = () => {
  const [rid, setRid] = useState<string>("");
  const router = useNavigate();
  const submit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    router("/review/" + rid);
  };
  return (
    <AppLayout>
      <BlurCard>
        <VStack
          w="100%"
          minH="md"
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          as="form"
          onSubmit={submit}
        >
          <Box w="100%">
            <Heading>เช็คผลการรับสมัคร</Heading>
            <Devider mb={10} />
          </Box>
          <HStack justifyContent={"center"} w="100%">
            <Container maxW={"container.sm"}>
              <Input
                placeholder="เลขที่ใบสมัคร"
                variant={"unstyled"}
                {...sitInput}
                fontSize="3xl"
                textAlign="center"
                _placeholder={{
                  color: "rgba(255,255,255,0.8)",
                }}
                type="number"
                value={rid}
                onChange={(e) => setRid(e.target.value)}
              />
            </Container>
          </HStack>

          <HStack pb={12} justifyContent={"center"} w="100%">
            <Button
              type="submit"
              size={"lg"}
              fontSize="2xl"
              variant={"sit-blue"}
              isDisabled={!rid}
            >
              ตรวจสอบข้อมูล
            </Button>
          </HStack>
        </VStack>
      </BlurCard>
    </AppLayout>
  );
};

export default Check;
