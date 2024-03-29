import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  HStack,
  Grid,
  Wrap,
  WrapItem,
  Center,
  Input,
  SimpleGrid,
  Text,
  Select,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const PRICING_PLANS = [
  {
    id: 1,
    name: "Vehicle Papers Renewal",
    price: 6000,
    description:
      "Select the type of Vehicle, then check the options you require to see the price. For example, for a commercial vehicle you need to select the Hackney Permit option..",
    selection: (
      <FormControl>
        <Select placeholder="Select vehicle category">
          <option>Motorcycle/Tricycle </option>
          <option>
            Saloon Car- mini(1.4-1.9L)e.g. Picanto, Corolla, Civic, kia
          </option>
          <option>
            Saloon Car- medium(2.0-2.9L)e.g. Camry, Accord, Lexus, Mazda
          </option>
          <option>SUV|Jeep| Bus| Pick-Up</option>
          <option>Coaster Bus</option>
          <option>Mini Trucks|Trucks 15 Tons(Tippers)</option>
          <option>Truck 20Tons(6-10 Tyres) </option>
          <option>Truck 30Tons(12-16 Tyres)</option>
        </Select>
      </FormControl>
    ),
    checker: (
      <FormControl>
        <input
          type="checkbox"
          id="vehicle licence"
          name="vehicle1"
          value="vehicle license"
        />
        <label for="vehicle licence"> Vehicle licence</label>
        <br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2"> Roadworthiness</label>
        <br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3"> Third Party Insurance</label>
        <br />
        <input type="checkbox" id="vehicle4" name="vehicle4" value="Boat" />
        <label for="vehicle4"> Hackney Permit</label>
      </FormControl>
    ),
    action: (
      <Link to="/SignUp">
        <Button
          bg="rgb(17, 48, 75)"
          variant="outline"
          size="sm"
          color="white"
          _hover={{ bg: "rgb(17, 48, 75)" }}
          mt={4}>
          Start your Paper Renewal
        </Button>
      </Link>
    ),
  },
  {
    id: 2,
    name: "New Vehicle Registration",
    price: 2000,
    description:
      "Select the type of Vehicle, then select all the options you require to see the accurate price.",
    selection: (
      <FormControl>
        <Select placeholder="Select vehicle category">
          <option>Motorcycle/Tricycle </option>
          <option>
            Saloon Car- mini(1.4-1.9L)e.g. Picanto, Corolla, Civic, kia
          </option>
          <option>
            Saloon Car- medium(2.0-2.9L)e.g. Camry, Accord, Lexus, Mazda
          </option>
          <option>SUV|Jeep| Bus| Pick-Up</option>
          <option>Coaster Bus</option>
          <option>Mini Trucks|Trucks 15 Tons(Tippers)</option>
          <option>Truck 20Tons(6-10 Tyres) </option>
          <option>Truck 30Tons(12-16 Tyres)</option>
        </Select>
      </FormControl>
    ),
    selection2: (
      <FormControl>
        <Select placeholder="Registration Type">
          <option>Motorcycle/Tricycle </option>
          <option>Private Vehicle (with 3rd party insurance)</option>
          <option>Private Vehicle (without 3rd party insurance)</option>
          <option>Commercial Vehicle (with 3rd party insurance)</option>
          <option>Commercial Vehicle (without insurance)</option>
        </Select>
      </FormControl>
    ),
    selection3: (
      <FormControl>
        <Select placeholder="Type of Number Plate">
          <option>Any Number</option>
          <option>Customized Number Plate</option>
        </Select>
      </FormControl>
    ),
    action: (
      <Link to="/SignUp">
        <Button
          bg="rgb(17, 48, 75)"
          variant="outline"
          size="sm"
          color="white"
          _hover={{ bg: "rgb(17, 48, 75)" }}
          mt={4}>
          Start Vehicle Registration
        </Button>
      </Link>
    ),
  },
  {
    id: 3,
    name: "Change of Ownership",
    price: 3000,
    description:
      "Select the type of Vehicle, then select all the options you require, to see the acccurate price.",
    selection4: (
      <FormControl>
        <Select placeholder="Select vehicle category">
          <option>Motorcycle/Tricycle </option>
          <option>
            Saloon Car- mini(1.4-1.9L)e.g. Picanto, Corolla, Civic, kia
          </option>
          <option>
            Saloon Car- medium(2.0-2.9L)e.g. Camry, Accord, Lexus, Mazda
          </option>
          <option>SUV|Jeep| Bus| Pick-Up</option>
          <option>Coaster Bus</option>
          <option>Mini Trucks|Trucks 15 Tons(Tippers)</option>
          <option>Truck 20Tons(6-10 Tyres) </option>
          <option>Truck 30Tons(12-16 Tyres)</option>
        </Select>
      </FormControl>
    ),
    selection5: (
      <FormControl>
        <Select placeholder="Vehicle license Expiry">
          <option>Not Expired</option>
          <option>Less than 1 month</option>
          <option>More than 1 More</option>
          <option>More than 1 year</option>
          <option>More than 2 years</option>
          <option>More than 3 years</option>
          <option>More than 4 years</option>
          <option>More than 5 years</option>
          <option>More than 6 years</option>
          <option>More than 7 years</option>
        </Select>
      </FormControl>
    ),
    selection6: (
      <FormControl>
        <Select placeholder="Registration Type">
          <option>Private Vehicle</option>
          <option>Commercial Vehicle</option>
        </Select>
      </FormControl>
    ),

    selection7: (
      <FormControl>
        <Select placeholder="Number plate choice">
          <option>Motorcycle/Tricycle </option>
          <option>Use a new number plate</option>
          <option>Use an existing number plate</option>
          <option>Use a new customised plate number</option>
        </Select>
      </FormControl>
    ),
    action: (
      <Link to="/SignUp">
        <Button
          bg="rgb(17, 48, 75)"
          variant="outline"
          size="sm"
          color="white"
          _hover={{ bg: "rgb(17, 48, 75)" }}
          mt={4}>
          Start Change of Ownership
        </Button>
      </Link>
    ),
  },

  {
    id: 4,
    name: "OtherPermit and Paper Renewal",
    price: 4000,
    description: "Select your type of permit below.",
    selection8: (
      <FormControl>
        <Select placeholder="Select Type of Permit">
          <option>S/w Local govt permit for (motorcycle) 1 year</option>
          <option>Stage carriage permit for (motorcycle) 1 year</option>
          <option> Stage carriage permit (Cars/Buses)</option>
          <option> S/W Local govt permit for (Buses)</option>
          <option>Nigeria local govt permit (Cars/Buses/Trucks)</option>
          <option>Replace/Reprint vehicle plate number</option>
        </Select>
      </FormControl>
    ),
    action: (
      <Link to="/SignUp">
        <Button
          bg="rgb(17, 48, 75)"
          variant="outline"
          size="sm"
          color="white"
          _hover={{ bg: "rgb(17, 48, 75)" }}
          mt={4}>
          Start Process
        </Button>
      </Link>
    ),
  },
  {
    id: 5,
    name: "Driver's License Renewal",
    price: 5000,
    description: "Select the number of years of validity you require.",
    selection9: (
      <FormControl>
        <Select placeholder="Choose lenght of Validity">
          <option>3 Years Validity</option>
          <option>5 Years validity </option>
        </Select>
      </FormControl>
    ),
    action: (
      <Link to="/SignUp">
        <Button
          bg="rgb(17, 48, 75)"
          variant="outline"
          size="sm"
          color="white"
          _hover={{ bg: "rgb(17, 48, 75)" }}
          mt={4}>
          Start Driver'sLicense Renewal
        </Button>
      </Link>
    ),
  },
];

