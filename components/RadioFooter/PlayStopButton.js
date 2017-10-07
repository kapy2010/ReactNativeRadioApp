import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

class PlayStopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePlay: true,
      toggleStop: false
    };

    this._play = this._play.bind(this);
    this._stop = this._stop.bind(this);
  }

  _toggleStates() {
    this.setState({
      togglePlay: !this.state.togglePlay,
      toggleStop: !this.state.toggleStop
    });
  }

  _play() {
    this._toggleStates();
    this.refs.playView.zoomOut(200);
    this.refs.stopView.zoomIn(200);
  }

  _stop() {
    this._toggleStates();
    this.refs.playView.zoomIn(200);
    this.refs.stopView.zoomOut(200);
  }

  render() {
    return (
      <View style={styles.playStop}>
        <Animatable.View ref="playView">
          {this.state.togglePlay && <TouchableOpacity onPress={this._play}>
            <Icon name="play" size={40} color='#393939'/>
          </TouchableOpacity>}
        </Animatable.View>
        <Animatable.View ref="stopView">
          {this.state.toggleStop && <TouchableOpacity onPress={this._stop}>
            <Icon name="stop" size={40} color='#393939'/>
          </TouchableOpacity>}
        </Animatable.View>
      </View>
    );
  }
}

const styles = {
  playStop: {
    paddingLeft: 20,
    paddingBottom: 10
  }
}
export {PlayStopButton};