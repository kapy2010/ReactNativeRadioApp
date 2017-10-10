import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PlayStopButton} from './RadioFooter/PlayStopButton';
import {StatusBar} from "./RadioFooter/StatusBar";

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
  }

  _stopSong() {
    this.setState({
      playStatusBar: false
    });
    this._stopDigitalWaves();
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
        <Text style={{textAlign: 'center'}}>TrackPlaying</Text>
        <View style={styles.playerControls}>
          <Left>
            <PlayStopButton
              playSong={this._playSong}
              stopSong={this._stopSong}
            />
          </Left>
          <Right>
            <TouchableOpacity style={styles.volume}>
              <Icon name="volume-up" size={40} color='#393939'/>
            </TouchableOpacity>
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
  }
};

export {RadioFooter};