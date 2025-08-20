import {
  Box,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import theme from "../theme";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!serviceID || !templateID || !publicKey) {
      console.error(
        "Error: Las variables de entorno de EmailJS no están configuradas correctamente."
      );
      alert("Error de configuración: Contacta al administrador del sitio.");
      return;
    }

    const templateParams = {
      from_name: e.target.elements.name.value,
      from_email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Mensaje enviado con éxito. ¡Gracias por contactarme!");
        e.target.reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert(
          "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
        );
      });
  };

  return (
    <Box
      id="contact"
      as="footer"
      scrollSnapAlign="start"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      color={theme.colors.text[100]}
      py={{ base: 6, md: 8 }}
      px={{ base: 4, md: 8 }}
      textAlign="center"
    >
      <VStack spacing={{ base: 6, md: 8 }} maxWidth="800px" width="100%">
        <VStack spacing={2} mb={4}>
          <Text
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="bold"
            color="title.500"
            textAlign="center"
          >
            Ponte en Contacto ✉️
          </Text>
          <Text fontSize={["md", "lg"]} textAlign="center">
            ¡Me encantaría saber de ti! Puedes contactarme a través de mis redes
            o usando el siguiente formulario.
          </Text>
        </VStack>

        <Box
          as="form"
          onSubmit={handleSubmit}
          width="100%"
          p={{ base: 4, md: 8 }}
          bg="background.800"
          borderRadius="md"
          boxShadow="lg"
        >
          <VStack spacing={2}>
            <Input
              name="name"
              placeholder="Tu Nombre"
              _placeholder={{ color: "text.200" }}
              bg="background.700"
              borderColor="background.600"
              color="text.100"
              focusBorderColor="title.500"
              size="lg"
            />
            <Input
              name="email"
              type="email"
              placeholder="Tu Correo Electrónico"
              _placeholder={{ color: "text.200" }}
              bg="background.700"
              borderColor="background.600"
              color="text.100"
              focusBorderColor="title.500"
              size="lg"
            />
            <Textarea
              name="message"
              placeholder="Tu Mensaje"
              _placeholder={{ color: "text.200" }}
              bg="background.700"
              borderColor="background.600"
              color="text.100"
              focusBorderColor="title.500"
              size="lg"
              rows={5}
            />
            <Button
              type="submit"
              bg="title.500"
              color="background.900"
              px={2}
              mt={2}
              width="auto"
              fontWeight="bold"
              _hover={{ bg: "title.400" }}
            >
              Enviar
            </Button>
          </VStack>
        </Box>

        <HStack spacing={6} mt={2}>
          <Link
            href="https://www.linkedin.com/in/natalia-schwindt-react-java-developer/"
            isExternal
            aria-label="LinkedIn"
          >
            <Icon
              as={FaLinkedin}
              w={7}
              h={7}
              color="text.100"
              _hover={{ color: "title.500" }}
            />
          </Link>
          <Link
            href="https://github.com/Natalia-Schwindt"
            isExternal
            aria-label="GitHub"
          >
            <Icon
              as={FaGithub}
              w={7}
              h={7}
              color="text.100"
              _hover={{ color: "title.500" }}
            />
          </Link>
          <Link
            href="mailto:naty8014@gmail.com"
            aria-label="Correo Electrónico"
          >
            <Icon
              as={FaEnvelope}
              w={7}
              h={7}
              color="text.100"
              _hover={{ color: "title.500" }}
            />
          </Link>
        </HStack>

        <HStack
          spacing={4}
          wrap="wrap"
          justifyContent="center"
          fontSize={["sm", "md"]}
          fontWeight="bold"
          mt={1}
          mb={1}
        >
          <Link
            href="#home"
            _hover={{ textDecoration: "underline", color: "title.500" }}
          >
            Inicio
          </Link>
          <Link
            href="#presentation"
            _hover={{ textDecoration: "underline", color: "title.500" }}
          >
            Sobre mí
          </Link>
          <Link
            href="#skills"
            _hover={{ textDecoration: "underline", color: "title.500" }}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            _hover={{ textDecoration: "underline", color: "title.500" }}
          >
            Proyectos
          </Link>
        </HStack>

        <Text fontSize={["sm"]} color="text.200" fontWeight="bold">
          Creado por Natalia Schwindt © {currentYear}. Todos los derechos
          reservados.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
