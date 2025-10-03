import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation();

  const presentationContent = [
    { type: "heading", content: t("presentation.heading") },
    { type: "paragraph", content: t("presentation.p1") },
    { type: "paragraph", content: t("presentation.p2") },
    { type: "paragraph", content: t("presentation.p3") },
    { type: "paragraph", content: t("presentation.p4") },
  ];

  return (
    <Box
      id="presentation"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 8 }}
      pt={{ base: "60px", md: "80px" }}
      pb={{ base: "60px", md: "80px" }}
    >
      <Flex
        direction="column"
        alignItems="center"
        flexGrow={1}
        justifyContent="space-evenly"
        textAlign="center"
        width="100%"
        maxWidth="800px"
        px={{ base: 4, md: 8 }}
      >
        {presentationContent.map((item, index) =>
          item.type === "heading" ? (
            <Heading
              key={index}
              as="h2"
              color="text.primary"
              fontWeight="bold"
              fontSize={["3xl", "4xl", "5xl"]}
              mb={4}
            >
              {item.content}
            </Heading>
          ) : (
            <Text
              key={index}
              as="p"
              color="text.secondary"
              fontWeight="normal"
              fontSize={["md", "lg", "xl"]}
              mb={2}
            >
              {item.content}
            </Text>
          )
        )}
      </Flex>
    </Box>
  );
};

export default Presentation;
