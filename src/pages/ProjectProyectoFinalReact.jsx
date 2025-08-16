// import { chakra, Box, Heading, Text, Link } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import proyectoImg from "../assets/projects/proyectoFinalReact.png";

// // MotionBox con la nueva sintaxis
// const MotionBox = motion.create(chakra.div);

// const ProjectProyectoFinalReact = () => {
//   return (
//     <Box
//       position="relative"
//       width="100%"
//       height="100vh"
//       bg="background.600"
//       overflow="hidden"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       px={{ base: 4, md: 12 }}
//     >
//       {/* 🔹 Cuadrados inclinados */}
//       <MotionBox
//         position="absolute"
//         width="65%"
//         height="25%"
//         bg="title.900"
//         top="5%"
//         left="5%"
//         style={{ rotate: "-15deg" }}
//         zIndex={1}
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <MotionBox
//         position="absolute"
//         width="65%"
//         height="25%"
//         bg="title.900"
//         top="35%"
//         right="5%"
//         style={{ rotate: "20deg" }}
//         zIndex={1}
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <MotionBox
//         position="absolute"
//         width="65%"
//         height="25%"
//         bg="title.900"
//         top="70%"
//         left="5%"
//         style={{ rotate: "-15deg" }}
//         zIndex={1}
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* 🔹 Imagen centrada con leve flotación */}
//       <MotionBox
//   position="relative"
//   width={{ base: "70%", md: "50%" }}
//   maxH="40%"
//   zIndex={2}
//   boxShadow="0 10px 25px rgba(0,0,0,0.5)"
//   overflow="hidden"
//   borderRadius="md"
//   mb={8}
//   animate={{ y: [0, -8, 0] }} // desplazamiento más pequeño
//   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} // más lento
// >
//   <img
//     src={proyectoImg}
//     alt="Ecommerce Proyecto Final React"
//     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//   />
// </MotionBox>

//       {/* 🔹 Contenido del proyecto */}
//       <MotionBox
//         position="relative"
//         zIndex={3}
//         maxW="800px"
//         textAlign="center"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Heading
//           color="background.400"
//           mb={4}
//           fontSize={["3xl", "4xl", "5xl"]}
//           textShadow="3px 3px 10px rgba(0,0,0,0.7)"
//         >
//           Ecommerce Proyecto Final React
//         </Heading>
//         <Text
//           color="background.200"
//           fontWeight="bold"
//           mb={6}
//           fontSize={["md", "lg", "xl"]}
//           textShadow="2px 2px 6px rgba(0,0,0,1)"
//         >
//           Aplicación de ecommerce desarrollada con React que simula la
//           experiencia de compra de productos. Permite explorar una base de datos
//           de artículos, aplicar filtros por precio, buscar por nombre, marcar
//           favoritos y gestionar un carrito de compras interactivo. La app simula
//           una compra final mediante una confirmación visual. Utiliza Firebase
//           como backend simulado y está diseñada con Chakra UI para lograr una
//           interfaz accesible y responsive. Incluye navegación dinámica con React
//           Router, formularios optimizados con react-hook-form y animaciones
//           suaves con framer-motion.
//         </Text>

//         <Link
//           href="https://github.com/Natalia-Schwindt/proyectoFinalReact"
//           target="_blank"
//           color="background.100"
//           fontWeight="bold"
//           fontSize="sm"
//           position="absolute"
//           bottom={1}
//           right={4}
//         >
//           Código
//         </Link>
//       </MotionBox>
//     </Box>
//   );
// };

// export default ProjectProyectoFinalReact;
import { chakra, Box, Heading, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import proyectoImg from "../assets/projects/proyectoFinalReact.png";

// MotionBox con la nueva sintaxis
const MotionBox = motion.create(chakra.div);

const ProjectProyectoFinalReact = () => {
  return (
    <Box
      position="relative"
      width="100%"
      height="100vh"
      bg="background.600"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 12 }}
    >
      {/* 🔹 Cuadrados inclinados con leve flotación */}
      <MotionBox
        position="absolute"
        width="65%"
        height="25%"
        bg="title.900"
        top="5%"
        left="5%"
        style={{ rotate: "-15deg" }}
        zIndex={1}
        whileInView={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        viewport={{ once: false, margin: "-50px" }}
      />
      <MotionBox
        position="absolute"
        width="65%"
        height="25%"
        bg="title.900"
        top="35%"
        right="5%"
        style={{ rotate: "20deg" }}
        zIndex={1}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        viewport={{ once: false, margin: "-50px" }}
      />
      <MotionBox
        position="absolute"
        width="65%"
        height="25%"
        bg="title.900"
        top="70%"
        left="5%"
        style={{ rotate: "-15deg" }}
        zIndex={1}
        whileInView={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        viewport={{ once: false, margin: "-50px" }}
      />

      {/* 🔹 Imagen centrada con leve flotación */}
     <MotionBox
  position="relative"
  width={{ base: "70%", md: "50%" }}
  zIndex={2}
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.5 }}
>
  {/* Rebote continuo */}
  <MotionBox
    width="100%"
    maxH="100%"   // más alto
    boxShadow="0 10px 25px rgba(0,0,0,0.5)"
    borderRadius="md"
    overflow="hidden"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  >
    <img
      src={proyectoImg}
      alt="Ecommerce Proyecto Final React"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </MotionBox>
</MotionBox>

      {/* 🔹 Contenido del proyecto */}
      <MotionBox
        position="relative"
        zIndex={3}
        maxW="800px"
        textAlign="center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Heading
          color="background.400"
          mb={4}
          fontSize={["3xl", "4xl", "5xl"]}
          textShadow="3px 3px 10px rgba(0,0,0,0.7)"
        >
          Ecommerce Proyecto Final React
        </Heading>
        <Text
          color="background.200"
          fontWeight="bold"
          mb={6}
          fontSize={["md", "lg", "xl"]}
          textShadow="2px 2px 6px rgba(0,0,0,1)"
        >
          Aplicación de ecommerce desarrollada con React que simula la
          experiencia de compra de productos. Permite explorar una base de datos
          de artículos, aplicar filtros por precio, buscar por nombre, marcar
          favoritos y gestionar un carrito de compras interactivo. La app simula
          una compra final mediante una confirmación visual. Utiliza Firebase
          como backend simulado y está diseñada con Chakra UI para lograr una
          interfaz accesible y responsive. Incluye navegación dinámica con React
          Router, formularios optimizados con react-hook-form y animaciones
          suaves con framer-motion.
        </Text>

        <Link
          href="https://github.com/Natalia-Schwindt/proyectoFinalReact"
          target="_blank"
          color="background.100"
          fontWeight="bold"
          fontSize="sm"
          position="absolute"
          bottom={1}
          right={4}
        >
          Código
        </Link>
      </MotionBox>
    </Box>
  );
};

export default ProjectProyectoFinalReact;
