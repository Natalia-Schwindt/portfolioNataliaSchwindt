// import { Box, ChakraProvider } from "@chakra-ui/react";
// import theme from "./theme";
// import Header from "./components/Header";
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
//   return (
//     <ChakraProvider theme={theme}>
//       <Box minH="100vh" bg={theme.colors.background[900]}>
//         <Header />
//         <Home />
//         <Presentation />
//         <SkillsTech />
//         <SkillsToolsAndSoft />
//         <ProjectAhorrADAs />
//         <ProjectBuscadorDeComics />
//         <ProjectEditorDeMemes />
//         <ProjectProyectoFinalReact />
//         <ProjectProyectoQR />
//         <ProjectToDoList />
//         <Footer />
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;
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

  const sections = [
    <Home />,
    <Presentation />,
    <SkillsTech />,
    <SkillsToolsAndSoft />,
    <ProjectAhorrADAs />,
    <ProjectBuscadorDeComics />,
    <ProjectEditorDeMemes />,
    <ProjectProyectoFinalReact />,
    <ProjectProyectoQR />,
    <ProjectToDoList />,
    <Footer />,
  ];

  const scrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      isScrolling.current = true;
      sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    }
  };

  const handleWheel = (e) => {
    if (isScrolling.current) return;

    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection]);

  useEffect(() => {
    // Ocultar scroll de la ventana
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" overflow="hidden" bg={theme.colors.background[900]}>
        {/* Secciones scrollables */}
        {sections.map((SectionComponent, index) => (
          <Box
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            h="100vh"
          >
            {SectionComponent}
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
}

export default App;
