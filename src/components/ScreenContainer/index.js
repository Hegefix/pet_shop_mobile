import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import types from 'prop-types';
import styles from './styles';

const ScreenContainer = ({ children, style = null, withKeyboard = false }) =>
  withKeyboard ? (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={[styles.container, style]}
        behavior="padding"
        enabled>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
ScreenContainer.propTypes = {
  withKeyboard: types.bool,
};

export default ScreenContainer;
