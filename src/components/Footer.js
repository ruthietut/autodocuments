import { Box, Flex, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex as="footer" bg="gray.700" color="white" p={8}
    width="100%" direction="column" align="center" >
    
      <Flex justify="center" gap="40px" wrap="wrap">
        <Flex direction="column" align="center" >
          <Text mb={4}>Connect with us:</Text>
          <Flex mb={4}>
            <Link
              mr={4}
              target="_blank"
              href="https://web.facebook.com/autodocs.ng/">
              Facebook
            </Link>
            <Link mr={4} target="_blank" href="https://twitter.com/Autodocs_ng">
              Twitter
            </Link>
            <Link mr={4} target="_blank" href="https://wa.me/2349053030471">
              Whatsapp
            </Link>
            <Link target="_blank" href="https://www.instagram.com/autodocs_ng/">
              Instagram
            </Link>
          </Flex>
          <Text mb={4}>Contact us:</Text>
          <Text mb={4}>+2349053030471</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Text mb={4}>Email:</Text>
          <Text mb={4}>
            <Link href="mailto:autodocsng@gmail.com">Autodocsng@gmail.com</Link>
          </Text>

          <Text mb={4}>Address:</Text>
          <Text mb={12}> 10, Makinde street, alausa, ikeja, Lagos</Text>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" direction="column" mb={4}>
        <Text justifyContent="center" mb={4}>
          &copy; 2023 Autodocuments. All rights reserved.
        </Text>
        <Link href="#">Privacy Policy</Link>
      </Flex>
    </Flex>
  );
}

export default Footer;
