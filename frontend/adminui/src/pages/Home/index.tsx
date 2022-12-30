import { Button, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import AppLayout from "../../Layout/AppLayout";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Card from "./components/Card";

const Home = () => {
  return (
    <AppLayout>
      <HStack pt={5} justifyContent={"flex-end"}>
        <Link to="/add">
          <Button
            colorScheme={"blue"}
            leftIcon={<AiOutlinePlus />}
            size="md"
            rounded="full"
          >
            Add application
          </Button>
        </Link>
      </HStack>
      <SimpleGrid mt={5} columns={{ base: 1, md: 2 }} gap={5}>
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </AppLayout>
  );
};

export default Home;
