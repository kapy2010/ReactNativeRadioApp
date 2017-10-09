import React, {Component} from 'react';
import {View, Animated, Easing} from 'react-native';

class Rectangle extends Component {
  constructor(props) {
    super(props);
    this.primAnimatedValue = new Animated.Value(0);
    this.secAnimatedValue = new Animated.Value(0);

    this.state = {
      primHeight: 0,
      secHeight: 0
    };

    this._animate = this._animate.bind(this);
  }

  componentDidMount() {

  }

  componentWillReceiveProps() {
    if (this.props.play) {
      this._animate();
    }
  }

  _animate() {
    this.primAnimatedValue.setValue(0);
    this.secAnimatedValue.setValue(0);
    Animated.parallel([
      Animated.timing( this.primAnimatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }),
      Animated.timing( this.secAnimatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      })
    ]).start(() => this._animate());
  }

  _setBarHeights() {
    let primHeight = Math.floor(Math.random() * (this.props.windowHeight - 360));
    const limit=(this.props.windowHeight - 360) * 0.7;

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

  render() {
    let primHeight = Math.floor(Math.random() * (this.props.windowHeight - 360));
    const limit=(this.props.windowHeight - 360) * 0.7;

    let secHeight = 0;

    if (primHeight > limit) {
      secHeight = primHeight - limit;
      primHeight = limit;
    }

    let height1 = this.primAnimatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, primHeight, 0]
    });

    let height2 = this.secAnimatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, secHeight, 0]
    });

    return(
      <View>
        <Animated.View style={{
          width: 5,
          height: height2,
          backgroundColor: '#D1D3DF',
          marginLeft: 5
        }}/>
        <Animated.View style={{
          width: 5,
          height: height1,
          backgroundColor: 'white',
          marginLeft: 5
        }}/>
      </View>

    );
  }

}

export {Rectangle};