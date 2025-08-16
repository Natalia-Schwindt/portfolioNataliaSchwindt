import { Box, ChakraProvider, HStack, Flex, Link as ChakraLink } from "@chakra-ui/react";
import theme from "./theme";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import ProjectProyectoFinalReact from "./pages/ProjectProyectoFinalReact.jsx"

import ReactCountryFlag from "react-country-flag";
import { useEffect, useState, useRef, useCallback } from "react";

function App() {
  const languageOptions = [
    { countryCode: "ES", langCode: "es", title: "Spanish" },
    { countryCode: "GB", langCode: "en", title: "English" },
    { countryCode: "RU", langCode: "ru", title: "Russian" },
  ];

  const handleChangeLanguage = (langCode) => {
    console.log(`Attempting to change language to: ${langCode}`);
  };

  const sectionRefs = useRef([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollDuration = 800;

  const sections = [
    { key: "home", content: <Home /> },
    { key: "presentation", content: <Presentation /> },
    { key: "skills", content: ( 
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="background.700"
        color="text.100"
      >
        <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>Sección Skills Placeholder</h1>
      </Box>
    )},
    { key: "projects", content: <ProjectProyectoFinalReact /> },
    { key: "footer", content: (
      <Box
        height="60px"
        bg="background.900"
        color="text.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <h2 style={{ color: theme.colors.text[100], fontSize: '1.5rem' }}>Footer Placeholder</h2>
      </Box>
    )}
  ];

  const setSectionRef = useCallback((node, index) => {
    if (node) sectionRefs.current[index] = node;
  }, []);

  const scrollToSection = useCallback((index) => {
    if (sectionRefs.current[index] && sectionRefs.current[index].scrollIntoView) {
      setIsScrolling(true);
      sectionRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });

      setCurrentSectionIndex(index);

      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        setIsScrolling(false);
        document.body.style.overflow = '';
        console.log(`Scroll animation to section ${index} finished.`);
      }, scrollDuration);
    } else {
      console.warn(`Section ref at index ${index} is not available for scroll.`);
      setIsScrolling(false);
      document.body.style.overflow = '';
    }
  }, [scrollDuration]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (isScrolling) {
        event.preventDefault();
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      let nextIndex = currentSectionIndex + direction;

      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex >= sections.length) nextIndex = sections.length - 1;

      if (nextIndex !== currentSectionIndex) {
        scrollToSection(nextIndex);
      } else {
        document.body.style.overflow = '';
      }
      event.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSectionIndex, isScrolling, scrollToSection, sections.length]);

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" position="relative">

        <Box
          as="header"
          height="60px"
          p={4}
          pl={{ base: 4, md: 8, lg: 12 }}
          pr={{ base: 4, md: 8, lg: 12 }}
          bg="transparent"
          position="absolute"
          top="0"
          left="0"
          right="0"
          zIndex="1000"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <HStack spacing={1}>
            {languageOptions.map((lang) => (
              <ChakraLink
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
                  style={{ width: "1.1em", height: "1.1em", borderRadius: "4px" }}
                  title={lang.title}
                />
              </ChakraLink>
            ))}
          </HStack>
        </Box>

        {sections.map((section, index) => (
          <Box
            key={section.key}
            ref={node => setSectionRef(node, index)}
            height={section.key === 'footer' ? '60px' : '100vh'}
          >
            {section.content}
          </Box>
        ))}

      </Box>
    </ChakraProvider>
  );
}

export default App;
