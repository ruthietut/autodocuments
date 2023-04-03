import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import autodocslogo from "../assets/autodocs-Logo.png";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle login logic here
  }

  function handleForgotPassword() {
    // Handle forgot password logic here
  }

  return (
    <Box p={8} bg="rgb(17, 48, 75)" minH="100vh">
      <Box maxW="md" mx="auto" bg="white" boxShadow="md" p={8}>
        <Flex justify="center" mb="-6" mt="-5">
          <Image
            className="logo"
            width={130}
            height={130}
            src={autodocslogo}
            alt="autodocs logo"
            textAlign="center"
          />
        </Flex>
        <Heading color="rgb(17, 48, 75)" textAlign="center" mb={8}>
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={handleEmailChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              type="submit"
              bg="rgb(17, 48, 75)"
              color="white"
              size="lg"
              fontSize="md"
              _hover={{ color: "white", fontSize: "larger" }}>
              Login
            </Button>
            <Link
              mt={4}
              textAlign="center"
              onClick={handleForgotPassword}
              cursor="pointer"
              _hover={{ color: "blue.500" }}>
              Forgot password?
            </Link>
          </Stack>
        </form>
        <Text mt={4} textAlign="center">
          Don't have an account? <Link to="/SignUp">Sign up</Link>
        </Text>
      </Box>
    </Box>
  );
}
export default Login;
