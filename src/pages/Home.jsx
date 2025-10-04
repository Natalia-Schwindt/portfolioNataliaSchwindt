import { VStack, Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box
      id="home"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 12 }}
    >
      <VStack
        spacing={{ base: 6, md: 8, lg: 10 }}
        align="center"
        textAlign="center"
        width="100%"
        maxWidth="800px"
        px={{ base: 4, md: 8 }}
      >
        <Heading
          as="h1"
          fontSize={["6xl", "7xl", "8xl"]}
          color="text.primary"
          mx={{ base: 4, md: 8 }}
        >
          {t("title")}
        </Heading>

        <Text
          fontSize={["2xl", "3xl"]}
          fontWeight="semibold"
          color="text.secondary"
          mx={{ base: 6, md: 12 }}
        >
          {t("subtitle")}
        </Text>

        <Text
          fontSize={["lg", "xl", "2xl"]}
          fontWeight="medium"
          color="text.primary"
          mx={{ base: 6, md: 12 }}
        >
          {t("description")}
        </Text>
      </VStack>
    </Box>
  );
};

export default Home;
