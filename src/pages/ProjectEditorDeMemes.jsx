import { Box, Heading, Text, Link, Flex, Image } from "@chakra-ui/react";
import proyectoImg from "../assets/projects/EditorDeMemes.png";

const ProjectEditorDeMemes = () => {
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
          Editor de Memes
        </Heading>

        <Text
          color="text.100"
          fontWeight="normal"
          mb={4}
          fontSize={["md", "lg", "xl"]}
        >
          Editor de memes desarrollado de forma individual con HTML, CSS y JavaScript Vanilla. La aplicación permite personalizar imágenes agregando texto superior e inferior, con múltiples opciones de edición: fuente, tamaño, alineación, color, contorno, espaciado e interlineado. Incluye además herramientas para modificar la apariencia de la imagen mediante filtros (brillo, contraste, opacidad, desenfoque, entre otros) y una opción para descargar el meme final en formato de imagen. El proyecto se enfocó en la práctica de manipulación del DOM, estilos dinámicos y usabilidad en la edición visual.
        </Text>
        <Flex width="100%" justifyContent="flex-end" mt={2}>
          <Link
            href="https://github.com/Natalia-Schwindt/editordememes"
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

export default ProjectEditorDeMemes;
