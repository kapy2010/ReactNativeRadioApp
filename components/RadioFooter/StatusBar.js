import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Left, Right} from 'native-base';
import Slider from "react-native-slider";

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      songTime: 180,
      timeElapsed: '0:00',
      timeRemaining: '3:00'
    };
  }

  _calcTime(value) {
    const timeElapsed = Math.round(this.state.songTime * value / 100);
    const timeRemaining = Math.round(this.state.songTime - this.state.songTime * value / 100);
    this.setState({
      timeElapsed: this._returnTime(timeElapsed),
      timeRemaining: this._returnTime(timeRemaining)
    });
  }

  _returnTime(time) {
    const min = Math.floor(time / 60);
    const sec = time - min * 60;
    return this._str_pad_left(min, '', 2) + ':' + this._str_pad_left(sec, '0', 2);
  }

  _str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  _onSliderChange(value) {
    this.setState({
      value: value
    }, this._calcTime(value));
  }

  render() {
    return (
      <View style={styles.slider}>
        <Slider
          style={7}
          value={this.state.value}
          onValueChange={value => this._onSliderChange(value)}
          minimumTrackTintColor='#E5A0DB'
          maximumTrackTintColor='#D1D3DF'
          thumbTintColor='#393939'
          maximumValue={100}
        />
        <View style={styles.statusBarTime}>
          <Left>
            <Text>{this.state.timeElapsed}</Text>
          </Left>
          <Right>
            <Text>-{this.state.timeRemaining}</Text>
          </Right>
        </View>
      </View>
    );
  }
}

const styles = {
  slider: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  statusBarTime: {
    flex: 1,
    flexDirection: 'row',
  }
}

export {StatusBar};