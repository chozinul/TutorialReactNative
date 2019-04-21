import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Text from './app/component/text/TextControl'
import Header from './app/component/header/Header'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Text/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
});
