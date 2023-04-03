import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import autodocslogo from "../assets/autodocs-Logo.png";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import "../components/signUp.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    // validate form data
    // send form data to server
  }

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handlePasswordToggle() {
    setShowPassword(!showPassword);
  }

  return (
    <Flex
      // justifyContent="center"
      // align="center"
      flexDirection="column"
      bg="whiteAlpha.900"
      w="100%"
      Wrap="wrap"
      h="100%">
        

        <Nav/>


      <Box
        
        bg="transparent"
        borderWidth="1px"
        borderRadius="lg"
        p={8}
        boxShadow="lg"
        m="15px"
        mt="120px"
        align="center"
        // mb="50px"
        >
        <Flex justify="center" mt="-12" mb="-5">
          <Image
            className="logo"
            width={130}
            height={130}
            src={autodocslogo}
            alt="autodocs logo"
            textAlign="center"
          />
        </Flex>

        <Heading
          as="h1"
          size="xl"
          mb={4}
          color="rgb(17, 48, 75)"
          textAlign="center">
          Sign up
          <Text mt="2px" fontSize="sm">
            it's free and only takes a minute
          </Text>
        </Heading>
        <form onSubmit={handleFormSubmit}>
          <FormControl id="firstName" isRequired mb={2}>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="lastName" isRequired mb={2}>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="email" isRequired mb={2}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="password" isRequired mb={2}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <InputRightElement width="3rem">
                <Button h="1.5rem" size="sm" onClick={handlePasswordToggle}>
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="confirmPassword" isRequired mb={4}>
            <FormLabel>Confirm password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <InputRightElement width="3rem">
                <Button h="1.5rem" size="sm" onClick={handlePasswordToggle}>
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            bg="rgb(17, 48, 75)"
            color="white"
            size="lg"
            type="submit"
            w="100%"
            _hover={{ bg: "rgb(17, 48, 75)", color: "white", fontSize: "xl" }}>
            Sign up
          </Button>
          <Text fontSize="m" align="center" mt="2px">
            By clicking Sign up, you agree to out{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </Text>
        </form>
      </Box>
      <Text fontSize="sm" color="rgb(17, 48,75)" mb="20px" align="center">
        Already have an account?{" "}
        <Link to="/Login" _hover={{ color: "red" }}>
          Log in
        </Link>
      </Text>

       <Footer/>
    </Flex>
  );
};

export default SignUp;
