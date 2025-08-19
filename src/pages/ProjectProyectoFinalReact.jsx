import { Box, Heading, Text, Link, Flex, Image } from "@chakra-ui/react";
import proyectoImg from "../assets/projects/proyectoFinalReact.png";

const ProjectProyectoFinalReact = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 12 }}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        flexGrow={1}
        maxWidth="800px"
        textAlign="center"
        py={8}
      >
        <Box
          width={{ base: "80%", md: "70%", lg: "60%" }}
          maxH={{ base: "250px", md: "400px", lg: "500px" }}
          mb={6}
          borderRadius="md"
          overflow="hidden"
          boxShadow="lg"
        >
          <Image
            src={proyectoImg}
            alt="Ecommerce Proyecto Final React"
            objectFit="contain"
            width="100%"
            height="100%"
            display="block"
          />
        </Box>

        <Heading
          color="title.500"
          mb={3}
          fontSize={["3xl", "4xl", "5xl"]}
        >
          Ecommerce Proyecto Final React
        </Heading>

        <Text
          color="text.100"
          fontWeight="normal"
          mb={4}
          fontSize={["md", "lg", "xl"]}
        >
          Aplicación de ecommerce desarrollada con React que simula la experiencia de compra de productos. Permite explorar una base de datos de artículos, aplicar filtros por precio, buscar por nombre, marcar favoritos y gestionar un carrito de compras interactivo. La app simula una compra final mediante una confirmación visual. Utiliza Firebase como backend simulado y está diseñada con Chakra UI para lograr una interfaz accesible y responsive. Incluye navegación dinámica con React Router, formularios optimizados con react-hook-form y animaciones suaves con framer-motion.
        </Text>
        <Flex width="100%" justifyContent="flex-end" mt={2}>
          <Link
            href="https://github.com/Natalia-Schwindt/proyectoFinalReact"
            target="_blank"
            color="title.500"
            fontWeight="bold"
          fontSize="md"
          mt={2}
          textDecoration="none"
          _hover={{ opacity: 0.8 }}
        >
          GitHub
        </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectProyectoFinalReact;
