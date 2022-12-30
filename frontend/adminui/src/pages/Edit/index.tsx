import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ApplicationForm from "../../components/ApplicationForm";
import AppLayout from "../../Layout/AppLayout";

const Edit = () => {
  return (
    <AppLayout>
      <Box pt={10}>
        <Heading>Edit Application</Heading>
        <ApplicationForm />
      </Box>
    </AppLayout>
  );
};

export default Edit;
