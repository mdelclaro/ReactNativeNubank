import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  DescriptionNormal,
  DescriptionBold,
  LimitDetails,
  LimitText,
  LimitValue,
  Annotation
} from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 420 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 420 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 420],
                    outputRange: [-50, 0, 420],
                    extrapolate: 'clamp'
                  })
                }
              ]
            }}
          >
            <CardHeader>
              <Icon name="credit-card" size={28} color="#666" />
              <Icon name="eye-off" size={28} color="#666" />
            </CardHeader>

            <CardContent>
              <Title>FATURA ATUAL</Title>
              <Description>
                <DescriptionNormal>R$ </DescriptionNormal>
                <DescriptionBold>197.332</DescriptionBold>
                <DescriptionNormal>,12</DescriptionNormal>
              </Description>

              <LimitDetails>
                <LimitText>Limite disponível </LimitText>
                <LimitValue>R$ 80,27</LimitValue>
              </LimitDetails>
            </CardContent>

            <CardFooter>
              <Icon name="truck" size={28} color="#666" />
              <Annotation>
                Compra mais recente em Indigo Estacionamentos no valor de R$
                6,00 hoje
              </Annotation>
              <Icon name="chevron-right" size={18} color="#666" />
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
