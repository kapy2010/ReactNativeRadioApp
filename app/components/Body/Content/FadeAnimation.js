import React, {Component} from 'react';
import * as Animatable from 'react-native-animatable';

class FadeAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
  };

  componentWillReceiveProps() {
    this.setState({ visible: this.props.visible });
    this.props.visible ? this.refs.view.fadeInUp : this.refs.view.fadeOutDown;
  }

  render() {
    return (
      <Animatable.View ref="view" style={{flex:1}}>
        {this.state.visible ? this.props.children : null}
      </Animatable.View>
    );
  }
}

export {FadeAnimation};