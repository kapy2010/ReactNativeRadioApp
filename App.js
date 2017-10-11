import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Left,
  Right
} from 'native-base';
import {RadioHeader} from './app/components/RadioHeader';
import {RadioFooter} from './app/components/RadioFooter';
import {RectangleBar} from './app/components/RectangleBar';
import LinearGradient from 'react-native-linear-gradient';

const window = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };

    this._playDigitalWaves = this._playDigitalWaves.bind(this);
    this._stopDigitalWaves = this._stopDigitalWaves.bind(this);
  }

  _playDigitalWaves() {
    this.setState({
      play: true
    });
  }

  _stopDigitalWaves() {
    this.setState({
      play: false
    });
  }

  _returnAnimationDurations(min, max) {
    return Math.random() * (max - min) + min;
  }

  _returnBars() {
    return [...Array(Math.floor(window.width / 9))].map((_, i) => {
      return <RectangleBar
        key={i}
        windowHeight={window.height}
        play={this.state.play}
        duration={this._returnAnimationDurations(500, 2000)}
      />;
    });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <RadioHeader/>
        </Header>
        <Content>
          <LinearGradient colors={['#A67EC0', '#B889C7', '#E7A8DD']} style={styles.linearGradient}>
          <View style={styles.body}>
            {this._returnBars()}
          </View>
          </LinearGradient>
        </Content>
        <Footer style={styles.footer}>
          <RadioFooter
            playDigitalWaves={this._playDigitalWaves}
            stopDigitalWaves={this._stopDigitalWaves}
          />
        </Footer>
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
  },
  footer: {
    height: 180,
    backgroundColor: '#FBFBFB'
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: window.height - 360
  }
});
