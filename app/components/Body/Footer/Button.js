import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableWithoutFeedback} from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {volumeButtonColor: '#D1D3DF'};

    this._handlePressIn = this._handlePressIn.bind(this);
    this._handlePressOut = this._handlePressOut.bind(this);
  }

  _handlePressIn() {
    this.setState({volumeButtonColor: '#E5A0DB'});
  }

  _handlePressOut() {
    this.setState({volumeButtonColor: '#D1D3DF'});
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
        onPressIn={this._handlePressIn}
        onPressOut={this._handlePressOut}>
        <Icon
          name={this.props.name}
          size={40}
          color={this.state.volumeButtonColor}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export {Button};