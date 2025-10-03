import { Box, Heading, Text, Link, Flex, Image } from "@chakra-ui/react";
import proyectoImg from "../assets/projects/ToDoList.png";

const ProjectToDoList = () => {
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
          color="text.primary"
          mb={3}
          fontSize={["3xl", "4xl", "5xl"]}
        >
          ToDo List
        </Heading>

        <Text
          color="text.secondary"
          fontWeight="normal"
          mb={4}
          fontSize={["md", "lg", "xl"]}
        >
          Aplicación desarrollada como proyecto final del Módulo V de ADA ITW. Permite crear y gestionar listas de tareas de forma dinámica, intuitiva y completamente responsiva. El usuario puede añadir tareas, editarlas, filtrarlas por estado (pendientes o realizadas), y eliminarlas según necesidad. El diseño se realizó con React y Chakra UI, asegurando una experiencia de uso fluida desde cualquier dispositivo. Es una herramienta práctica pensada para mejorar la organización personal o laboral. El proyecto utiliza Vite para un entorno de desarrollo rápido y eficiente.
        </Text>
        <Flex width="100%" justifyContent="flex-end" mt={2}>
          <Link
            href="https://github.com/Natalia-Schwindt/todolist"
            target="_blank"
            color="text.primary"
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

export default ProjectToDoList;
