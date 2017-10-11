import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Genre} from "./RadioHeader/Genre";

class RadioHeader extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.radio}>RADIO</Text>
        <Text style={styles.onlineMusic}>ONLINE MUSIC</Text>
        <Genre/>
      </View>
    );
  }
}

const styles = {
  radio: {
    color: '#6D6D6D',
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 34,
    letterSpacing: 2
  },
  onlineMusic: {
    color: '#B3B3B4',
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 3,
    fontWeight: 'bold'
  }
};

export {RadioHeader};