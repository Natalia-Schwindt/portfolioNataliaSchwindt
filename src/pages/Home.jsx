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
import { useTranslation } from "react-i18next";

const Home = ({ scrollToSection, navItems }) => {
  const { t, i18n } = useTranslation();
  const languageOptions = [
    { countryCode: "ES", langCode: "es", title: "Spanish" },
    { countryCode: "RU", langCode: "ru", title: "Russian" },
    { countryCode: "GB", langCode: "en", title: "English" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleChangeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <Box id="home" height="100vh" position="relative">
      <Box
        as="header"
        height="60px"
        p={4}
        px={{ base: 4, md: 8, lg: 12 }}
        bg="bg.header"
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
              color="text.secondary"
              _hover={{ bg: "transparent", opacity: 0.8 }}
              _active={{ bg: "transparent" }}
              mr={2}
            />
          ) : (
            <HStack spacing={8}>
              {navItems.map((item) => (
                <Text
                  key={`desktop-${item.name}`}
                  as="span"
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection(item.name)}
                  cursor="pointer"
                  color="text.secondary"
                  fontSize="lg"
                  fontWeight="medium"
                  _hover={{
                    textDecoration: "underline",
                    color: "text.primary",
                  }}
                >
                  {item.label}
                </Text>
              ))}
            </HStack>
          )}
        </Flex>

        <HStack spacing={2} mr="15px">
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
            bg="bg.header"
            color="text.primary"
            height="auto"
            width="50vw"
            borderBottomRadius="md"
          >
            <DrawerCloseButton color="text.secondary" mt={2} left={2} />
            <DrawerBody py={6}>
              <VStack spacing={1} alignItems="center">
                {navItems.map((item) => (
                  <Text
                    key={`drawer-${item.name}`}
                    as="span"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setIsDrawerOpen(false);
                      setTimeout(() => scrollToSection(item.name), 250);
                    }}
                    fontSize="lg"
                    fontWeight="bold"
                    color="text.secondary"
                    cursor="pointer"
                    _hover={{
                      textDecoration: "underline",
                      color: "text.primary",
                    }}
                  >
                    {item.label}
                  </Text>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

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
            mb={2}
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
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
