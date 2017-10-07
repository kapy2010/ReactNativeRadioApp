import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PlayStopButton} from './RadioFooter/PlayStopButton';
import {StatusBar} from "./RadioFooter/StatusBar";

class RadioFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <StatusBar/>
        <Text style={{textAlign: 'center'}}>TrackPlaying</Text>
        <View style={styles.playerControls}>
          <Left>
            <PlayStopButton/>
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