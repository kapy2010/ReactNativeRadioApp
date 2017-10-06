import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Left, Body, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class RadioHeader extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.radio}>RADIO</Text>
        <Text style={styles.onlineMusic}>ONLINE MUSIC</Text>
        <View style={styles.genre}>
          <Left>
            <TouchableOpacity>
              <Icon name="chevron-left" size={40}></Icon>
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{textAlign: 'center'}}>GENRE</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Icon name="chevron-right" size={40}></Icon>
            </TouchableOpacity>
          </Right>
        </View>
      </View>
    );
  }
}

const styles = {
  radio: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  onlineMusic: {
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 5
  },
  genre: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 10
  }
};

export {RadioHeader};