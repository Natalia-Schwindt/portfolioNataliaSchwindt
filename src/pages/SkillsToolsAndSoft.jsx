import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiNodedotjs,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const SkillsToolsAndSoft = () => {
  const { t } = useTranslation();

  const toolsSkills = [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#979595ff" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  ];

  const softSkills = [
    t("skillsTools.soft.communication"),
    t("skillsTools.soft.teamwork"),
    t("skillsTools.soft.problemSolving"),
    t("skillsTools.soft.criticalThinking"),
    t("skillsTools.soft.adaptability"),
    t("skillsTools.soft.timeManagement"),
    t("skillsTools.soft.creativity"),
    t("skillsTools.soft.empathy"),
    t("skillsTools.soft.leadership"),
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
      color="text.secondary"
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
            color="text.primary"
            mb={{ base: 6, md: 8 }}
          >
            {t("skillsTools.tools")}
          </Heading>
          <HStack
            spacing={{ base: 4, md: 6 }}
            wrap="wrap"
            justifyContent="center"
          >
            {toolsSkills.map((skill, index) => (
              <Box
                key={index}
                textAlign="center"
                p={{ base: 2, md: 3 }}
                borderRadius="md"
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
            color="text.primary"
            mb={{ base: 6, md: 8 }}
          >
            {t("skillsTools.softSkills")}
          </Heading>
          <HStack
            spacing={{ base: 4, md: 6 }}
            wrap="wrap"
            justifyContent="center"
          >
            {softSkills.map((skill, index) => (
              <Box
                key={index}
                textAlign="center"
                p={{ base: 2, md: 3 }}
                borderRadius="md"
                boxShadow="md"
              >
                <Text
                  fontSize={["sm", "md"]}
                  fontWeight="medium"
                  color="subtitle.700"
                >
                  {skill}
                </Text>
              </Box>
            ))}
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default SkillsToolsAndSoft;
