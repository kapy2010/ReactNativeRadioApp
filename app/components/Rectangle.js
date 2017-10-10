import React, {Component} from 'react';
import {View, Animated, Easing} from 'react-native';

class Rectangle extends Component {
  constructor(props) {
    super(props);
    this.primAnimatedValue = new Animated.Value(0);
    this.secAnimatedValue = new Animated.Value(0);

    this.state = {
      primHeight: 0,
      secHeight: 0,
      toValue: 0,
      primHeight: 0,
      secHeight: 0,
      primPrevPosition: 0,
      secPrevPosition: 0
    };

  }

  componentDidMount() {
    let primHeight = Math.floor(Math.random() * (this.props.windowHeight - 360));
    const limit = (this.props.windowHeight - 360) * 0.7;

    let secHeight = 0;

    if (primHeight > limit) {
      secHeight = primHeight - limit;
      primHeight = limit;
    }

    this.setState({
      primHeight: primHeight,
      secHeight: secHeight
    });
  }

  componentWillReceiveProps() {
    if (this.props.play) {
      this._animate();
    }
  }

  _animate() {
    this.primAnimatedValue.setValue(0);
    this.secAnimatedValue.setValue(0);
    this.setState({
      toValue: Math.random(),
      primPrevPosition: this.state.toValue * this.state.primHeight,
      secPrevPosition: this.state.toValue * this.state.secHeight
    });
    Animated.parallel([
      Animated.timing(this.primAnimatedValue, {
        toValue: this.state.toValue,
        duration: this.props.duration,
        easing: Easing.linear
      }),
      Animated.timing(this.secAnimatedValue, {
        toValue: this.state.toValue,
        duration: this.props.duration,
        easing: Easing.linear
      })
    ]).start(() => this._animate());
  }

  render() {
    const whiteBarHeight = this.primAnimatedValue.interpolate({
      inputRange: [0, this.state.toValue / 2, this.state.toValue],
      outputRange: [this.state.primPrevPosition, this.state.primHeight, this.state.toValue * this.state.primHeight]
    });

    const pinkBarHeight = this.secAnimatedValue.interpolate({
      inputRange: [0, this.state.toValue / 2, this.state.toValue],
      outputRange: [this.state.secPrevPosition, this.state.secHeight, this.state.toValue * this.state.secHeight]
    });

    return (
      <View>
        <Animated.View style={{
          width: 3,
          height: pinkBarHeight,
          backgroundColor: '#D1D3DF',
          marginLeft: 6
        }}/>
        <Animated.View style={{
          width: 3,
          height: whiteBarHeight,
          backgroundColor: 'white',
          marginLeft: 6
        }}/>
      </View>

    );
  }

}

export {Rectangle};