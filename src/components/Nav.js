import autodocslogo from "../assets/autodocs-Logo.png";
import { Flex, Box, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      position="Fixed"
      top="0"
      zIndex="1"
      bg="rgb(17, 48, 75)"
      color="white"
      w="100%">
      <Box>
        <Link to="/">
          <Heading as="h2" size="md" mr={8}>
            <img
              src={autodocslogo}
              alt="autodocs logo"
              width="100px"
              height="100px"
            />
          </Heading>
        </Link>
      </Box>

      {/* // eslint-disable-next-line no-undef */}

      <Box display={{ base: "block", md: "none" }} mr="4" onClick={toggle}>
        <svg
          fill="white"
          width="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0,3h20v2H0V3z M0,9h20v2H0V9z M0,15h20v2H0V15z" />
        </svg>
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}>
        <Flex
          align="flex-start"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={[isOpen ? "column" : "row"]}
          pt={[0, 0, 0, 0]}
          gap="8"
          ml="10"
          p={8}>
          <Link to="/">
            <Heading as="h2" size="md" mr={8}>
              Home
            </Heading>
          </Link>

          <Link to="/PricingPage">
            <Heading as="h2" size="md" mr={8}>
              Pricing
            </Heading>
          </Link>

          <Link to="/signUp">
            <Heading as="h2" size="md" mr={8}>
              SignUp
            </Heading>
          </Link>

          <Link to="/blog">
            <Heading as="h2" size="md" mr={8}>
              Blog
            </Heading>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavBar;
