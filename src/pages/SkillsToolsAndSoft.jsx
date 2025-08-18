import { Box, Heading, Text, Flex, VStack, HStack, Icon } from "@chakra-ui/react";
import theme from "../theme";
import { SiGit, SiGithub, SiVite, SiPostman, SiNodedotjs } from "react-icons/si";

const SkillsToolsAndSoft = () => {
  const toolsSkills = [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#979595ff" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  ];

  const softSkills = [
    "Comunicación",
    "Trabajo en equipo",
    "Resolución de problemas",
    "Pensamiento crítico",
    "Adaptabilidad",
    "Gestión del tiempo",
    "Creatividad",
    "Empatía",
    "Liderazgo",
  ];

  return (
    <Box
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
          <Heading as="h2" fontSize={["4xl", "5xl", "6xl"]} color="title.500" mb={{ base: 6, md: 8 }}>
            Herramientas
          </Heading>
          <HStack spacing={{ base: 4, md: 6 }} wrap="wrap" justifyContent="center">
            {toolsSkills.map((skill, index) => (
              <Box key={index} textAlign="center" p={{ base: 2, md: 3 }} borderRadius="md" bg="background.700" boxShadow="md">
                <Icon as={skill.icon} w={["2.2em", "2.8em"]} h={["2.2em", "2.8em"]} color={skill.color} mb={1} />
                <Text fontSize={["sm", "md"]} fontWeight="medium">{skill.name}</Text>
              </Box>
            ))}
          </HStack>
        </Flex>

        <Flex direction="column" alignItems="center" width="100%">
          <Heading as="h2" fontSize={["4xl", "5xl", "6xl"]} color="title.500" mb={{ base: 6, md: 8 }}>
            Soft Skills
          </Heading>
          <HStack spacing={{ base: 4, md: 6 }} wrap="wrap" justifyContent="center">
            {softSkills.map((skill, index) => (
              <Box key={index} textAlign="center" p={{ base: 2, md: 3 }} borderRadius="md" bg="background.700" boxShadow="md">
                <Text fontSize={["sm", "md"]} fontWeight="medium">{skill}</Text>
              </Box>
            ))}
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default SkillsToolsAndSoft;