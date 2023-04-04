import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Text,
    Table, 
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    
    Select,
    VStack,
  } from "@chakra-ui/react";



const vehiclelicenes = [
    {
      name: "vehicle licence",
      label: "Motorcycle/Tricycle",
      price:2500,
    },
    {
      name: "vehicle licence",
      label: "Saloon Car- mini(1.4-1.9L)e.g. Picanto, Corolla, Civic, kia",
    price:3500,
    },
    {
      name: "vehicle licence",
      label: "Saloon Car- medium(2.0-2.9L)e.g. Camry, Accord, Lexus, Mazda",
    price:4000,
    },
    {
      name: "vehicle licence",
      label: "SUV|Jeep| Bus| Pick-Up",
    price:5000,
    },
    {
      name: "vehicle licence",
      label: "Coaster Bus",
    price:7500,
    },
    {
      name: "vehicle licence",
      label: "Mini Trucks|Trucks 15 Tons(Tippers)",
    price:8000,
    },
    {
      name: "vehicle licence",
      label: "Truck 20Tons(6-10 Tyres)",
    price:8000,
    },
    {
      name: "vehicle licence",
      label: "Truck 30Tons(12-16 Tyres)",
    price:8000,
    },
  ];
  
  const roadworthiness = [
    {
      name: "Roadworthiness",
      label: "Motorcycle/Tricycle",
      price:2500,
    },
    {
      name: "Roadworthiness",
      label: "Saloon Car- mini(1.4-1.9L)e.g. Picanto, Corolla, Civic, kia",
    price:6500,
    },
    {
      name: "Roadworthiness",
      label: "Saloon Car- medium(2.0-2.9L)e.g. Camry, Accord, Lexus, Mazda",
    price:7500,
    },
    {
      name: "Roadworthiness",
      label: "SUV|Jeep| Bus| Pick-Up",
    price:7500,
    },
    {
      name: "Roadworthiness",
      label: "Coaster Bus",
    price:9000,
    },
    {
      name: "Roadworthiness",
      label: "Mini Trucks|Trucks 15 Tons(Tippers)",
    price:12000,
    },
    {
      name: "Roadworthiness",
      label: "Truck 20Tons(6-10 Tyres)",
    price:12000,
    },
    {
      name: "Roadworthiness",
      label: "Truck 30Tons(12-16 Tyres)",
    price:12000,
    },

  ];


  const thirdpartyinsurance = [
    {
      name: "Third Party Insurance",
      label: "Motorcycle/Tricycle",
      price:5000,
    },
    {
      name: "Third Party Insurance",
      label: "Saloon Car- mini(1.4-1.9L)e.g. Picanto, Corolla, Civic, kia",
    price:15000,
    },
    {
      name: "Third Party Insurance",
      label: "Saloon Car- medium(2.0-2.9L)e.g. Camry, Accord, Lexus, Mazda",
    price:15000,
    },
    {
      name: "Third Party Insurance",
      label: "SUV|Jeep| Bus| Pick-Up",
    price:15000,
    },
    {
      name: "Third Party Insurance",
      label: "Coaster Bus",
    price:20000,
    },
    {
      name: "Third Party Insurance",
      label: "Mini Trucks|Trucks 15 Tons(Tippers)",
    price:20000,
    },
    {
      name: "Third Party Insurance",
      label: "Truck 20Tons(6-10 Tyres)",
    price:20000,
    },
    {
      name: "Third Party Insurance",
      label: "Truck 30Tons(12-16 Tyres)",
    price:20000,
    },
  ];

  const Hackney = [
    {
      name: "Hackney Permit",
      label: "Motorcycle/Tricycle",
      price:2500,
    },
    {
      name: "Hackney Permit",

      label: "Saloon Car- mini(1.4-1.9L)e.g. Picanto, Corolla, Civic, kia",
    price:5000,
    },
    {
      name: "Hackney Permit",
      label: "Saloon Car- medium(2.0-2.9L)e.g. Camry, Accord, Lexus, Mazda",
    price:5000,
    },
    {
      name: "Hackney Permit",
      label: "SUV|Jeep| Bus| Pick-Up",
    price:5000,
    },
    {
      name: "Hackney Permit",
      label: "Coaster Bus",
    price:7000,
    },
    {
      name: "Hackney Permit",
      label: "Mini Trucks|Trucks 15 Tons(Tippers)",
    price:7000,
    },
    {
      name: "Hackney Permit",
      label: "Truck 20Tons(6-10 Tyres)",
    price:7000,
    },
    {
      name: "Hackney Permit",
      label: "Truck 30Tons(12-16 Tyres)",
    price:7000,
    },
  ];

  // const vehicleCategories = () => {
  //   return (
  //     <Container maxW="container.xl">
  //       <Box p={4} bg="white" rounded="md" shadow="md">
  //         <Heading size="md">Vehicle Categories</Heading>
  //         <Text fontSize="sm">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
  //           voluptate, quod quae, volup
  //         </Text>
  //         <Table variant="simple">
  //           <Thead>
  //             <Tr>
  //               <Th>Vehicle Category</Th>
  //               <Th>Vehicle Type</Th>
  //               <Th>Price</Th>
  //             </Tr>
  //           </Thead>
  //           <Tbody>
  //             {vehiclelicenes.map((vehicle) => (
  //               <Tr key={vehicle.label}>
  //                 <Td>{vehicle.name}</Td>
  //                 <Td>{vehicle.label}</Td>
  //                 <Td>{vehicle.price}</Td>
  //               </Tr>
  //             ))}
  //           </Tbody>
  //         </Table>
  //       </Box>
  //     </Container>
  //   );
  // };
  
  // const Roadworthiness = () => {
  //   return (
  //     <Container maxW="container.xl">
  //       <Box p={4} bg="white" rounded="md" shadow="md">
  //         <Heading size="md">Roadworthiness</Heading>
  //         <Text fontSize="sm">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
  //           voluptate, quod quae, volup
  //         </Text>
  //         <Table variant="simple">
  //           <Thead>
  //             <Tr>
  //               <Th>Vehicle Category</Th>
  //               <Th>Vehicle Type</Th>
  //               <Th>Price</Th>
  //             </Tr>
  //           </Thead>
  //           <Tbody>
  //             {roadworthiness.map((vehicle) => (
  //               <Tr key={vehicle.label}>
  //                 <Td>{vehicle.name}</Td>
  //                 <Td>{vehicle.label}</Td>
  //                 <Td>{vehicle.price}</Td>
  //               </Tr>
  //             ))}
  //           </Tbody>
  //         </Table>
  //       </Box>
  //     </Container>
  //   );
  // }


  // const Thirdpartyinsurance = () => {



  // }
