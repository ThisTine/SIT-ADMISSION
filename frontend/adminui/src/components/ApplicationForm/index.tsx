import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ControlledInput from "./ControlledInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import { m } from "framer-motion";
interface FormState {
  name: string;
  description: string;
  major: string[];
  openRange: DateRangePickerValue;
  announceInteviewRange: DateRangePickerValue;
  announceRange: DateRangePickerValue;
}

const index = () => {
  const [steps, setSteps] = useState(0);
  //   const [editState, setEditState] = useState(EditorState.createEmpty());
  const [value, setValue] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    description: "",
    major: [],
    openRange: [null, null],
    announceInteviewRange: [null, null],
    announceRange: [null, null],
  });
  const majorOptions = ["CS", "IT", "DSI"];

  return (
    <VStack
      gap={5}
      w="100%"
      p={10}
      bg="white"
      shadow={"md"}
      mt={5}
      rounded="xl"
    >
      <ControlledInput
        label="Application Name"
        input={{
          placeholder: "AR 2022",
          size: "lg",
          value: form.name,
          onChange: (e) => setForm((v) => ({ ...v, name: e.target.value })),
        }}
      />
      <Box w="100%" mt={5}>
        <Text size={"sm"} mb={2}>
          คำอธิบาย
        </Text>
        <ReactQuill
          theme="snow"
          value={form.description}
          onChange={(e) => setForm((v) => ({ ...v, description: e }))}
          placeholder="Description"
        />
      </Box>
      <Box w="100%">
        <Text size={"sm"}>หลักสูตรที่เปิดรับสมัคร</Text>
        <HStack mt={5} gap={8}>
          {majorOptions.map((item) => (
            <Button
              size={"lg"}
              colorScheme={form.major.includes(item) ? "blue" : "gray"}
              onClick={
                form.major.includes(item)
                  ? () =>
                      setForm((v) => ({
                        ...v,
                        major: v.major.filter((t) => t !== item),
                      }))
                  : () => setForm((v) => ({ ...v, major: [...v.major, item] }))
              }
              px={10}
              rounded={"full"}
              key={item}
            >
              {item}
            </Button>
          ))}
        </HStack>
      </Box>
      <Box w="100%">
        <SimpleGrid columns={2} gap={5}>
          <Box>
            <DateRangePicker
              label="เวลาการรับสมัคร"
              required
              size="md"
              dropdownType="modal"
              value={form.openRange}
              onChange={(e) => setForm((v) => ({ ...v, openRange: e }))}
            />
          </Box>
          <Box>
            <DateRangePicker
              label="เวลาประกาศการคัดเลือก"
              required
              size="md"
              dropdownType="modal"
              value={form.announceInteviewRange}
              onChange={(e) =>
                setForm((v) => ({ ...v, announceInteviewRange: e }))
              }
            />
          </Box>
          <Box>
            <DateRangePicker
              label="เวลาประกาศผลสอบสัมภาษณ์"
              required
              size="md"
              dropdownType="modal"
              value={form.announceRange}
              onChange={(e) => setForm((v) => ({ ...v, announceRange: e }))}
            />
          </Box>
        </SimpleGrid>
      </Box>
      <HStack w="100%" justifyContent={"flex-end"} mt={5}>
        <Button colorScheme={"blue"} size="lg" rounded={"full"} px={10}>
          Submit
        </Button>
      </HStack>
    </VStack>
  );
};

export default index;
