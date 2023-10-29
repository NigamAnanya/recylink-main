import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="green.200" w="100%" p={4} mt={6} color="green.900">
      <Text fontSize="sm" textAlign="center">Trash Tagging Project © 2023</Text>
    </Box>
  );
}

export default Footer;
