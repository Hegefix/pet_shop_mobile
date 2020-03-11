import React from 'react';
import { View, Text } from 'react-native';
import { ScreenContainer } from '@components';
import styles from './styles';

const SplashScreen = () => (
  <ScreenContainer style={styles.container}>
    <Text style={styles.titleText}>PET SHOP</Text>
  </ScreenContainer>
);

export default SplashScreen;
