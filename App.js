/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const IMAGE_SOURCE = require('./assets/background.jpg')
const { width, height } = Dimensions.get('window');

const App: () => React$Node = () => {
  return (
    <ImageBackground source={IMAGE_SOURCE} style={styles.container} >
      <TouchableWithoutFeedback style={styles.container}>
        <View>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
            <Text style={styles.buttonText}>SHOP NOW</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
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
