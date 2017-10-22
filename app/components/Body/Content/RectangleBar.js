import React, {Component} from 'react';
import {View, Animated, Easing, NativeModules} from 'react-native';
import {FadeAnimation} from './FadeAnimation';

var AudioPlayer = NativeModules.AudioPlayer;

class RectangleBar extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);

    this.state = {
      show: false,
      defaultBarHeight: this.props.defaultBarHeight,
      primBarHeight: 0,
      secBarHeight: 0
    };

    this._setPower = this._setPower.bind(this);
  }

  componentDidMount() {
    this._animate();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(propsReceived) {
    if (propsReceived.play) {
      this.setState({show: true});
      this.interval = setInterval(this._setPower, 500);
    } else {
      clearInterval(this.interval);
      this.setState({show: false});
    }
  }

  _setPower() {
    AudioPlayer.getPowerLevel().then(powerLevel => {
      let primBarHeight = Math.floor(powerLevel * (this.props.windowHeight - 420));
      const limit = (this.props.windowHeight - 420) * 0.8;
      let secBarHeight = 0;

      if (primBarHeight > limit) {
        secBarHeight = primBarHeight - limit;
        primBarHeight = limit;
      }

      this.setState({
        primBarHeight: primBarHeight,
        secBarHeight: secBarHeight
      });
    });
  }


  _animate() {
    this.animatedValue.setValue(0);

    this.setState({
    });

    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: this.props.duration,
        easing: Easing.linear
      }
    ).start(() => this._animate());
  }


  render() {
    const {primBarHeight, secBarHeight, show, defaultBarHeight} = this.state;

    const baseBarHeight = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [defaultBarHeight, primBarHeight, defaultBarHeight]
    });

    const topBarHeight = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, secBarHeight, 0]
    });

    return (
      <FadeAnimation visible={show}>
        <View>
          <Animated.View style={{
            width: 3,
            height: topBarHeight,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            marginLeft: 6
          }}/>
          <Animated.View style={{
            width: 3,
            height: baseBarHeight,
            backgroundColor: '#f5f5f5',
            marginLeft: 6,
            shadowColor: '#D1D3DF',
            shadowOffset: {width: 8, height: 8},
            shadowOpacity: 0.4,
          }}/>
        </View>
      </FadeAnimation>
    );
  }

}

export {RectangleBar};