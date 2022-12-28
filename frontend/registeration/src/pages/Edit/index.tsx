import {
  VStack,
  Box,
  Heading,
  HStack,
  Container,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlurCard from "../../components/BlurCard";
import Devider from "../../components/Devider";
import { sitInput } from "../../components/FloatingInput";
import AppLayout from "../../Layout/AppLayout";

const Edit = () => {
  const [token, setToken] = useState<string>("");
  const router = useNavigate();
  const params = new URLSearchParams(window.location.search);
  useEffect(() => {
    if (params.get("token")) {
      setToken(params.get("token") || "");
    }
    // console.log(params.get("token"));
  }, [params.get("token")]);
  const submit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    router("/");
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
            <Heading>แก้ไขข้อมูลใบสมัคร</Heading>
            <Devider mb={10} />
          </Box>
          <HStack justifyContent={"center"} w="100%">
            <Container maxW={"container.sm"}>
              <Input
                placeholder="รหัสแก้ไขข้อมูล"
                variant={"unstyled"}
                {...sitInput}
                fontSize="3xl"
                textAlign="center"
                _placeholder={{
                  color: "rgba(255,255,255,0.8)",
                }}
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </Container>
          </HStack>

          <HStack pb={12} justifyContent={"center"} w="100%">
            <Button
              type="submit"
              size={"lg"}
              fontSize="2xl"
              variant={"sit-blue"}
              isDisabled={!token}
            >
              แก้ไขข้อมูล
            </Button>
          </HStack>
        </VStack>
      </BlurCard>
    </AppLayout>
  );
};

export default Edit;
