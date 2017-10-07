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
    color: '#393939',
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold'
  },
  onlineMusic: {
    color: '#BDBDBD',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 5
  }
};

export {RadioHeader};