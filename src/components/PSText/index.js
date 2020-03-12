import React from 'react';
import { Text } from 'react-native';
import types from 'prop-types';
import styles from './styles';

const PSText = ({ children, style = null, ...props }) => (
  <Text {...props} style={[styles.defaultText, style]}>
    {children}
  </Text>
);
PSText.propTypes = {
  ...Text.propTypes,
  style: types.oneOfType([types.object, types.array]),
};

export default PSText;
