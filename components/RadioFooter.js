import React, {Component} from 'react';
import {View, Text} from 'react-native';

class RadioFooter extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.timeLine}>TimeLine</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{flex: 3, alignItems: 'flex-start'}}>0:01</Text>
          <Text style={{alignItems: 'flex-end'}}>-2:49</Text>
        </View>
        <Text style={{textAlign: 'center'}}>TrackPlaying</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={{flex: 3, alignItems: 'flex-start'}}>Play</Text>
          <Text style={{alignItems: 'flex-end'}}>Volume</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  timeLine: {
    textAlign: 'center'
  }
};

export {RadioFooter};