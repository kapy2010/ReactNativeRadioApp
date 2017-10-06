import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class RadioFooter extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.statusBar}>Status Bar</Text>
        <View style={styles.statusBarTime}>
          <Left>
            <Text>0:01</Text>
          </Left>
          <Right>
            <Text>-2:49</Text>
          </Right>
        </View>
        <Text style={{textAlign: 'center'}}>TrackPlaying</Text>
        <View style={styles.playerControls}>
          <Left>
            <TouchableOpacity style={styles.playStop}>
              <Icon name="play" size={40}/>
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity style={styles.volume}>
              <Icon name="volume-up" size={40}/>
            </TouchableOpacity>
          </Right>
        </View>
      </View>
    );
  }
}

const styles = {
  statusBar: {
    textAlign: 'center'
  },
  statusBarTime: {
    flex: 1,
    flexDirection: 'row'
  },
  playerControls: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  playStop: {
    alignItems: 'flex-start',
    padding: 20,
    paddingBottom: 10
  },
  volume: {
    alignItems: 'flex-end',
    padding: 20,
    paddingBottom: 10
  }
};

export {RadioFooter};