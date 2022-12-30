import { Heading } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../../Layout/AppLayout";

const Applicants = () => {
  const { fid } = useParams();
  return (
    <AppLayout>
      <Heading>{fid}</Heading>
    </AppLayout>
  );
};

export default Applicants;
