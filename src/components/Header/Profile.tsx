import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Matheus Neves</Text>
        <Text color="gray.300" fontSize="small">matheusneves1989@gmail.com</Text>
      </Box>
      <Avatar
        size="md"
        name="Matheus Neves"
        src="https://github.com/matheus-neves.png"
      />
    </Flex>
  );
}