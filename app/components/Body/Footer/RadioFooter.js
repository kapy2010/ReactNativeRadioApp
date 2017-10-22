import React, {Component} from 'react';
import {View, Text, NativeModules} from 'react-native';
import {Left, Right} from 'native-base';
import {PlayStopButton} from './PlayStopButton';
import {StatusBar} from "./StatusBar";
import {Button} from './Button';

var AudioPlayer = NativeModules.AudioPlayer;

class RadioFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatusBar: false
    };

    this._playSong = this._playSong.bind(this);
    this._stopSong = this._stopSong.bind(this);
    this._stopDigitalWaves = this._stopDigitalWaves.bind(this);
  }

  _playSong() {
    this.setState({
      playStatusBar: true
    });
    this.props.playDigitalWaves();
    AudioPlayer.play();
  }

  _stopSong() {
    this.setState({
      playStatusBar: false
    });
    this._stopDigitalWaves();
    AudioPlayer.stop();
  }

  _stopDigitalWaves() {
    this.props.stopDigitalWaves();
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <StatusBar
          play={this.state.playStatusBar}
          stopDigitalWaves={this._stopDigitalWaves}
        />
        <Text style={styles.trackPlaying}>Tycho - Awake</Text>
        <View style={styles.playerControls}>
          <Left>
            <PlayStopButton
              playSong={this._playSong}
              stopSong={this._stopSong}
            />
          </Left>
          <Right style={styles.volume}>
            <Button name="volume-up" onPress={null}/>
          </Right>
        </View>
      </View>
    );
  }
}

const styles = {
  playerControls: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  volume: {
    paddingRight: 20,
    paddingBottom: 10
  },
  trackPlaying: {
    textAlign: 'center',
    color: '#969696'
  }
};

export {RadioFooter};