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
import {Rectangle} from './app/components/Rectangle';

const window = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true
    };

    this._togglePlay = this._togglePlay.bind(this);
  }

  _togglePlay() {
    this.setState({
      play: !this.state.play
    });
  }

  _returnAnimationDurations(min, max) {
    return Math.random() * (max - min) + min;
  }

  render() {
    let waves = [...Array(Math.floor(window.width / 9))].map((_, i) => {
      return <Rectangle
        key={i}
        windowHeight={window.height}
        play={this.state.play}
        duration={this._returnAnimationDurations(1000, 2000)}
      />;
    });
    return (
      <Container>
        <Header style={styles.header}>
          <RadioHeader/>
        </Header>
        <Content style={{backgroundColor: '#D89FD6'}}>
          <View style={styles.body}>
            {waves}
          </View>
        </Content>
        <Footer style={styles.footer}>
          <RadioFooter toggleDigitalWaves={this._togglePlay}/>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    backgroundColor: '#FBFBFB'
  },
  footer: {
    height: 180,
    backgroundColor: '#FBFBFB'
  },
  body: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: window.height - 360
  }
});
