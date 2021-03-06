import React from 'react';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 420],
          outputRange: [0, 1]
        })
      }}
    >
      <Code>
        <QRCode
          value="https://facebook.github.io/react-native/"
          size={100}
          fgColor="#fff"
          bgColor="#82269E"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-circle" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="user" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="dollar-sign" size={20} color="#fff" />
          <NavText>Configurar NuConta</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
