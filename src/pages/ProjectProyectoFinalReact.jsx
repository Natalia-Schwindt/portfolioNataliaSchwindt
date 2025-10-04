import { Box, Heading, Text, Link, Flex, Image } from "@chakra-ui/react";
import proyectoImg from "../assets/projects/proyectoFinalReact.png";
import { useTranslation } from "react-i18next";

const ProjectProyectoFinalReact = () => {
  const { t } = useTranslation();
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      px={{ base: 4, md: 12 }}
      pt={{ base: "80px", md: "70px", lg: "100px" }}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        flexGrow={1}
        maxWidth="800px"
        textAlign="center"
        py={8}
      >
        <Box
          width={{ base: "80%", md: "70%", lg: "60%" }}
          maxH={{ base: "250px", md: "300px", lg: "500px" }}
          mb={6}
          borderRadius="md"
          overflow="hidden"
          boxShadow="lg"
        >
          <Image
            src={proyectoImg}
            alt={t("projects.proyectoFinalReact.title")}
            objectFit="contain"
            width="100%"
            height="100%"
            display="block"
          />
        </Box>

        <Heading color="text.primary" mb={3} fontSize={["3xl", "4xl", "5xl"]}>
          {t("projects.proyectoFinalReact.title")}
        </Heading>

        <Text
          color="text.secondary"
          fontWeight="semibold"
          mb={4}
          fontSize={["sm", "md", "lg"]}
        >
          {t("projects.proyectoFinalReact.description")}
        </Text>
        <Flex width="100%" justifyContent="flex-end" mt={2}>
          <Link
            href={t("projects.proyectoFinalReact.github")}
            target="_blank"
            color="text.primary"
            fontWeight="bold"
            fontSize="md"
            mt={2}
            textDecoration="none"
            _hover={{ opacity: 0.8 }}
          >
            GitHub
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectProyectoFinalReact;
