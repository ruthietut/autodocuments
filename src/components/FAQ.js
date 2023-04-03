import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import { domAnimation } from "framer-motion";
import { Link } from "react-router-dom";
function FAQ() {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major debit cards .",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery typically takes 24-48 hrs within lagos state and 3-4 working days outside lagos.",
    },
    {
      question: "What state can you process papers?",
      answer: "At the moment we process Lagos, Ogun state and Abuja papers.",
    },
    {
      question: "What document can i process online?",
      answer: (
        <p>
          You can start process of all vehicle documents online by{" "}
          <Link to="/SignUp" textDecoration="underline">
            signing up
          </Link>{" "}
          and filling out your vehicle information
        </p>
      ),
    },
  ];

  return (
    <Box py={16} px={8} bg="gray.100">
      <Heading as="h1" size="xl" mb={8}>
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} border="none" mb={4}>
            <AccordionButton _focus={{ boxShadow: "none" }} px={0} py={0}>
              <Box as="h2" flex="1" textAlign="left" fontWeight="bold">
                {faq.question}
              </Box>
            </AccordionButton>
            <AccordionPanel px={0} py={4}>
              <Box as="p" mb={0}>
                {faq.answer}
              </Box>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default FAQ;
