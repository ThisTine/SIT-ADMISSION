import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { MdTimer, MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Box w="100%" rounded={"2xl"} overflow={"hidden"} bg="white" shadow={"md"}>
      <Box bg="#2D88FF" p={5} px={10} overflow={"hidden"}>
        <Heading size={"sm"} color="#D4D4D4">
          Opening
        </Heading>
        <Heading mt={2} color={"white"} size="md">
          AR Nov 2022
        </Heading>
      </Box>
      <Box p={5} px={10}>
        <HStack>
          <Text fontSize={"3xl"}>
            <MdTimer />
          </Text>
          <Text>21 Nov 2022 - 30 Nov 2022</Text>
        </HStack>
        <HStack>
          <Text fontSize={"3xl"}>
            <MdGroups />
          </Text>
          <Text>60</Text>
        </HStack>
      </Box>
      <HStack p={5} justifyContent="flex-end">
        <HStack>
          <Link to="/edit/1234">
            <Button rounded={"full"} colorScheme={"yellow"} px={8}>
              Edit
            </Button>
          </Link>
          <Link to="/applicants/1234">
            <Button rounded={"full"} colorScheme={"blue"} px={8}>
              View Applicants
            </Button>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Card;
