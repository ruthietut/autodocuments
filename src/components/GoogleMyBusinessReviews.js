import {
  Box,
  Heading,
  Text,
  Avatar,
  Image,
  Stack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";
import review5 from "../assets/review5.png";
import review6 from "../assets/review6.png";
import review7 from "../assets/riview7.png";
import reviewimage from "../assets/reviewimage.jpg";

function GoogleMyBusinessReviews() {
  const reviews = [
    {
      name: "Essay Palmer",
      image: review3,
      rating: 5,
      review:
        "AutoDocs assisted me in getting a drivers license in record time. What stood out for me was the constant updates/feedback. I wasn’t kept in the dark. They are always one call away. I also used their services to purchase my Camry muscle a year ago. They are simply a necessary utility. I have proudly referred them to my associates and they all have positive reviews so far.  I wasn’t solicited for this,  this is my way of appreciation. Thanks AutoDocs.",
    },
    {
      name: "Oladayo Ogini",
      image: review3,
      rating: 5,
      review:
        "My experience was an amazing one, my license plate was ready within days. Their work rate is just awesome and it was a stress free experience. I'll strongly recommend this business.",
    },
    {
      name: "Dayo Okesola",
      image: review4,
      rating: 5,
      review:
        "The service was timely and the communications kept me up to speed on what was going on!. Thumbs up! I will definitely recommend.",
    },
    {
      name: "Rabiu Sodeeq",
      image: review5,
      rating: 5,
      review: "Amazing job they do, Always on time… the best out there.",
    },

    {
      name: "Chidi Victor",
      image: review4,
      rating: 5,
      review: "Splendid service delivery. I would recommend them to anyone.",
    },
    {
      name: "Taiye Falola",
      image: review5,
      rating: 5,
      review:
        "Prompt delivery! Did not give me any hassle at all throughout the process. Great customer experience!!",
    },
  ];

  return (
    <Flex wrap="wrap">
      <Box py={16} px={3} bg="rgb(17, 48, 75)" >
        <Heading color="yellow.500" as="h1" size="2xl" mb={8} ml={2} >
          Customer Reviews
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap={2} ml={5} mr={5} boxShadow="md">
          {reviews.map((review, index) => (
            <Box key={index} bg="whiteAlpha.900" p={5} mb={1} borderRadius="10px" >
              <Stack direction={["column", "row"]} align="center" mb={4}>
                <Image
                  alt="avatar"
                  size="lg"
                  width="70px"
                  height="70px"
                  borderRadius="full"
                  name={review.name}
                  src={review.image}
                  mr={[0, 1]}
                  mb={[1, 0]}
                />
                <Box>
                  <Text fontSize="lg" fontWeight="bold">
                    {review.name}
                  </Text>
                  <Flex align="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < review.rating ? "yellow.500" : "gray.300"}
                          mx="1px"
                          fontSize="sm"
                        />
                      ))}
                    <Text fontSize="sm" color="gray.500" ml={2}>
                      {review.rating} stars
                    </Text>
                  </Flex>
                </Box>
              </Stack>
              <Text fontSize="md" mb={8}>
                {review.review}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default GoogleMyBusinessReviews;
