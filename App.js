import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  Header
} from 'native-base';
import {RadioHeader} from "./app/components/Header/RadioHeader";
import {RadioBody} from './app/components/Body/RadioBody';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <RadioHeader/>
        </Header>
        <RadioBody/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 210,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    backgroundColor: '#FBFBFB'
  }
});
