import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> This is Login Screen </Text>
        <Text style={styles.subtitle}> {this.props.subtitle} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 18,
  }
});
