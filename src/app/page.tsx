// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { useMediaQuery } from "@chakra-ui/react";
import "./styles/styles.css";
import "./styles/globals.css"
export default function Page() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();

  return (
    <Box
      w="100%"
      maxW="100%"
      display="flex"
      flexDirection="column"
      gap="8"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        boxSize="100px"
        w="100%"
        bg="purple.300"
        display="flex"
        p={["10px", "10px", "10px", "10px", "20px"]}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image
          src="../logo.jpeg"
          alt="logo"
          maxH={["60px", "70px", "70px","80px","100px", "100px"]}
          maxW={["60px","70px", "70px", "80px","100px", "100px"]}
          p={["6px", "3px", "0", "0","0", "0"]}
          // boxSize="100px"
          borderRadius="full"
        />
        <Breadcrumb display="flex" color="white" className="breadcrumb" >
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#sobre"
              _focus={{ color: "orange.300" }}
              fontSize={["sm","md", "xl", "2xl", "2xl"]}
            >
              Sobre
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="#serviços"
              _focus={{ color: "orange.300" }}
              fontSize={["sm","md", "xl", "2xl", "2xl"]}
            >
              Serviços
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="#contato"
              _focus={{ color: "orange.300" }}
              fontSize={["sm","md", "xl", "2xl", "2xl"]}
            >
              Contato
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

      <VStack
        bg="red.400"
        w="100%"
        // maxW="100%"
        h={1000}
        gap="5"
      >
          <Center
            color="white"
             p="10"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection={["column", "row"]}
            gap="5"
          >
            <Box
              // p="3"
              display="flex"
              flexDirection="column"
              id="sobre"
            >
              <Heading color="white" display="flex" fontSize={["lg","xl", "2xl", "3xl", "4xl", "5xl", "5xl"]} alignItems="center">
                Sobre
              </Heading>
              <br></br>
              <Text fontSize={["sm", "md","lg", "xl", "2xl", "2xl"]} textAlign="justify">
              
                Um mundo onde a busca por experiências únicas e deliciosas é
                constante, nasce o Gelato Invocado, muito mais que uma simples
                gelateria. Somos uma jornada de sabores, um convite à celebração
                dos momentos mais especiais da vida. No coração da nossa missão
                está a paixão pela qualidade. Cada ingrediente selecionado
                cuidadosamente, cada receita meticulosamente elaborada para
                proporcionar uma explosão de sabor em cada colherada. Do açaí
                cremoso, repleto de energia e nutrientes, ao sorvete artesanal,
                ou até os milkshakes irresistíveis que com certeza conquistaram,
                nossa variedade é enorme assim como a dedicação. Mais do que
                simplesmente servir sobremesas, queremos ser parte dos seus
                momentos mais felizes. Seja um encontro descontraído com amigos,
                um momento de indulgência pessoal ou uma celebração especial, o
                Gelato Invocado está aqui para tornar cada momento único. Em
                cada sorvete, açaí ou milkshake, há uma história para contar, um
                momento feliz para se guardar. Venha se juntar a nós nessa
                jornada de sabores e descobertas. Gelato Invocado: onde cada
                colherada é uma experiência única e cada cliente é parte da
                nossa família.
              </Text>
            </Box>
            {/* <Box boxSize="550px" display="flex"  alignItems="center"> */}
              <Image
                src="../logo.jpeg"
                alt=""
                maxH={["100px","200","250px", "300px", "350px", "400px"]}
                maxW={["100px","200px","250px", "300px", "350px", "400px"]}
                // boxSize="400px"
                borderRadius="full"
                className="image"
              />
            {/* </Box> */}
          </Center>
        
      </VStack>

      <VStack
        bg="purple.700"
        w="100%"
        h={1000}
        display="flex"
        justifyContent="center"
        gap="5"
        id="serviços"
        >
        <Heading color="white" fontSize={["xl", "2xl","3xl", "4xl", "5xl", "5xl" ]}>Serviços</Heading>
        <Container
          display="flex"
           flexDirection={["column", "row"]}
          justifyContent="center"
          alignItems="center"
          gap="5"
          maxW="initial"
          className="container-servico"
        >
          <Box
            className="card-servico"
             boxSize="500px"
            // maxW={["200px", "250px", "300px", "400px", "450px", "500px"]}
            // maxH={["200px", "250px", "300px", "400px", "450px", "500px"]}
            boxShadow="base"
            _hover={{ boxShadow: "dark-lg" }}
            borderRadius="md"
            onClick={onOpen}
           
          >
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>complementos do acai</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight="" mb="1rem">
                    Morango, banana, kiwi, abacaxi, manga, uva, Granola, mel
                    coco ralado, castanha de cajú, castanha do pará, leite
                    condesado, paçoca, leite em pó, nutella
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="purple" mr={3} onClick={onClose}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Image
              src="../acai.jpg "
              alt="acai"
              h="450px"
              sizes="300px"
              borderRadius="md"
            />
            <Center color="white" m="2">
              <Text fontSize="xl">Açaí</Text>
            </Center>
          </Box>
          <Box
             boxSize="500px"
            // maxW={["200px", "250px", "300px", "400px", "450px", "500px"]}
            // maxH={["200px", "250px", "300px", "400px", "450px", "500px"]}
            boxShadow="base"
            _hover={{ boxShadow: "dark-lg" }}
            borderRadius="md"
            onClick={onOpen2}
            className="card-servico"
          >
            <Modal
              blockScrollOnMount={false}
              isOpen={isOpen2}
              onClose={onClose2}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Sabores do sorvete de casca</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text mb="1rem">
                    Baunilha, Chocolate, Morango, Creme, Cookies & Cream.
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="purple" mr={3} onClick={onClose2}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Image
              src="../Capa-sorvete.jpg"
              alt="sorvete"
              h="450px"
              borderRadius="md"
            />
            <Center color="white" m="2">
              <Text fontSize="xl">Sorvete </Text>
            </Center>
          </Box>
          <Box
            boxSize="500px"
            // maxW={["200px", "250px", "300px", "400px", "450px", "500px"]}
            // maxH={["200px", "250px", "300px", "400px", "450px", "500px"]}
            boxShadow="base"
            _hover={{ boxShadow: "dark-lg" }}
            borderRadius="md"
            onClick={onOpen3}
            className="card-servico"
            
          >
            <Modal
              blockScrollOnMount={false}
              isOpen={isOpen3}
              onClose={onClose3}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Menu de Milkshakes</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text mb="1rem">
                    Milkshake de Chocolate: Ingredientes: Sorvete de chocolate,
                    leite, xarope de chocolate. Complementos opcionais:
                    Chantilly, raspas de chocolate, bolacha Oreo.
                  </Text>
                  <Text mb="1rem">
                    Milkshake de Baunilha: Ingredientes: Sorvete de baunilha,
                    leite, essência de baunilha. Complementos opcionais:
                    Chantilly, calda de caramelo, pedaços de biscoito.
                  </Text>
                  <Text mb="1rem">
                    Milkshake de Morango: Ingredientes: Sorvete de morango,
                    leite, morangos frescos. Complementos opcionais: Chantilly,
                    calda de morango, pedaços de morango.
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="purple" mr={3} onClick={onClose3}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Image
              src="../milk.jpeg"
              alt="milk"
              borderRadius="md"
              w="100%"
              h="450px"
            />
            <Center color="white" m="2">
              <Text fontSize="xl">Milkshake</Text>
            </Center>
          </Box>
        </Container>
      </VStack>

      <VStack
        bg="orange.300"
        h={1000}
        w="100%"
        display="flex"
        justifyContent="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          gap="5"
          id="contato"
        >
          <Heading color="white" display="flex" alignItems="center" fontSize={["2xl", "3xl", "4xl", "5xl", "5xl" ]} justifyContent="center">
            Contato
          </Heading>
          <Center display="flex" gap="10" flexDirection="column">
            <Link
              href={"https://www.instagram.com/gelatoinvocado/"}
              target="black"
              borderRadius="full"
              bgGradient="radial(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
              color="gray.100"
            >
              <BsInstagram size="100px" />
            </Link>
            <Link
              href={"https://web.whatsapp.com/+5589994626241"}
              target="black"
              w="150px"
              h="50px"
              bg="purple.500"
              p="2"
              color="white"
              borderRadius="md"
              display="flex"
              justifyContent="center"
              _hover={{ color: "orage.300", boxShadow: "dark-lg" }}
              fontSize={["md","lg", "lg", "lg"]}
              boxShadow="base"
            >
              Faça seu pedido
            </Link>
          </Center>
        </Box>
      </VStack>
    </Box>
  );
}
