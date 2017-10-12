import React, {Component} from 'react';
import {View, Animated, Easing} from 'react-native';
import {FadeAnimation} from './FadeAnimation';

class RectangleBar extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);

    this.state = {
      show: false,
      primBarHeight: 0,
      secBarHeight: 0,
      toValue: 0,
      primBarPrevPos: 0,
      secBarPrevPos: 0
    };
  }

  componentWillReceiveProps(propsReceived) {
    if (propsReceived.play) {
      this.setState({show: true});
    } else {
      this.setState({show: false});
    }
  }

  componentDidMount() {
    this._animate();
    this._setBarHeights();
  }

  _setBarHeights() {
    let primBarHeight = Math.floor(Math.random() * (this.props.windowHeight - 360));
    const limit = (this.props.windowHeight - 360) * 0.7;
    let secBarHeight = 0;

    if (primBarHeight > limit) {
      secBarHeight = primBarHeight - limit;
      primBarHeight = limit;
    }

    this.setState({
      primBarHeight: primBarHeight,
      secBarHeight: secBarHeight
    });
  }

  _animate() {
    this.animatedValue.setValue(0);

    this.setState({
      toValue: Math.random(),
      primBarPrevPos: this.state.toValue * this.state.primBarHeight,
      secBarPrevPos: this.state.value * this.state.secBarHeight
    });

    Animated.timing(
      this.animatedValue,
      {
        toValue: this.state.toValue,
        duration: this.props.duration,
        easing: Easing.linear
      }
    ).start(() => this._animate());
  }


  render() {
    const {toValue, primBarPrevPos, primBarHeight, secBarPrevPos, secBarHeight, show} = this.state;

    const baseBarHeight = this.animatedValue.interpolate({
      inputRange: [0, toValue / 2, toValue],
      outputRange: [primBarPrevPos, primBarHeight, toValue * primBarHeight]
    });

    const topBarHeight = this.animatedValue.interpolate({
      inputRange: [0, toValue / 2, toValue],
      outputRange: [secBarPrevPos, secBarHeight, toValue * secBarHeight]
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