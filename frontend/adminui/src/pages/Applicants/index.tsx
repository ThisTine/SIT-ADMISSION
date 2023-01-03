import {
  Box,
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  useModal,
  useBoolean,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import AppLayout from "../../Layout/AppLayout";
import { AiOutlineDown, AiOutlineInfoCircle } from "react-icons/ai";

import DataTable from "react-data-table-component";
import InfoModal from "../../components/modal/InfoModal";
import UpdateModal from "../../components/modal/UpdateModal";
import { FC } from "react";

const StatusMenu: FC<{ status: string }> = ({ status }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
        {status}
      </MenuButton>
      <Portal>
        <MenuList>
          <MenuItem>ผ่านการสมัคร</MenuItem>
          <MenuItem>ผ่านการสมัภาษณ์</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};

const columns = [
  {
    name: "Id",
    selector: (row: any) => row.id,
  },
  {
    name: "Name",
    selector: (row: any) => row.name,
  },
  {
    name: "Status",
    selector: (row: any) => <StatusMenu status={row.status} />,
  },
];

const data = [
  {
    id: 1,
    name: "นาย สิทธิโชค อ่วมศิริ",
    status: "รอผลการสมัคร",
  },
  {
    id: 1,
    name: "นาย สิทธิโชค อ่วมศิริ",
    status: "ผ่านการสัมภาษณ์",
  },
];

const Applicants = () => {
  const { fid } = useParams();
  const [isOpen, { on, off }] = useBoolean();
  const [isUpdateModal, { on: updateOn, off: updateOff }] = useBoolean();
  return (
    <AppLayout>
      <InfoModal
        isOpen={isOpen}
        onClose={off}
        applicationData={{
          name: "",
          major: ["CS", "IT"],
          description: "test",
          announceInteviewRange: [new Date(), new Date()],
          announceRange: [new Date(), new Date()],
          openRange: [new Date(), new Date()],
        }}
      />
      <UpdateModal isOpen={isUpdateModal} onClose={updateOff} />
      <Box pt={10}>
        <HStack w="100%" mb={10} justifyContent={"space-between"}>
          <VStack alignItems={"flex-start"} gap={2}>
            <Heading size={"lg"}>Applicants</Heading>
            <HStack>
              <Text size={"md"} fontSize="xl" fontWeight={400}>
                {fid}
              </Text>
              <Button onClick={on}>
                <AiOutlineInfoCircle />
              </Button>
            </HStack>
          </VStack>
          <HStack>
            <Button size={"lg"} rounded="full" px={10} colorScheme="blue">
              ดาวน์โหลดข้อมูล
            </Button>
            <Button
              onClick={updateOn}
              size={"lg"}
              rounded="full"
              px={10}
              colorScheme="blue"
            >
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
