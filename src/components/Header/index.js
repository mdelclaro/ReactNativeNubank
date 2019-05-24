import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import logo from '~/assets/Nubank_Logo.png';

import { Container, Top, Logo, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Matheus</Title>
      </Top>
      <Icon name="chevron-down" size={20} color="#fff" />
    </Container>
  );
}
