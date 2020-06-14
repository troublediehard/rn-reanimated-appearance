/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

const IMAGE_SOURCE = require('./assets/background.jpg')

const App: () => React$Node = () => {
  return (
    <ImageBackground source={IMAGE_SOURCE} style={styles.container} >
      <TouchableWithoutFeedback>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
            <Text style={styles.buttonText}>SHOP NOW</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  touchable: { flex: 1 },
  buttonContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f33184',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default App;
