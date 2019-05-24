import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #82269e;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: flex-start;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 32px 20px 0px 20px;
  height: 95%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px 40px 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #00bcca;
`;

export const Description = styled.Text``;

export const DescriptionNormal = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #00bcca;
`;

export const DescriptionBold = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  font-weight: bold;
  color: #00bcca;
`;

export const LimitDetails = styled.View`
  flex-direction: row;
`;

export const LimitText = styled.Text`
  color: #333;
`;

export const LimitValue = styled.Text`
  font-weight: bold;
  color: #9ed230;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 50px 30px 50px;
  background: #eee;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Annotation = styled.Text`
  padding-left: 10px;
  padding-right: 20px;
  font-size: 12px;
  color: #333;
`;
