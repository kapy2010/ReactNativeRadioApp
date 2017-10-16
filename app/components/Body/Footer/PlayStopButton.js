import React, {Component} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Button} from "./Button";

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
    this.refs.playView.zoomOut(150);
    this.refs.stopView.zoomIn(150);
  }

  _stop() {
    this.props.stopSong();
    this._toggleButtons();
    this.refs.playView.zoomIn(150);
    this.refs.stopView.zoomOut(150);
  }

  render() {
    return (
      <View style={styles.playStop}>
        <Animatable.View ref="playView">
          {this.state.play && <Button name="play" onPress={this._play}/>}
        </Animatable.View>
        <Animatable.View ref="stopView">
          {this.state.stop && <Button name="stop" onPress={this._stop}/>}
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
};

export {PlayStopButton};