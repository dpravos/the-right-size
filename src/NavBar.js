import "./App.css";
import { ReactComponent as Logo } from './logo.svg';
import {
  Container,
  Flex,
  Text,
  Input,
  Center,
  Image,
  Box,
} from "@chakra-ui/react";

function App() {
  return (
    <header>
      <Container>
        <Flex >
          <Flex>
            <Logo></Logo>
          </Flex>
          <Flex>
            <Center p="2">
              <Text>Categorias</Text>
            </Center>
            <Center p="2">
              <Text>Ideas</Text>
            </Center>
          </Flex>
          <Flex>
            <Center p="2">
              <Input placeholder="Basic usage"></Input>
            </Center>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}

export default App;
