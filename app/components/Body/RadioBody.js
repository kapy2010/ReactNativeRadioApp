import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {Content, Footer} from 'native-base';
import {returnRandomBetween} from "../../globals";
import {RadioFooter} from "./Footer/RadioFooter";
import {RectangleBar} from "./Content/RectangleBar";
import LinearGradient from 'react-native-linear-gradient';

const window = Dimensions.get('window');

const defaultBarHeights = [...Array(Math.floor(window.width / 10))].map((_, i) => {
  return returnRandomBetween(0.2, 0.25) * (window.height - 360);
});

class RadioBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digitalWaves: false
    };

    this._playDigitalWaves = this._playDigitalWaves.bind(this);
    this._stopDigitalWaves = this._stopDigitalWaves.bind(this);
  }

  _playDigitalWaves() {
    this.setState({
      digitalWaves: true
    });
  }

  _stopDigitalWaves() {
    this.setState({
      digitalWaves: false
    });
  }

  _returnBars() {
    return [...Array(Math.floor(window.width / 10))].map((_, i) => {
      return <RectangleBar
        key={i}
        windowHeight={window.height}
        defaultBarHeight={defaultBarHeights[i]}
        play={this.state.digitalWaves}
        duration={returnRandomBetween(1000, 1500)}
      />;
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
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
      </View>
    );
  }
}

const styles = {
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
};

export {RadioBody};