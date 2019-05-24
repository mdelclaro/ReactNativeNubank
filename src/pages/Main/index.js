import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="credit-card" size={28} color="#666" />
            <Icon name="eye-off" size={28} color="#666" />
          </CardHeader>

          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 197.332,12</Description>
          </CardContent>

          <CardFooter>
            <Annotation>
              Compra mais recente em Indigo Estacionamentos no valor de R$ 6,00
              hoje
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
