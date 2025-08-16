import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// 🔹 Animación para orbes mágicos
const magicOrbAnimation = keyframes`
  0% { transform: translate(0, 0) scale(0.8); opacity: 0.3; }
  25% { transform: translate(20vw, 15vh) scale(1.0); opacity: 0.6; }
  50% { transform: translate(-10vw, 30vh) scale(1.2); opacity: 0.8; }
  75% { transform: translate(15vw, -10vh) scale(0.9); opacity: 0.5; }
  100% { transform: translate(0, 0) scale(0.8); opacity: 0.3; }
`;

const MagicOrb = styled(Box)`
  position: absolute;
  border-radius: 50%;
  filter: blur(15px);
  opacity: 0;
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  background-color: ${(props) => props.color || "rgba(255,255,255,0.5)"};
  animation: ${magicOrbAnimation} ${(props) => props.duration || 25}s
    ease-in-out infinite alternate;
  animation-delay: ${(props) => props.delay || 0}s;
  animation-fill-mode: forwards;
`;

const Presentation = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // se desconecta después de activarse
        }
      },
      { threshold: 0.3 } // 30% visible para activar
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

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
        "Mi meta es que cada línea de código cuente una historia y, a través de ellas, dejar una huella significativa en el mundo.",
    },
  ];

  const orbColors = [
    "#143532",
    "#224643",
    "#3b5e5b",
    "#5c817e",
    "#c2a080",
    "#d8bfab",
    "#ffb173",
    "#ffc89b",
  ];

  const orbs = Array.from({ length: 12 }).map(() => ({
    size: `${30 + Math.floor(Math.random() * 50)}px`,
    color: orbColors[Math.floor(Math.random() * orbColors.length)],
    duration: 20 + Math.floor(Math.random() * 25),
    delay: Math.floor(Math.random() * 10),
    top: `${Math.floor(Math.random() * 90)}%`,
    left: `${Math.floor(Math.random() * 90)}%`,
  }));

  return (
    <Box
      ref={sectionRef}
      height="100vh"
      width="100%"
      position="relative"
      overflow="hidden"
      backgroundColor="#001a18"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 8 }}
      pt={{ base: "60px", md: "80px" }}
      pb={{ base: "60px", md: "80px" }}
    >
      {orbs.map((orb, index) => (
        <MagicOrb
          key={index}
          size={orb.size}
          color={orb.color}
          duration={orb.duration}
          delay={orb.delay}
          style={{ top: orb.top, left: orb.left }}
        />
      ))}

      <Flex
        direction="column"
        alignItems="center"
        flexGrow={1}
        justifyContent="space-evenly"
        textAlign="center"
        maxWidth="800px"
      >
        {presentationContent.map((item, index) => {
          const isHeading = item.type === "heading";
          const transitionDelay = `${index * 0.7}s`;
          return isHeading ? (
            <Heading
              key={index}
              as="h2"
              color="title.500"
              fontWeight="extrabold"
              fontSize={["3xl", "4xl", "5xl"]}
              mb={4}
              textShadow="0 0 10px rgba(255, 255, 255, 0.3)"
              transform={visible ? "translateY(0)" : "translateY(40px)"}
              opacity={visible ? 1 : 0}
              transition={`opacity 0.8s ease-out ${transitionDelay}, transform 0.8s ease-out ${transitionDelay}`}
            >
              {item.content}
            </Heading>
          ) : (
            <Text
              key={index}
              as="p"
              color="text.100"
              fontWeight="bold"
              fontSize={["md", "lg", "xl"]}
              mb={2}
              textShadow="0 0 8px rgba(255,255,255,0.4), 0 0 12px rgba(194,160,128,0.3)"
              transform={visible ? "translateY(0)" : "translateY(40px)"}
              opacity={visible ? 1 : 0}
              transition={`opacity 0.8s ease-out ${transitionDelay}, transform 0.8s ease-out ${transitionDelay}`}
            >
              {item.content}
            </Text>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Presentation;
