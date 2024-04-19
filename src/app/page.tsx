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
  ListIcon,
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
        p="20"
        alignItems="center"
        justifyContent="space-between"
        className="container-nav"
      >
        <Image
          src="../logo.jpeg"
          alt="logo"
          boxSize="100px"
          borderRadius="full"
        />
        <Breadcrumb display="flex" color="white" className="breadcrumb">
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#sobre"
              _focus={{ color: "orange.300" }}
              fontSize="2xl"
              className="breadcrumb-item"
            >
              Sobre
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="#serviços"
              _focus={{ color: "orange.300" }}
              fontSize="2xl"
              className="breadcrumb-item"
            >
              Serviços
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="#contato"
              _focus={{ color: "orange.300" }}
              fontSize="2xl"
              className="breadcrumb-item"
            >
              Contato
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

      <VStack
        bg="red.400"
        w="100%"
        h={1000}
        m="3"
        gap="5"
        p="5"
        
      >
        
          <Center
            className={"container"}
            color="white"
            p="10"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="5"
          >
            <Box
              p="3"
              display="flex"
              flexDirection="column"
              id="sobre"
              className={"text-container"}
            >
              <Heading color="white" display="flex" alignItems="center">
                Sobre
              </Heading>
              <br></br>
              <Text fontSize="2xl" textAlign="justify" pr="5" className="text">
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
            <Box boxSize="550px" display="flex"  alignItems="center">
              <Image
                src="../logo.jpeg"
                alt=""
                boxSize="400px"
                borderRadius="full"
                className="image"
              />
            </Box>
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
        <Heading color="white">Serviços</Heading>
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="5"
          maxW="initial"
          className="container-servico"
        >
          <Box
            className="card-servico"
            boxSize="500px"
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
            boxShadow="base"
            _hover={{ boxShadow: "dark-lg" }}
            borderRadius="md"
            onClick={onOpen2}
            className="card-servico"
            maxWidth={{ base: "100%", lg: "33.33%" }}
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
                    Close
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
            boxShadow="base"
            _hover={{ boxShadow: "dark-lg" }}
            borderRadius="md"
            onClick={onOpen3}
            className="card-servico"
            maxWidth={{ base: "100%", lg: "33.33%" }}
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
                    Close
                  </Button>
                  {/* <Button variant='ghost'>Secondary Action</Button> */}
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
          <Heading color="white" display="flex" alignItems="center">
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
              fontSize="lg"
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
