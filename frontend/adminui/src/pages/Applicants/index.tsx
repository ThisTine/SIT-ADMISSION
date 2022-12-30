import { Box, Button, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import AppLayout from "../../Layout/AppLayout";
import { AiOutlineInfoCircle } from "react-icons/ai";

import DataTable from "react-data-table-component";
const columns = [
  {
    name: "Title",
    selector: (row: any) => row.title,
  },
  {
    name: "Year",
    selector: (row: any) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const Applicants = () => {
  const { fid } = useParams();
  return (
    <AppLayout>
      <Box pt={10}>
        <HStack w="100%" mb={10} justifyContent={"space-between"}>
          <VStack alignItems={"flex-start"} gap={2}>
            <Heading size={"lg"}>Applicants</Heading>
            <HStack>
              <Text size={"md"} fontSize="xl" fontWeight={400}>
                {fid}
              </Text>
              <Button>
                <AiOutlineInfoCircle />
              </Button>
            </HStack>
          </VStack>
          <HStack>
            <Button size={"lg"} rounded="full" px={10} colorScheme="blue">
              ดาวน์โหลดข้อมูล
            </Button>
            <Button size={"lg"} rounded="full" px={10} colorScheme="blue">
              อัพเดทสถานะผู้สมัคร
            </Button>
          </HStack>
        </HStack>
        <Box p={5} bg="white" shadow={"md"} rounded="2xl">
          <DataTable columns={columns} data={data} />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default Applicants;
