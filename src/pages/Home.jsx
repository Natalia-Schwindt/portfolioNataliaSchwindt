// import { Box, Heading, Text, Flex } from "@chakra-ui/react";
// import theme from "../theme";

// const Home = () => {
//   return (
//     <Box
//       height="100vh"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       position="relative"
//       pt={{ base: "60px", md: "80px" }}
//       pb={{ base: "60px", md: "80px" }}
//     >
//       <Flex
//         direction="column"
//         alignItems="center"
//         justifyContent="space-evenly"
//         flexGrow={1}
//         textAlign="center"
//         width="100%"
//         maxWidth="800px"
//         px={{ base: 4, md: 8 }}
//       >
//         <Heading
//           as="h1"
//           fontSize={["6xl", "7xl", "8xl"]}
//           color="title.500"
//           mx={{ base: 4, md: 8 }}
//         >
//           Natalia Schwindt
//         </Heading>

//         <Text
//           fontSize={["2xl", "3xl"]}
//           fontWeight="semibold"
//           color="subtitle.500"
//           mx={{ base: 6, md: 12 }}
//           mb={2}
//         >
//           Desarrolladora FullStack
//         </Text>

//         <Text
//           fontSize={["lg", "xl", "2xl"]}
//           fontWeight="medium"
//           color="text.100"
//           mx={{ base: 6, md: 12 }}
//         >
//           Transformo ideas en productos digitales eficientes y de alto impacto.
//         </Text>
//       </Flex>
//     </Box>
//   );
// };

// export default Home;
import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ReactCountryFlag from "react-country-flag";
import theme from "../theme";

const Home = () => {
  // ----- Header -----
  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre mí", href: "#about-me" },
    { label: "Skills", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ];

  const languageOptions = [
    { countryCode: "ES", langCode: "es", title: "Spanish" },
    { countryCode: "GB", langCode: "en", title: "English" },
    { countryCode: "RU", langCode: "ru", title: "Russian" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleChangeLanguage = (langCode) => {
    console.log(`Intentando cambiar idioma a: ${langCode}`);
  };

  return (
    <Box height="100vh" position="relative">
      {/* Header */}
      <Box
        as="header"
        height="60px"
        p={4}
        px={{ base: 4, md: 8, lg: 12 }}
        bg={theme.colors.background[900]}
        position="absolute"
        top="0"
        left="0"
        right="0"
        zIndex="1000"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          {isMobile ? (
            <IconButton
              icon={<HamburgerIcon w={6} h={6} />}
              aria-label="Open Menu"
              onClick={() => setIsDrawerOpen(true)}
              bg="transparent"
              color={theme.colors.subtitle[500]}
              _hover={{ bg: "transparent", opacity: 0.8 }}
              _active={{ bg: "transparent" }}
              mr={2}
            />
          ) : (
            <HStack spacing={8}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  color={theme.colors.subtitle[500]}
                  fontSize="lg"
                  fontWeight="medium"
                  _hover={{
                    textDecoration: "underline",
                    color: theme.colors.title[500],
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </HStack>
          )}
        </Flex>

        <HStack spacing={1}>
          {languageOptions.map((lang) => (
            <Link
              key={lang.langCode}
              onClick={() => handleChangeLanguage(lang.langCode)}
              cursor="pointer"
              px={1}
              py={1}
              _hover={{ opacity: 0.7 }}
            >
              <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                style={{ width: "1.2em", height: "1.2em", borderRadius: "4px" }}
                title={lang.title}
              />
            </Link>
          ))}
        </HStack>

        <Drawer
          placement="top"
          mx="0"
          onClose={() => setIsDrawerOpen(false)}
          isOpen={isDrawerOpen}
        >
          <DrawerOverlay />
          <DrawerContent
            bg={theme.colors.background[900]}
            color={theme.colors.text[100]}
            height="auto"
            width="50vw"
            borderBottomRadius="md"
          >
            <DrawerCloseButton color={theme.colors.subtitle[500]} mt={2} left={2} />
            <DrawerBody py={6}>
              <VStack spacing={1} alignItems="center">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    fontSize="l"
                    fontWeight="bold"
                    color={theme.colors.subtitle[500]}
                    onClick={() => setIsDrawerOpen(false)}
                    _hover={{
                      textDecoration: "underline",
                      color: theme.colors.title[500],
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* Home Content */}
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pt={{ base: "60px", md: "80px" }}
        pb={{ base: "60px", md: "80px" }}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
          flexGrow={1}
          textAlign="center"
          width="100%"
          maxWidth="800px"
          px={{ base: 4, md: 8 }}
        >
          <Heading
            as="h1"
            fontSize={["6xl", "7xl", "8xl"]}
            color="title.500"
            mx={{ base: 4, md: 8 }}
          >
            Natalia Schwindt
          </Heading>

          <Text
            fontSize={["2xl", "3xl"]}
            fontWeight="semibold"
            color="subtitle.500"
            mx={{ base: 6, md: 12 }}
            mb={2}
          >
            Desarrolladora FullStack
          </Text>

          <Text
            fontSize={["lg", "xl", "2xl"]}
            fontWeight="medium"
            color="text.100"
            mx={{ base: 6, md: 12 }}
          >
            Transformo ideas en productos digitales eficientes y de alto impacto.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
