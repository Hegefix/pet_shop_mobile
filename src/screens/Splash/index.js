import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScreenContainer, PSText } from '@components';
import { authBootsrapAsync } from '@actions';
import styles from './styles';

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isInitialized = useSelector(state => state.auth.isInitialized);
  const user = useSelector(state => state.auth.user);
  console.log('aaa', isInitialized, user);

  useEffect(() => {
    dispatch(authBootsrapAsync());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialized && !user) {
      navigation.replace('PhoneAuth');
    }
  }, [isInitialized, user, navigation]);

  return (
    <ScreenContainer style={styles.container}>
      <PSText style={styles.titleText}>PET SHOP</PSText>
    </ScreenContainer>
  );
};

export default SplashScreen;
