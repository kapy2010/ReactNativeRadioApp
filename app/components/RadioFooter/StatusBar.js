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

    this._updateStatus = this._updateStatus.bind(this);
  }

  _updateStatus() {
    if (Math.floor(this.state.value) === 100) {
      clearInterval(this.interval);
      this.props.stopDigitalWaves();
    }

    this.state.value < 100 ?
      this._onSliderChange(this.state.value + 1/1.8) : clearInterval(this.interval);
  }

  componentWillReceiveProps(propsReceived) {
    propsReceived.play ?
      this.interval = setInterval(this._updateStatus, 1000) : clearInterval(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
          thumbStyle={{width: 10, height: 10}}
          trackStyle={{height: 3, backgroundColor: '#D1D3DF'}}
          value={this.state.value}
          onValueChange={value => this._onSliderChange(value)}
          minimumTrackTintColor='black'
          thumbTintColor='#393939'
          maximumValue={100}
        />
        <View style={styles.statusBarTime}>
          <Left>
            <Text>{this.state.timeElapsed}</Text>
          </Left>
          <Right>
            <Text>- {this.state.timeRemaining}</Text>
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
};

export {StatusBar};