const PricingPage = () => {
  const [total, setTotal] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegistrationType, setSelectedRegistrationType] = useState("");
  const [selectedNumberPlateType, setSelectedNumberPlateType] = useState("");
  const [isChecked, setIsChecked] = useState({
    "vehicle licence": false,
    Roadworthiness: false,
    "Third Party Insurance": false,
    "Hackney Permit": false,
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleRegistrationTypeChange = (event) => {
    setSelectedRegistrationType(event.target.value);
  };

  const handleNumberPlateTypeChange = (event) => {
    setSelectedNumberPlateType(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked({
      ...isChecked,
      [event.target.value]: event.target.checked,
    });
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const calculateTotalCost = () => {
    let totalCost = 0;
    if (selectedPlan && selectedCategory) {
      totalCost += selectedPlan.price;
      if (selectedPlan.checker) {
        Object.keys(isChecked).forEach((key) => {
          if (isChecked[key]) {
            totalCost += 1000;
          }
        });
      }
      if (selectedPlan.selection) {
        totalCost += 1000;
      }
      if (
        selectedPlan.selection2 &&
        selectedRegistrationType &&
        selectedRegistrationType !== "Select Registration Type"
      ) {
        totalCost += 1000;
      }
      if (
        selectedPlan.selection3 &&
        selectedNumberPlateType &&
        selectedNumberPlateType !== "Select Number Plate Type"
      ) {
        totalCost += 5000;
      }
    }
    return totalCost;
  };

  return (
    <Flex
      maxW="container.lg"
      py={1}
      minW="100%"
      bg="whiteAlpha.900"
      minH="100vh"
      flexDirection="column">
      <Nav />

      <VStack spacing={8}>
        <Heading as="h1" size="2xl" color="blue.800" mt="100px">
          Pricing Plans
        </Heading>

        <Box w="100%">
          <SimpleGrid columns={[1, 2, 3, 4]} gap={8} Wrap="wrap" margin={4}>
            {PRICING_PLANS.map((plan) => (
              <Box key={plan.id} bg="white" boxShadow="lg">
                <Box
                  borderWidth={1}
                  borderColor="gray.200"
                  borderRadius="md"
                  p={4}>
                  <Heading as="h2" size="md">
                    {plan.name}
                  </Heading>

                  <Box
                    color="rgb(17, 48,75)"
                    fontSize="sm"
                    mt={2}
                    borderRadius="10px"
                    bg="blue.50"
                    p="2"
                    borderWidth={1}>
                    {plan.description}
                  </Box>

                  <Text color="gray.600" mt={2}>
                    {plan.selection}
                    {() => handlePlanSelect(plan)}
                  </Text>

                  <Text color="gray.600" mt={2}>
                    {plan.selection2}
                  </Text>

                  <Text color="gray.600" mt={2}>
                    {plan.selection3}
                  </Text>

                  <Text color="gray.600" mt={2}>
                    {plan.selection4}
                  </Text>

                  <Text color="gray.600" mt={2}>
                    {plan.selection5}
                  </Text>

                  <Text color="gray.600" mt={2}>
                    {plan.selection6}
                  </Text>

                  <Text color="gray.600" mt={2}>
                    {plan.selection7}
                  </Text>

                  <Text color="gray.600" mt={2}>
                    {plan.selection8}
                  </Text>

                  <Text color="gray.600" mt={2}>
                    {plan.selection9}
                  </Text>

                  <Text color="gray.600" mt={2}>
                    {plan.checker}
                  </Text>

                  <FormControl id="total">
                    <FormLabel>Total</FormLabel>
                    <Input
                      type="number"
                      value={total}
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                    />
                  </FormControl>

                  <FormControl id="action">{plan.action}</FormControl>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
      <Footer />
    </Flex>
  );
};

export default PricingPage;
