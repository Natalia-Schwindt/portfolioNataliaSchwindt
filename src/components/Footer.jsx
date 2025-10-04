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
  Tooltip
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!serviceID || !templateID || !publicKey) {
      console.error(t("footer.alert.configErrorConsole"));
      alert(t("footer.alert.configError"));
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
        alert(t("footer.alert.success"));
        e.target.reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert(t("footer.alert.failed"));
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
      color="footer.text"
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
            {t("footer.title")}
          </Text>
          <Text fontSize={["md", "lg"]} textAlign="center">
            {t("footer.subtitle")}
          </Text>
        </VStack>

        <Box
          as="form"
          onSubmit={handleSubmit}
          width="100%"
          p={{ base: 4, md: 8 }}
          bg="footer.bg"
          borderRadius="md"
          boxShadow="lg"
        >
          <VStack spacing={2}>
            <Input
              name="name"
              placeholder={t("footer.form.name")}
              _placeholder={{ color: "footer.placeholder" }}
              bg="footer.inputBg"
              borderColor="footer.inputBorder"
              color="footer.text"
              focusBorderColor="title.500"
              size="lg"
            />
            <Input
              name="email"
              type="email"
              placeholder={t("footer.form.email")}
              _placeholder={{ color: "footer.placeholder" }}
              bg="footer.inputBg"
              borderColor="footer.inputBorder"
              color="footer.text"
              focusBorderColor="title.500"
              size="lg"
            />
            <Textarea
              name="message"
              placeholder={t("footer.form.message")}
              _placeholder={{ color: "footer.placeholder" }}
              bg="footer.inputBg"
              borderColor="footer.inputBorder"
              color="footer.text"
              focusBorderColor="title.500"
              size="lg"
              rows={5}
            />
            <Button
              type="submit"
              bg="footer.buttonBg"
              color="background.900"
              px={2}
              mt={2}
              width="auto"
              fontWeight="bold"
              _hover={{ bg: "footer.buttonHover" }}
            >
              {t("footer.form.submit")}
            </Button>
          </VStack>
        </Box>

        <HStack spacing={6} mt={2}>
          <Tooltip label={t("footer.links.linkedin")} aria-label="LinkedIn Tooltip">
          <Link
            href="https://www.linkedin.com/in/natalia-schwindt-react-java-developer/"
            isExternal
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Icon
              as={FaLinkedin}
              w={7}
              h={7}
              color="footer.icon"
              _hover={{ color: "footer.iconHover" }}
            />
          </Link>
          </Tooltip>
          <Tooltip label={t("footer.links.github")} aria-label="GitHub Tooltip">
          <Link
            href="https://github.com/Natalia-Schwindt"
            isExternal
            aria-label="GitHub"
            title="GitHub"
          >
            <Icon
              as={FaGithub}
              w={7}
              h={7}
              color="footer.icon"
              _hover={{ color: "footer.iconHover" }}
            />
          </Link>
          </Tooltip>
          <Tooltip label={t("footer.links.email")} aria-label="Correo Electrónico Tooltip">
          <Link
            href="mailto:naty8014@gmail.com"
            aria-label="Correo Electrónico"
            title="Correo Electrónico"
          >
            <Icon
              as={FaEnvelope}
              w={7}
              h={7}
              color="footer.icon"
              _hover={{ color: "footer.iconHover" }}
            />
          </Link>
          </Tooltip>
          <Tooltip label={t("footer.links.cv")} aria-label="Currículum Tooltip">
          <Link
            href="https://docs.google.com/document/d/1P3OM3sDTahxkMgAPgYT8A3n2x6lP9vR_/edit?pli=1"
            isExternal
            aria-label="Currículum"
            title="Currículum"
          >
            <Icon
              as={FaFilePdf}
              w={7}
              h={7}
              color="footer.icon"
              _hover={{ color: "footer.iconHover" }}
            />
          </Link>
          </Tooltip>
        </HStack>

        <Text fontSize={["sm"]} color="footer.copy" fontWeight="bold">
          {t("footer.copyright", { year: currentYear })}
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
