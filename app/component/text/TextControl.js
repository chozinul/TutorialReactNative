import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      name: ''
    }
  }

  onTextChange(value){
    this.setState({
      name: value
    })
  }

  render() {
    const { name } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Name: {name}</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={(name) => this.setState({name})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FC00',
    padding: 8,
    flexDirection: 'row'
  },
  textInput: {
    backgroundColor: '#FA8',
    flex: 1
  },
  text: {
    backgroundColor: '#8FA',
    flex: 1
  }


});
