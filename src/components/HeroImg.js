// import React from "react";
// import Heroimg from "../assets/HeroImage.jpg";
// import "./HeroImgStyles.css"
// import {Link } from "react-router-dom"

// const HeroImg = () => {
//   return (
//     <div className="Hero-img">
//         <div className="mask">
//       <img src={Heroimg} alt="heroimg"/>
//       </div>
//       <div className="hero-content">
//         <h1>AUTODOCS</h1>
//         <p>Your one stop shop for vehicle documentations</p>
//         <small>...always reliable</small>
//         <div className="btn">
//             <Link to="/SignUp"><button >Get Started</button></Link>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroImg;

import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import Heroimg from "../assets/HeroImage.jpg";
import { Link } from "react-router-dom";
function HeroImg() {
  return (
    <Flex
      bgImage={Heroimg}
      bgSize="cover"
      bgPosition="center"
      minH="calc(100vh )"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={8}
      py={16}
      w="100%"
      wrap="wrap">
      <Box maxW="xl" mx="auto" textAlign="center" mt="20" wrap="wrap">
        <Heading fontSize="5em" mb={1} color="yellow.500" wrap="wrap">
          AUTODOCS
        </Heading>
        <Text color="white" fontSize="1.4rem">
          {" "}
          Your one stop shop for vehicle documentations
        </Text>
        <Text color="white">...always reliable</Text>
        <Flex
          // as="flex"
         
          bg="rgb(17, 48, 75)"
          color="yellow.500"
          ml="160px"
          mt="30px"
          size="lg"
          fontSize="lg"
          width="150px"
          height="50px"
          borderRadius="100px"
          alignContent="center"
          justifyContent="center"
          alignItems="center"
          _hover={{ bg: "rgb(17, 48, 75)", color: "white" }}
          >
          <Link to="/SignUp" >
            Get Started
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

export default HeroImg;
