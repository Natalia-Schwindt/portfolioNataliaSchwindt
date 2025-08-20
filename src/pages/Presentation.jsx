import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const Presentation = () => {
  const presentationContent = [
    { type: "heading", content: "El Arte de Crear." },
    {
      type: "paragraph",
      content:
        "Mi fascinación por la tecnología comenzó hace unos años, cuando descubrí el poder de dar vida a ideas abstractas a través del código.",
    },
    {
      type: "paragraph",
      content:
        "Dedico mi pasión a construir soluciones que no solo funcionen, sino que también inspiren.",
    },
    {
      type: "paragraph",
      content:
        "Cada línea de código, cada proyecto, es una oportunidad para desvelar una nueva faceta de la innovación.",
    },
    {
      type: "paragraph",
      content:
        "Me esfuerzo por la eficiencia y la elegancia, buscando siempre convertir visiones en realidad.",
    },
  ];

  return (
    <Box
      id="presentation"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 8 }}
      pt={{ base: "60px", md: "80px" }}
      pb={{ base: "60px", md: "80px" }}
    >
      <Flex
        direction="column"
        alignItems="center"
        flexGrow={1}
        justifyContent="space-evenly"
        textAlign="center"
        width="100%"
        maxWidth="800px"
        px={{ base: 4, md: 8 }}
      >
        {presentationContent.map((item, index) =>
          item.type === "heading" ? (
            <Heading
              key={index}
              as="h2"
              color="title.500"
              fontWeight="bold"
              fontSize={["3xl", "4xl", "5xl"]}
              mb={4}
            >
              {item.content}
            </Heading>
          ) : (
            <Text
              key={index}
              as="p"
              color="text.100"
              fontWeight="normal"
              fontSize={["md", "lg", "xl"]}
              mb={2}
            >
              {item.content}
            </Text>
          )
        )}
      </Flex>
    </Box>
  );
};

export default Presentation;
