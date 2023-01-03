import {
  Box,
  Button,
  Center,
  cookieStorageManager,
  Heading,
  Input,
  useBoolean,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import FloatingInput from "../../components/FloatingInput";
import axios from "../../config/axios/AxiosInstance";
import FloatingForm from "../../config/components/FloatingForm";
import AppLayout from "../../Layout/AppLayout";

const index = () => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const toast = useToast();
  const [cookie, setCookie] = useCookies(["token_admin"]);
  const [isLoading, { on, off }] = useBoolean();
  const onSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    on();
    axios
      .put("/public/admin/login", {
        uid: login.username,
        password: login.password,
      })
      .then((d) => {
        setCookie("token_admin", d.data.data.token, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
        });
        console.log(d.data);
      })
      .catch((e) =>
        toast({
          status: "error",
          title: "Error",
          description: e?.response?.data?.message,
        })
      )
      .finally(off);
  };
  return (
    <AppLayout>
      <Center>
        <Box
          mt={5}
          bg="white"
          w="container.sm"
          p={5}
          rounded="2xl"
          shadow={"sm"}
        >
          <Heading textAlign={"center"}>Login</Heading>
          <Center>
            <VStack gap={5} mt={5} w="md" as="form" onSubmit={onSubmit}>
              <Input
                placeholder="Username"
                required
                onChange={(e) =>
                  setLogin((v) => ({ ...v, username: e.target.value }))
                }
                size={"lg"}
              />
              <Input
                placeholder="Password"
                required
                onChange={(e) =>
                  setLogin((v) => ({ ...v, password: e.target.value }))
                }
                size={"lg"}
                type="password"
              />
              <Button
                type="submit"
                size={"lg"}
                w="100%"
                colorScheme={"blue"}
                isLoading={isLoading}
              >
                Login
              </Button>
            </VStack>
          </Center>
        </Box>
      </Center>
    </AppLayout>
  );
};

export default index;
