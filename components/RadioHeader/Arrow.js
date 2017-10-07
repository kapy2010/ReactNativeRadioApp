import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

class Arrow extends Component {
  constructor(props) {
    super(props);

    this._animate = this._animate.bind(this);
  }

  _animate() {
    this.props.direction === 'left' ? this.refs.view.fadeInLeft(200) : this.refs.view.fadeInRight(200);
    this.props.setDirection(this.props.direction);
  }

  render() {
    return (
      <Animatable.View ref="view">
        <TouchableOpacity onPress={this._animate}>
          <Icon name={this.props.iconName} color='#393939' size={40}/>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

export {Arrow};