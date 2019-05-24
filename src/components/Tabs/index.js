import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs({ translateY }) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp'
            })
          }
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 280],
          outputRange: [1, 0],
          extrapolate: 'clamp'
        })
      }}
    >
      <TabsContainer>
        <TabItem>
          <Icon name="user-plus" size={24} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="message-square" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-up" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-down" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#fff" />
          <TabText>Bloquear Cartao</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
