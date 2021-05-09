import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Matheus Neves</Text>
            <Text color="gray.300" fontSize="small">matheusneves1989@gmail.com</Text>
          </Box>
        )
      }
      <Avatar
        size="md"
        name="Matheus Neves"
        src="https://github.com/matheus-neves.png"
      />
    </Flex>
  );
}