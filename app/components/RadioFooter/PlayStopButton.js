import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

class PlayStopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true,
      stop: false
    };

    this._play = this._play.bind(this);
    this._stop = this._stop.bind(this);
  }

  _toggleButtons() {
    this.setState({
      play: !this.state.play,
      stop: !this.state.stop
    });
  }

  _play() {
    this.props.playSong();
    this._toggleButtons();
    this.refs.playView.zoomOut(200);
    this.refs.stopView.zoomIn(200);
  }

  _stop() {
    this.props.stopSong();
    this._toggleButtons();
    this.refs.playView.zoomIn(200);
    this.refs.stopView.zoomOut(200);
  }

  render() {
    return (
      <View style={styles.playStop}>
        <Animatable.View ref="playView">
          {this.state.play && <TouchableOpacity onPress={this._play}>
            <Icon name="play" size={40} color='#393939'/>
          </TouchableOpacity>}
        </Animatable.View>
        <Animatable.View ref="stopView">
          {this.state.stop && <TouchableOpacity onPress={this._stop}>
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