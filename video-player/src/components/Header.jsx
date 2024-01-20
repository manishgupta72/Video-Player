import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="purple"
        zIndex={"overlay"}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        p={'0'}
        h={'10'}
        w={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Player</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button colorScheme="purple"onClick={onClose} variant={'ghost'}>  <Link to={'/'}>Home</Link> </Button>
              <Button colorScheme="purple"onClick={onClose}variant={'ghost'}>  <Link to={'/videos'}>Videos</Link> </Button>
              <Button colorScheme="purple"onClick={onClose}variant={'ghost'}>  <Link to={'/freevideos'}>Free Videos</Link> </Button>
              <Button colorScheme="purple"onClick={onClose}variant={'ghost'}>  <Link to={'/upload'}>Upload Videos</Link> </Button>
            </VStack>
            <HStack pos={"absolute"}      onClick={onClose}bottom={"4"} left={"0"} width={"full"}  justifyContent={"space-evenly"}>
            <Button colorScheme="purple" onClick={onClose}>  <Link to={'/login'}>Log in</Link> </Button>
            <Button colorScheme="purple"  onClick={onClose}variant={'outline'} >  <Link to={'/signup'}>Sign up</Link> </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
