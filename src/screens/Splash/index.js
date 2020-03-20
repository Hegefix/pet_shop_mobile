import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ScreenContainer, PSText } from '@components';
import { authBootsrapAsync } from '@actions';
import styles from './styles';

const SplashScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authBootsrapAsync());
  }, [dispatch]);

  return (
    <ScreenContainer style={styles.container}>
      <PSText style={styles.titleText}>PET SHOP</PSText>
    </ScreenContainer>
  );
};

export default SplashScreen;
