import { useState } from "react";
import { Box, VStack, Heading, Button, Input, FormControl, FormLabel, useToast, Flex, Image, InputGroup, InputRightElement, Avatar } from "@chakra-ui/react";
import Link from "next/link";

const Login = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isAuthorityLogin, setIsAuthorityLogin] = useState(false);
  const [aadharNumber, setAadharNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [authorityId, setAuthorityId] = useState("");
  const toast = useToast();

  const handleUserSubmit = () => {
    if (aadharNumber && phoneNumber && password) {
      // Here you would typically make an API call to validate and log the user in.
      // Redirect to the home page after a successful login:
    } else {
      toast({
        title: "Error.",
        description: "Please fill all the fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleAuthoritySubmit = () => {
    if (authorityId) {
      // Here you would typically make an API call to validate and log the authority in.
      // Redirect to the reviewComplaints page after a successful login:
      window.location.href = "/reviewComplaints";
    } else {
      toast({
        title: "Error.",
        description: "Please enter the authority ID.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, blue.900, blue.200)"
    >
      <Box w="md" p={8} bg="white" boxShadow="2xl" borderRadius="lg">
        <VStack spacing={6}>
          <Flex direction="row" align="center" mb={4}>
            <Avatar size="lg" bg="gray.500" />
            <Heading ml={3}>Login</Heading>
          </Flex>
          <Button
            colorScheme="blue"
            w="full"
            onClick={() => {
              setIsUserLogin(true);
              setIsAuthorityLogin(false);
            }}
          >
            Login as User
          </Button>

          <Button
            colorScheme="red"
            w="full"
            onClick={() => {
              setIsAuthorityLogin(true);
              setIsUserLogin(false);
            }}
          >
            Login as Authority
          </Button>

          {isUserLogin ? (
            <VStack spacing={4} w="full">
              <FormControl isRequired>
                <FormLabel>Aadhar Number</FormLabel>
                <Input
                  value={aadharNumber}
                  onChange={(e) => setAadharNumber(e.target.value)}
                  placeholder="Enter Aadhar Number"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter Phone Number"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </FormControl>
              <Link href="/homepage">
                <Button colorScheme="green" w="full" onClick={handleUserSubmit}>
                  Submit
                </Button>
              </Link>
            </VStack>
          ) : isAuthorityLogin ? (
            <VStack spacing={4} w="full">
              <FormControl isRequired>
                <FormLabel>Authority ID</FormLabel>
                <Input
                  value={authorityId}
                  onChange={(e) => setAuthorityId(e.target.value)}
                  placeholder="Enter Authority ID"
                />
              </FormControl>
              <Button
                colorScheme="green"
                w="full"
                onClick={handleAuthoritySubmit}
              >
                Submit
              </Button>
            </VStack>
          ) : null}
        </VStack>
      </Box>
    </Flex>
  );
};

export default Login;
