import { useRef, useEffect, useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
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

function App() {
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

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
  
  const navItems = pageData.filter(page => page.label);

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
    if (isScrolling.current) return;

    if (e.deltaY > 0 && currentSection < pageData.length - 1) {
      const nextIndex = currentSection + 1;
      isScrolling.current = true;
      sectionsRef.current[nextIndex].scrollIntoView({ behavior: "smooth" });
      setCurrentSection(nextIndex);
      setTimeout(() => isScrolling.current = false, 800);
    } else if (e.deltaY < 0 && currentSection > 0) {
      const prevIndex = currentSection - 1;
      isScrolling.current = true;
      sectionsRef.current[prevIndex].scrollIntoView({ behavior: "smooth" });
      setCurrentSection(prevIndex);
      setTimeout(() => isScrolling.current = false, 800);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, pageData.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" overflow="hidden" bg={theme.colors.background[900]}>
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