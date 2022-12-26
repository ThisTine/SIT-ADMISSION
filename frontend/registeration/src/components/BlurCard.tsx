import { Box, VStack } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

const BlurCard: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      w="100%"
      bg={"rgba(255,255,255,0.35)"}
      p={5}
      rounded="xl"
      backdropFilter={"blur(10px)"}
      border={"1px solid rgba(255,255,255,0.7)"}
    >
      {/* <VStack w="100%" gap={1} alignItems={"flex-start"}> */}
      {children}
      {/* </VStack> */}
    </Box>
  );
};

export default BlurCard;
