import { Box, Stack, Text, VStack, Button } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very reasonable price.
          </Text>
        </VStack>

        <VStack w={"full"} alignItems={["center", "flex-end"]}>
          <Text fontWeight={"bold"}>Contact Us</Text>

          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a target={'blank'} href="https://instagram.com/singhanshiikaa">
              INSTAGRAM
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a target={'blank'} href="https://mail.google.com/anshika.03052002">
              EMAIL
            </a>
          </Button>
        </VStack>
        


      </Stack>
    </Box>
  );
};

export default Footer;
