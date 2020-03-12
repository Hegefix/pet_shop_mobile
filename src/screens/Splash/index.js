import React from 'react';
import { ScreenContainer, PSText } from '@components';
import styles from './styles';

const SplashScreen = () => (
  <ScreenContainer style={styles.container}>
    <PSText style={styles.titleText}>PET SHOP</PSText>
  </ScreenContainer>
);

export default SplashScreen;
