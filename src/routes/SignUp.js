// import React from "react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import { useState } from "react";
// import autodocslogo from "../assets/autodocs-Logo.png";
// import { Link } from "react-router-dom";
// import {
//   Flex,
//   Box,
//   Heading,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Button,
//   Text,
//   Image,
// } from "@chakra-ui/react";
// import "../components/signUp.css";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     // validate form data
//     // send form data to server
//   }

//   function handleInputChange(event) {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   }

//   function handlePasswordToggle() {
//     setShowPassword(!showPassword);
//   }

//   return (
//     <Flex

//       flexDirection="column"
//       bg="whiteAlpha.900"
//       w="100%"
//       Wrap="wrap"
//       h="100%">

//         <Nav/>

//       <Box

//         bg="transparent"
//         borderWidth="1px"
//         borderRadius="lg"
//         p={8}
//         boxShadow="lg"
//         m="15px"
//         mt="120px"
//         align="center"
//         // mb="50px"
//         >
//         <Flex justify="center" mt="-12" mb="-5">
//           <Image
//             className="logo"
//             width={130}
//             height={130}
//             src={autodocslogo}
//             alt="autodocs logo"
//             textAlign="center"
//           />
//         </Flex>

//         <Heading
//           as="h1"
//           size="xl"
//           mb={4}
//           color="rgb(17, 48, 75)"
//           textAlign="center">
//           Sign up
//           <Text mt="2px" fontSize="sm">
//             it's free and only takes a minute
//           </Text>
//         </Heading>
//         <form onSubmit={handleFormSubmit}>
//           <FormControl id="firstName" isRequired mb={2}>
//             <FormLabel>First Name</FormLabel>
//             <Input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//           </FormControl>
//           <FormControl id="lastName" isRequired mb={2}>
//             <FormLabel>Last Name</FormLabel>
//             <Input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//           </FormControl>
//           <FormControl id="email" isRequired mb={2}>
//             <FormLabel>Email address</FormLabel>
//             <Input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </FormControl>
//            <FormControl id="whatsapp" isRequired mb={2}>
//             <FormLabel>Whatsapp Number</FormLabel>
//             <Input
//               type="text"
//               name="whatsapp"
//               value={formData.whatsapp}
//               onChange={handleInputChange}
//             />
//           </FormControl>

//           <FormControl id="password" isRequired mb={2}>
//             <FormLabel>Password</FormLabel>
//             <InputGroup>
//               <Input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//               <InputRightElement width="3rem">
//                 <Button h="1.5rem" size="sm" onClick={handlePasswordToggle}>
//                   {showPassword ? <ViewOffIcon /> : <ViewIcon />}
//                 </Button>
//               </InputRightElement>
//             </InputGroup>
//           </FormControl>
//           <FormControl id="confirmPassword" isRequired mb={4}>
//             <FormLabel>Confirm password</FormLabel>
//             <InputGroup>
//               <Input
//                 type={showPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//               />
//               <InputRightElement width="3rem">
//                 <Button h="1.5rem" size="sm" onClick={handlePasswordToggle}>
//                   {showPassword ? <ViewOffIcon /> : <ViewIcon />}
//                 </Button>
//               </InputRightElement>
//             </InputGroup>
//           </FormControl>
//           <Button
//             bg="rgb(17, 48, 75)"
//             color="white"
//             size="lg"
//             type="submit"
//             w="100%"
//             _hover={{ bg: "rgb(17, 48, 75)", color: "white", fontSize: "xl" }}>
//             Sign up
//           </Button>
//           <Text fontSize="m" align="center" mt="2px">
//             By clicking Sign up, you agree to out{" "}
//             <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
//           </Text>
//         </form>
//       </Box>
//       <Text fontSize="sm" color="rgb(17, 48,75)" mb="20px" align="center">
//         Already have an account?{" "}
//         <Link to="/Login" _hover={{ color: "red" }}>
//           Log in
//         </Link>
//       </Text>

//        <Footer/>
//     </Flex>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import autodocslogo from "../assets/autodocs-Logo.png";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  Box,
  Link,
  Text,
  Flex,
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  InputRightElement,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
} from "@chakra-ui/react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("234");
  const [country, setCountry] = useState("Nigeria");
  const [state, setState] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Alert("Form submitted!");
  };

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      bg="whiteAlpha.900"
      w="100%"
      Wrap="wrap"
      h="100%">
      <Nav />
      <Box
        mr="20px"
        ml="20px"
        mt="150px"
        p={8}
        borderWidth={1}
        borderRadius={8}
        bg="blue.100"
        boxShadow="lg"
        align="center">
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

        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="firstName">
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </FormControl>
            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Whatsapp phone no:</FormLabel>
              <InputGroup>
                <InputLeftAddon children={`+${countryCode}`} />
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                />
                <Select
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                  width="auto">
                  <option value="NG">NG</option>
                </Select>
              </InputGroup>
            </FormControl>
            <FormControl id="country">
              <FormLabel>Country</FormLabel>
              <Select
                placeholder="Select your country"
                value={country}
                onChange={handleCountryChange}
                required>
                <option value="Nigeria">Nigeria</option>
              </Select>
            </FormControl>
            <FormControl id="state">
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                placeholder="Enter your state"
                value={state}
                onChange={handleStateChange}
                required
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
              <FormLabel>Confirm password</FormLabel>{" "}
              <InputGroup>
                {" "}
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
              type="submit"
              bg="rgb(17, 48, 75)"
              color="white"
              _hover={{
                bg: "rgb(17, 48, 75)",
                color: "white",
                fontSize: "xl",
              }}>
              Sign Up
            </Button>
          </Stack>

          <Text fontSize="m" align="center" mt="20px">
            By clicking Sign up, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </Text>
        </form>
      </Box>
      <Text
        fontSize="sm"
        color="rgb(17, 48,75)"
        mt="20px"
        mb="30px"
        align="center">
        Already have an account?{" "}
        <Link to="/Login" _hover={{ color: "red" }}>
          Log in
        </Link>
      </Text>
      <Footer />
    </Flex>
  );
};

export default SignUpPage;
