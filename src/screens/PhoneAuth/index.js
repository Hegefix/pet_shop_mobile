import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, PSText } from '@components';
import styles from './styles';

const PhoneAuth = () => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <PSText>Phone auth</PSText>
      </View>
    </ScreenContainer>
  );
};

export default PhoneAuth;
