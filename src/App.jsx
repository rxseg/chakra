import { Button, Box, Image, Center, Flex, Text } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Box
        boxSize="100%"
        position="absolute"
        h="80vh"
        objectFit="cover"
        w="100%"
        p="50px"
      >
        <Image
          src="https://wallpapercrafter.com/desktop/17849-bicyclist-cyclist-silhouette-sunset-bicycle-4k.jpg"
          boxSize="70%"
          w="100%"
        ></Image>
      </Box>
      <Box position="absolute" justifyItems="center">
        <Center h="50vh" w="100vw" flexDirection="column">
          <Text
            display="flex"
            justifyContent="center"
            fontSize="4xl"
            color="white"
            mt="140px"
          >
            DOMINA EL TERRENO
          </Text>
          <Flex gap={1}>
            <Button colorScheme="gray" variant="outline">
              VER DETALLES
            </Button>
            <Button colorScheme="gray" variant="outline">
              VER VIDEO
            </Button>
          </Flex>
        </Center>
        <Box position="absolute" justifyItems="center" boxSize="25%">
          <Image
            src="https://wallpapercrafter.com/desktop/17849-bicyclist-cyclist-silhouette-sunset-bicycle-4k.jpg"
            boxSize="70%"
            w="100%"
            h="50vh"
            p="50px"
            position="absolute"
          ></Image>
          <Center
            h="20vh"
            w="100%"
            flexDirection="column"
            p="50px"
            boxSize="100%"
            mt="160px"
          >
            <Flex gap={1} direction="column" position="relative">
          <Text
            display="flex"
            justifyContent="center"
            fontSize="3xl"
            color="white"
            mt="100px"
          >
            DOMINA EL TERRENO
          </Text>
              <Button colorScheme="gray" variant="outline">
                VER DETALLES
              </Button>
              <Button colorScheme="gray" variant="outline">
                VER VIDEO
              </Button>
            </Flex>
          </Center>
        </Box>
      </Box>
    </>
  );
}

export default App;
