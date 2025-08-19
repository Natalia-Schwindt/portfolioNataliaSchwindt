import { Box, Heading, Text, Link, Flex, Image } from "@chakra-ui/react";
import proyectoImg from "../assets/projects/ProyectoQR.png";

const ProjectProyectoQR = () => {
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
          Proyecto QR
        </Heading>

        <Text
          color="text.100"
          fontWeight="normal"
          mb={4}
          fontSize={["md", "lg", "xl"]}
        >
          Proyecto de diseño web que simula la carta digital de un restaurante. Fue desarrollado con HTML y CSS puros. Las imágenes fueron creadas con inteligencia artificial (Leonardo AI), lo que permitió dar un estilo visual original y coherente. El sitio presenta secciones navegables de bebidas, comidas y postres, acompañadas de descripciones creativas que refuerzan la identidad del restaurante. La experiencia se completa con un código QR que permite acceder fácilmente a la carta desde dispositivos móviles, simulando su uso en un entorno real. Este proyecto fue uno de los más disfrutados, por su combinación de diseño, narrativa y creatividad visual.
        </Text>
        <Flex width="100%" justifyContent="flex-end" mt={2}>
          <Link
            href="https://github.com/Natalia-Schwindt/proyectoqr"
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

export default ProjectProyectoQR;
