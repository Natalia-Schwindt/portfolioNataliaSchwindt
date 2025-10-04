import { useRef, useEffect, useState, useCallback } from "react";
import {
  Box,
  ChakraProvider,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import theme from "./theme";
import "./i18n";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import SkillsTech from "./pages/SkillsTech.jsx";
import SkillsToolsAndSoft from "./pages/SkillsToolsAndSoft.jsx";
import ProjectAhorrADAs from "./pages/ProjectAhorrADAs.jsx";
import ProjectBuscadorDeComics from "./pages/ProjectBuscadorDeComics.jsx";
import ProjectEditorDeMemes from "./pages/ProjectEditorDeMemes.jsx";
import ProjectProyectoFinalReact from "./pages/ProjectProyectoFinalReact.jsx";
import ProjectProyectoQR from "./pages/ProjectProyectoQR.jsx";
import ProjectToDoList from "./pages/ProjectToDoList.jsx";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      size="auto"
      minW="0"
      minH="0"
      p="8px"
      fontSize="2xl"
      color="text.primary"
      bg="rgba(255, 255, 255, 0.15)"
      borderRadius="full"
      boxShadow="0px 1px 3px rgba(0,0,0,0.12)"
      backdropFilter="blur(10px)"
      _hover={{ bg: "rgba(255, 255, 255, 0.25)" }}
      _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
      onClick={toggleColorMode}
    />
  );
};

function App() {
  const { t } = useTranslation();
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [assistedScroll, setAssistedScroll] = useState(isDesktop);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      const desktop = window.innerWidth >= 1024;
      setIsMobile(mobile);
      setIsDesktop(desktop);

      if (!desktop) {
      setAssistedScroll(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const pageData = [
    { name: "home", label: t("nav.home"), component: <Home /> },
    {
      name: "presentation",
      label: t("nav.presentation"),
      component: <Presentation />,
    },
    { name: "skills", label: t("nav.skills"), component: <SkillsTech /> },
    { name: "skills_soft", component: <SkillsToolsAndSoft /> },
    {
      name: "projects",
      label: t("nav.projects"),
      component: <ProjectAhorrADAs />,
    },
    { name: "project_2", component: <ProjectBuscadorDeComics /> },
    { name: "project_3", component: <ProjectEditorDeMemes /> },
    { name: "project_4", component: <ProjectProyectoFinalReact /> },
    { name: "project_5", component: <ProjectProyectoQR /> },
    { name: "project_6", component: <ProjectToDoList /> },
    { name: "contact", label: t("nav.contact"), component: <Footer /> },
  ];

  const navItems = pageData.filter((page) => page.label);

  const scrollToSection = (sectionName) => {
    const index = pageData.findIndex((p) => p.name === sectionName);
    const el = sectionsRef.current[index];
    if (index !== -1 && el) {
      isScrolling.current = true;
      const top = el.offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
      setCurrentSection(index);
      setTimeout(() => {
        isScrolling.current = false;
      }, 900);
    }
  };

  const handleWheel = useCallback(
    (e) => {
      if (!assistedScroll || isScrolling.current) return;

      if (e.deltaY > 0 && currentSection < pageData.length - 1) {
        const nextIndex = currentSection + 1;
        isScrolling.current = true;
        sectionsRef.current[nextIndex].scrollIntoView({ behavior: "smooth" });
        setCurrentSection(nextIndex);
        setTimeout(() => (isScrolling.current = false), 800);
      } else if (e.deltaY < 0 && currentSection > 0) {
        const prevIndex = currentSection - 1;
        isScrolling.current = true;
        sectionsRef.current[prevIndex].scrollIntoView({ behavior: "smooth" });
        setCurrentSection(prevIndex);
        setTimeout(() => (isScrolling.current = false), 800);
      }
    },
    [assistedScroll, currentSection, pageData.length]
  );

  useEffect(() => {
    if (assistedScroll) {
      window.addEventListener("wheel", handleWheel, { passive: true });
      document.body.style.overflow = "hidden";
    } else {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto";
    }
    return () => window.removeEventListener("wheel", handleWheel);
  }, [assistedScroll, handleWheel]);

  return (
    <ChakraProvider theme={theme}>
      <NavBar
        isMobile={isMobile}
        assistedScroll={assistedScroll}
        setAssistedScroll={setAssistedScroll}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />

      <Box as="main" pt="64px" minH="100vh" overflow="hidden" bg="bg.primary">
        {pageData.map((page, index) => (
          <Box
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            h="100vh"
          >
            {page.name === "home" ? (
              <Home scrollToSection={scrollToSection} navItems={navItems} />
            ) : (
              page.component
            )}
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
}

export default App;
