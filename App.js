import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Container,
  Header,
  Title,
  Body,
  Content,
  Footer,
  Left,
  Right
} from 'native-base';
import {RadioHeader} from './components/RadioHeader';
import {RadioFooter} from './components/RadioFooter';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <RadioHeader/>
        </Header>
        <Content></Content>
        <Footer style={styles.footer}>
          <RadioFooter/>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2
  },
  footer: {
    height: 180
  }
});
