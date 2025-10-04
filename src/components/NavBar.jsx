import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const NavBar = ({
  navItems,
  scrollToSection,
  assistedScroll,
  setAssistedScroll,
}) => {
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const languageOptions = [
    { countryCode: "ES", langCode: "es", title: "Spanish" },
    { countryCode: "RU", langCode: "ru", title: "Russian" },
    { countryCode: "GB", langCode: "en", title: "English" },
  ];

  const handleChangeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      height="60px"
      px={{ base: 4, md: 8, lg: 12 }}
      bg="bg.header"
      zIndex="1200"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="sm"
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
          <HStack spacing={{ md: 4, lg: 6 }}>
            {navItems.map((item) => (
              <Text
                key={`desktop-${item.name}`}
                as="span"
                role="button"
                tabIndex={0}
                onClick={() => scrollToSection(item.name)}
                cursor="pointer"
                color="text.secondary"
                fontSize={{ base: "xs", sm: "sm", md: "sm", lg: "md" }}
                fontWeight="medium"
                _hover={{ textDecoration: "underline", color: "text.primary" }}
              >
                {item.label}
              </Text>
            ))}
          </HStack>
        )}
      </Flex>

      <HStack spacing={3}>
        <HStack spacing={2} mr={{ base: "35px", md: "15px" }}>
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

        <IconButton
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          size="sm"
          color="text.primary"
          bg="rgba(255, 255, 255, 0.15)"
          borderRadius="full"
          boxShadow="sm"
          _hover={{ bg: "rgba(255, 255, 255, 0.25)" }}
          _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
          onClick={toggleColorMode}
        />

        {isDesktop && (
          <Button
            size="sm"
            ml={2}
            px={3}
            py={1.5}
            bg="btn.utilBg"
            color="btn.utilText"
            fontSize="sm"
            fontWeight="semibold"
            borderRadius="md"
            boxShadow="md"
            _hover={{ bg: "rgba(255, 255, 255, 0.25)" }}
            _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
            onClick={() => setAssistedScroll(!assistedScroll)}
          >
            {assistedScroll
              ? t("app.scroll.assist.disable")
              : t("app.scroll.assist.enable")}
          </Button>
        )}
      </HStack>

      <Drawer
        placement="top"
        onClose={() => setIsDrawerOpen(false)}
        isOpen={isDrawerOpen}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="bg.header"
          color="text.primary"
          height="auto"
          borderBottomRadius="md"
        >
          <DrawerCloseButton color="text.secondary" mt={2} left={2} />
          <DrawerBody py={6}>
            <VStack spacing={2} alignItems="center">
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
  );
};

export default NavBar;
