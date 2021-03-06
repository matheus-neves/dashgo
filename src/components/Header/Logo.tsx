import { Text } from "@chakra-ui/layout";

export function Logo() {
  return (
    <Text
      as="h1"
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">.</Text>
    </Text>
  )
}