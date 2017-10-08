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
      play: true
    };

    this._togglePlay = this._togglePlay.bind(this);
  }

  _togglePlay() {
    this.setState({
      play: !this.state.play
    });
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <StatusBar play={this.state.play}/>
        <Text style={{textAlign: 'center'}}>TrackPlaying</Text>
        <View style={styles.playerControls}>
          <Left>
            <PlayStopButton togglePlay={this._togglePlay}/>
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