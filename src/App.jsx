// import { useRef, useEffect, useState } from "react";
// import { Box, ChakraProvider, Button, Flex, useColorModeValue } from "@chakra-ui/react";
// import theme from "./theme";

// import Home from "./pages/Home";
// import Presentation from "./pages/Presentation";
// import SkillsTech from "./pages/SkillsTech.jsx";
// import SkillsToolsAndSoft from "./pages/SkillsToolsAndSoft.jsx";
// import ProjectAhorrADAs from "./pages/ProjectAhorrADAs.jsx";
// import ProjectBuscadorDeComics from "./pages/ProjectBuscadorDeComics.jsx";
// import ProjectEditorDeMemes from "./pages/ProjectEditorDeMemes.jsx";
// import ProjectProyectoFinalReact from "./pages/ProjectProyectoFinalReact.jsx";
// import ProjectProyectoQR from "./pages/ProjectProyectoQR.jsx";
// import ProjectToDoList from "./pages/ProjectToDoList.jsx";
// import Footer from "./components/Footer";

// function App() {
//   const sectionsRef = useRef([]);
//   const [currentSection, setCurrentSection] = useState(0);
//   const isScrolling = useRef(false);

//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [assistedScroll, setAssistedScroll] = useState(!isMobile);

//     const hoverBg = useColorModeValue('title.300', 'background.300');
//     const activeBg = useColorModeValue('title.400', 'background.500');

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       if (mobile) setAssistedScroll(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const pageData = [
//     { name: "home", label: "Inicio", component: <Home /> },
//     { name: "presentation", label: "Sobre mí", component: <Presentation /> },
//     { name: "skills", label: "Skills", component: <SkillsTech /> },
//     { name: "skills_soft", component: <SkillsToolsAndSoft /> },
//     { name: "projects", label: "Proyectos", component: <ProjectAhorrADAs /> },
//     { name: "project_2", component: <ProjectBuscadorDeComics /> },
//     { name: "project_3", component: <ProjectEditorDeMemes /> },
//     { name: "project_4", component: <ProjectProyectoFinalReact /> },
//     { name: "project_5", component: <ProjectProyectoQR /> },
//     { name: "project_6", component: <ProjectToDoList /> },
//     { name: "contact", label: "Contacto", component: <Footer /> },
//   ];

//   const navItems = pageData.filter((page) => page.label);

//   const scrollToSection = (sectionName) => {
//     const index = pageData.findIndex((p) => p.name === sectionName);
//     const el = sectionsRef.current[index];
//     if (index !== -1 && el) {
//       isScrolling.current = true;
//       const top = el.offsetTop;
//       window.scrollTo({ top, behavior: "smooth" });
//       setCurrentSection(index);
//       setTimeout(() => {
//         isScrolling.current = false;
//       }, 900);
//     }
//   };

//   const handleWheel = (e) => {
//     if (!assistedScroll || isScrolling.current) return;

//     if (e.deltaY > 0 && currentSection < pageData.length - 1) {
//       const nextIndex = currentSection + 1;
//       isScrolling.current = true;
//       sectionsRef.current[nextIndex].scrollIntoView({ behavior: "smooth" });
//       setCurrentSection(nextIndex);
//       setTimeout(() => (isScrolling.current = false), 800);
//     } else if (e.deltaY < 0 && currentSection > 0) {
//       const prevIndex = currentSection - 1;
//       isScrolling.current = true;
//       sectionsRef.current[prevIndex].scrollIntoView({ behavior: "smooth" });
//       setCurrentSection(prevIndex);
//       setTimeout(() => (isScrolling.current = false), 800);
//     }
//   };

//   useEffect(() => {
//     if (assistedScroll) {
//       window.addEventListener("wheel", handleWheel, { passive: true });
//       document.body.style.overflow = "hidden";
//     } else {
//       window.removeEventListener("wheel", handleWheel);
//       document.body.style.overflow = "auto";
//     }
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [assistedScroll, currentSection, pageData.length]);

//   return (
//     <ChakraProvider theme={theme}>
//       {!isMobile && (
//         <Flex position="fixed" top="10px" right="10px" zIndex="1000">
//           <Button
//             size="sm"
//             ml={4}
//             px={3}
//             py={1.5}
//             bg="btn.utilBg" 
//             color="btn.utilText" 
//             fontSize="sm"
//             fontWeight="semibold"
//             borderRadius="md"
//             boxShadow="md"
//             _hover={{ bg: hoverBg, opacity: 0.9 }}
//             _active={{ bg: activeBg, opacity: 1 }}
//             onClick={() => setAssistedScroll(!assistedScroll)}
//           >
//             {assistedScroll
//               ? "Desactivar scroll asistido"
//               : "Activar scroll asistido"}
//           </Button>
//         </Flex>
//       )}

//       <Box minH="100vh" overflow="hidden" bg="bg.primary">
//         {pageData.map((page, index) => (
//           <Box
//             key={index}
//             ref={(el) => (sectionsRef.current[index] = el)}
//             h="100vh"
//           >
//             {page.name === "home" ? (
//               <Home scrollToSection={scrollToSection} navItems={navItems} />
//             ) : (
//               page.component
//             )}
//           </Box>
//         ))}
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;
import { useRef, useEffect, useState } from "react";
import {
  Box,
  ChakraProvider,
  Button,
  Flex,
  useColorModeValue,
  IconButton,
  useColorMode
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import theme from "./theme";

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

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
  aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
  icon={isDark ? <SunIcon /> : <MoonIcon />}
  size="auto"          // desactiva el size predefinido
  minW="0"             // ancho mínimo cero
  minH="0"             // alto mínimo cero
  p="8px"              // padding deseado
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
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [assistedScroll, setAssistedScroll] = useState(!isMobile);

  const hoverBg = useColorModeValue("title.300", "background.300");
  const activeBg = useColorModeValue("title.400", "background.500");

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setAssistedScroll(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageData = [
    { name: "home", label: "Inicio", component: <Home /> },
    { name: "presentation", label: "Sobre mí", component: <Presentation /> },
    { name: "skills", label: "Skills", component: <SkillsTech /> },
    { name: "skills_soft", component: <SkillsToolsAndSoft /> },
    { name: "projects", label: "Proyectos", component: <ProjectAhorrADAs /> },
    { name: "project_2", component: <ProjectBuscadorDeComics /> },
    { name: "project_3", component: <ProjectEditorDeMemes /> },
    { name: "project_4", component: <ProjectProyectoFinalReact /> },
    { name: "project_5", component: <ProjectProyectoQR /> },
    { name: "project_6", component: <ProjectToDoList /> },
    { name: "contact", label: "Contacto", component: <Footer /> },
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

  const handleWheel = (e) => {
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
  };

  useEffect(() => {
    if (assistedScroll) {
      window.addEventListener("wheel", handleWheel, { passive: true });
      document.body.style.overflow = "hidden";
    } else {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto";
    }
    return () => window.removeEventListener("wheel", handleWheel);
  }, [assistedScroll, currentSection, pageData.length]);

  return (
    <ChakraProvider theme={theme}>
      {/* Botón de scroll asistido */}
      {!isMobile && (
        <Flex position="fixed" top="15px" right="60px" zIndex="1000">
          <Button
            size="sm"
            ml={4}
            px={3}
            py={1.5}
            bg="btn.utilBg"
            color="btn.utilText"
            fontSize="sm"
            fontWeight="semibold"
            borderRadius="md"
            boxShadow="md"
            _hover={{ bg: hoverBg, opacity: 0.9 }}
            _active={{ bg: activeBg, opacity: 1 }}
            onClick={() => setAssistedScroll(!assistedScroll)}
          >
            {assistedScroll
              ? "Desactivar scroll asistido"
              : "Activar scroll asistido"}
          </Button>
        </Flex>
      )}

      {/* Botón global de modo claro/oscuro */}
      <Flex position="fixed" top="10px" right="10px" zIndex="1100">
        <ColorModeSwitcher />
      </Flex>

      <Box minH="100vh" overflow="hidden" bg="bg.primary">
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
