import React, {Component} from 'react'
import {
  Text,
  View,
  Image
} from 'react-native';
import {
  Body
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'
import {genres} from "../../globals";

class Genre extends Component {

  _returnThumbnails() {
    return genres.map(genre => {
      return <View key={genre} style={styles.genre}>
        <Body>
        <Image
          key={Object.values(genre)[0]}
          style={{height: 40, width: 40}}
          source={{uri: Object.values(genre)[0]}}
        />
        </Body>
        <Text
          key={Object.keys(genre)[0]}
          style={styles.genreText}>
          {Object.keys(genre)[0]}
        </Text>
      </View>
    });
  }

  _getPrevButton() {
    return <View>
      <View style={styles.circle}/>
      <Icon name="ios-arrow-back" color='#606060' size={34} style={{paddingTop: 6, paddingLeft: 15}}/>
    </View>;
  }

  _getNextButton() {
    return <View>
      <View style={styles.circle}/>
      <Icon name="ios-arrow-forward" color='#606060' size={34} style={{paddingTop: 6, paddingLeft: 19}}/>
    </View>;
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', paddingRight: 16}}>
        <Body>
        <Swiper showsButtons
                width={340}
                prevButton={this._getPrevButton()}
                nextButton={this._getNextButton()}
                showsPagination={false}>
          {this._returnThumbnails()}
        </Swiper>
        </Body>
      </View>
    );
  }
}

const styles = {
  genre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  genreText: {
    fontSize: 14,
    color: '#7C7C7D',
    textAlign: 'center',
    paddingBottom: 10,
    letterSpacing: 5,
    fontWeight: 'bold'
  },
  circle: {
    width: 47,
    height: 47,
    borderRadius: 47/2,
    backgroundColor: '#EEEFF3',
    position: 'absolute'
  }
};

export {Genre};