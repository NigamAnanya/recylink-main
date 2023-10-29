import { Box, Button, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, FormControl, FormLabel, color } from "@chakra-ui/react";
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import enviroconnect from "../images/recylink.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userSignedIn, setUserSignedIn] = useState(false);
  
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
  
    const handleUserSignIn = () => {
      setUserSignedIn(true);
      onClose();
    };
  
    return (
      <>
        <Flex justify="space-between" m={5} p={4} borderRadius={"xl"} boxShadow="md" bgColor={"black"} >
          <Box>
            <Image src={enviroconnect} alt="EnviroConnect" width={200} />
          </Box>
          <Flex mt="3" >
            <Link href="/">
              <Button color={"whiteAlpha.900"} bgColor={"black"} _hover={{color:"black" , bgColor:"whiteAlpha.800"}} variant="ghost" mr={2}>
                Home
              </Button>
            </Link>
           
              <Link href="/complain">
                <Button color={"whiteAlpha.900"} bgColor={"black"} _hover={{color:"black" , bgColor:"whiteAlpha.800"}} variant="ghost" mr={2}>
                  Complaint
                </Button>
              </Link>

            <Button color={"whiteAlpha.900"} bgColor={"black"} _hover={{color:"black" , bgColor:"whiteAlpha.800"}} variant="ghost" mr={2}>
              Contact
            </Button>
            {/* <Button color={"whiteAlpha.900"} bgColor={"black"} _hover={{color:"black" , bgColor:"whiteAlpha.800"}} variant="solid" onClick={onOpen}>
              Sign In
            </Button> */}
          </Flex>
        </Flex>
  
        <SignInModal isOpen={isOpen} onClose={onClose} onUserSignIn={handleUserSignIn} />
      </>
    );
  };

  type SignInModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onUserSignIn: () => void;
  };
  
  
  const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onUserSignIn }) => {
    const router = useRouter();
      
    const [signInType, setSignInType] = useState<string | null>(null); // 'user' or 'authority'
  
    const handleSignIn = () => {
      if (signInType === 'user') {
        onUserSignIn();
        router.push('/complain');  // Navigate to the complain page
      } else if (signInType === 'authority') {
        router.push('/reviewComplaints');  // Navigate to the reviewComplaints page
      }
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {!signInType && (
              <Flex flexDirection="column">
                <Button mb={3} onClick={() => setSignInType('user')}>Sign in as User</Button>
                <Button onClick={() => setSignInType('authority')}>Sign in as Authority</Button>
              </Flex>
            )}
  
            {signInType === 'user' && (
              <>
                <FormControl>
                  <FormLabel>Aadhar Number</FormLabel>
                  <Input placeholder="Enter Aadhar Number" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input placeholder="Enter Phone Number" />
                </FormControl>
              </>
            )}
  
            {signInType === 'authority' && (
              <FormControl>
                <FormLabel>Authority ID</FormLabel>
                <Input placeholder="Enter Authority ID" />
              </FormControl>
            )}
          </ModalBody>
  
          <ModalFooter>
            {signInType && (
              <>
                <Button colorScheme="blue" mr={3} onClick={handleSignIn}> 
                  Sign In
                </Button>
                <Button variant="ghost" mr={3} onClick={() => setSignInType(null)}>
                  Back
                </Button>
              </>
            )}
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
export default Header;
