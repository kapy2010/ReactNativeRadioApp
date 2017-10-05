import React, {Component} from 'react';
import {View, Text} from 'react-native';

class RadioHeader extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.radio}>RADIO</Text>
        <Text style={styles.onlineMusic}>ONLINE MUSIC</Text>
        <Text style={styles.genre}>GENRE</Text>
      </View>
    );
  }
}

const styles = {
  radio: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  onlineMusic: {
    textAlign: 'center',
    paddingTop: 5
  },
  genre: {
    textAlign: 'center',
    paddingTop: 50
  }
};

export {RadioHeader};