import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from '@chakra-ui/icons';

const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const AnimatedGradientBox = styled(Box)`
  background: linear-gradient(-45deg,
    #001a18, /* background.900 de tu tema */
    #003331, /* background.800 de tu tema */
    #0a2725, /* background.700 de tu tema */
    #143532, /* background.600 de tu tema */
    #224643, /* background.500 de tu tema */
    #3b5e5b  /* background.400 de tu tema */
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s ease infinite;
`;

const Home = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const headingVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <AnimatedGradientBox
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      pt="20"
      pb="20"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        flexGrow={1}
        textAlign="center"
        width="100%"
        px={{ base: 4, md: 8 }}
      >
        <MotionHeading
          as="h1"
          fontSize={["6xl", "7xl", "8xl", "8xl"]}
          color="title.500"
          mx={{ base: 4, md: 8 }}
          variants={headingVariants}
          initial="hidden"
          animate={hasMounted ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Natalia Schwindt
        </MotionHeading>

        <MotionText
          fontSize={["xl", "2xl", "3xl", "4xl"]}
          fontWeight="semibold"
          color="subtitle.500"
          mx={{ base: 6, md: 12 }}
          variants={textVariants}
          initial="hidden"
          animate={hasMounted ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Desarrolladora FullStack con React y Java
        </MotionText>

        <MotionText
          fontSize={["lg", "xl", "2xl", "3xl"]}
          fontWeight="medium"
          color="text.100"
          mx={{ base: 6, md: 12 }}
          variants={textVariants}
          initial="hidden"
          animate={hasMounted ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Construyendo experiencias digitales sólidas y eficientes.
        </MotionText>
      </Flex>

      {/* Flechas decorativas que se mueven hacia abajo */}
      <Flex
        direction="column"
        alignItems="center"
        position="absolute"
        bottom="0"
        animation={`${bounceAnimation} 2s infinite`}
      >
        <ChevronDownIcon w={10} h={10} color="text.100" />
        <ChevronDownIcon w={10} h={10} color="text.100" mt="-6" />
      </Flex>
    </AnimatedGradientBox>
  );
};

export default Home;