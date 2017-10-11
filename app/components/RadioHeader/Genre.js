import React, {Component} from 'react'
import {
  Text,
  View,
  Image
} from 'react-native';
import {
  Body
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
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

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Swiper showsButtons
                prevButton={<Icon name="chevron-left" color='#393939' size={28}/>}
                nextButton={<Icon name="chevron-right" color='#393939' size={28}/>}
                showsPagination={false}>
          {this._returnThumbnails()}
        </Swiper>
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
    fontSize: 16,
    color: '#393939',
    textAlign: 'center',
    paddingBottom: 10
  }
};

export {Genre};