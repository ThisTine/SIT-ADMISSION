import {
  Heading,
  Box,
  VStack,
  Container,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import BlurCard from "../BlurCard";
import Devider from "../Devider";
import FloatingInput from "../FloatingInput";
import { Link as RouterDomLink } from "react-router-dom";
import { registerDataContext } from "../../context/RegisterDataContext";
const Welcome: FC<{ setUserEmail: Dispatch<SetStateAction<string>> }> = ({
  setUserEmail,
}) => {
  const {
    data: { email },
  } = useContext(registerDataContext);
  const onSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setUserEmail(email);
  };
  return (
    <BlurCard>
      <Heading>
        แบบฟอร์มรับสมัครนักศึกษาระดับปริญญาตรีโครงการ Active Recruitment
      </Heading>
      <Text variant={"sub-heading"}>รอบ พฤศจิกายน 65</Text>
      <Devider />
      <Box my={5}>
        <Heading size={"md"}>คำชี้แจง</Heading>
        <Text color="white">
          {`
              แบบฟอร์มนี้ใช้สำหรับรับสมัคร นักศึกษาปริญญาตรี โครงการ Active Recuitment (Portfolio) ปีการศึกษา 2566 รอบมกราคม 2566 ใน 2 สาขาวิชาเท่านั้น \n
              ผู้สมัคร 1 คนสามารถสมัครได้มากกว่า 1 สาขาวิชา \n
              ใช้ผลการเรียนอย่างน้อย 5 ภาคการศึกษา \n
              ทั้งไฟล์ Portfolio และไฟล์ Transcipt ( ปพ.1 ) ให้อัพขึ้นบน Google Drive หรือ One Drive และเปิดการเข้าถึงแบบสาธารณะ และนำ link มาใส่ในช่องกรอกข้อมูลตามหัวข้อที่ระบุ \n
              สำหรับผู้สมัครที่มีผลคะแนน SAT (SAT Reasoning Test ) ให้ใส่รวมไว้ในไฟล์ Protfolio ( ไม่มีไม่ต้องใส่ ) \n
              กรุณากรอกข้อมูลให้ครบทุกช่อง เพื่อผลประโยชน์ของผู้สมัคร และเพื่อความสะดวกข้องคณะกรรมการคัดเลือก \n
              `}
        </Text>
      </Box>
      <VStack>
        <Container maxW={"md"} as="form" onSubmit={onSubmit}>
          <FloatingInput
            placeholder="Email"
            name="email"
            isRequired
            input={{ type: "email" }}
          />
          <VStack gap={5} mt={5}>
            <Button px={16} variant={"sit-blue"} size={"lg"} type="submit">
              ฉันเข้าใจแล้ว
            </Button>
            <RouterDomLink to="/edit">
              <Link color={"white"} as="p">
                แก้ไขข้อมูลใบสมัครเก่า
              </Link>
            </RouterDomLink>
          </VStack>
        </Container>
      </VStack>
    </BlurCard>
  );
};

export default Welcome;
