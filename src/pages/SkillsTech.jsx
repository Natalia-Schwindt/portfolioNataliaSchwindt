import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import theme from "../theme";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiChakraui,
  SiTailwindcss,
  SiSpringboot,
  SiFirebase,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const SkillsTech = () => {
  const frontendSkills = [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Sass", icon: SiSass, color: "#CC6699" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  ];

  const backendSkills = [
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  ];

  return (
    <Box
      id="skills"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 8 }}
      py={{ base: 6, md: 8 }}
      backgroundColor={theme.colors.background[900]}
      color={theme.colors.text[100]}
    >
      <VStack
        spacing={{ base: 8, md: 12 }}
        maxWidth="1200px"
        width="100%"
        flexGrow={1}
        justifyContent="space-evenly"
      >
        <Flex direction="column" alignItems="center" width="100%">
          <Heading
            as="h2"
            fontSize={["4xl", "5xl", "6xl"]}
            color="title.500"
            mb={{ base: 6, md: 8 }}
          >
            Frontend
          </Heading>
          <HStack
            spacing={{ base: 4, md: 6 }}
            wrap="wrap"
            justifyContent="center"
          >
            {frontendSkills.map((skill, index) => (
              <Box
                key={index}
                textAlign="center"
                p={{ base: 2, md: 3 }}
                borderRadius="md"
                bg="background.700"
                boxShadow="md"
              >
                <Icon
                  as={skill.icon}
                  w={["2.2em", "2.8em"]}
                  h={["2.2em", "2.8em"]}
                  color={skill.color}
                  mb={1}
                />
                <Text fontSize={["sm", "md"]} fontWeight="medium">
                  {skill.name}
                </Text>
              </Box>
            ))}
          </HStack>
        </Flex>

        <Flex direction="column" alignItems="center" width="100%">
          <Heading
            as="h2"
            fontSize={["4xl", "5xl", "6xl"]}
            color="title.500"
            mb={{ base: 6, md: 8 }}
          >
            Backend
          </Heading>
          <HStack
            spacing={{ base: 4, md: 6 }}
            wrap="wrap"
            justifyContent="center"
          >
            {backendSkills.map((skill, index) => (
              <Box
                key={index}
                textAlign="center"
                p={{ base: 2, md: 3 }}
                borderRadius="md"
                bg="background.700"
                boxShadow="md"
              >
                <Icon
                  as={skill.icon}
                  w={["2.2em", "2.8em"]}
                  h={["2.2em", "2.8em"]}
                  color={skill.color}
                  mb={1}
                />
                <Text fontSize={["sm", "md"]} fontWeight="medium">
                  {skill.name}
                </Text>
              </Box>
            ))}
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default SkillsTech;
