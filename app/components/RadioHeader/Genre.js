import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Left,
  Body,
  Right
} from 'native-base';
import {Arrow} from './Arrow';
import * as Animatable from 'react-native-animatable';
import {genres} from '../../globals';

const GENRES = ['ROCK', 'PARTY', 'POP', 'CLASSIC'];

class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: '',
      genreIndex: 0,
      genre: Object.keys(genres[0])[0]
    };

    this._setDirection = this._setDirection.bind(this);
  }

  _setDirection(direction) {
    this.setState({
      direction: direction,
      genreIndex: this._getGenreIndex(direction)
    });
    direction == 'left' ? this.refs.view.fadeInLeft(500) : this.refs.view.fadeInRight(500);
  }

  _getGenreIndex(direction) {
    let genreIndex = this.state.genreIndex;

    if (direction === 'left') {
      if (genreIndex > 0) {
        genreIndex = genreIndex - 1;
      } else {
        genreIndex = genres.length - 1;
      }
    } else if (direction === 'right') {
      if (genreIndex < genres.length - 1) {
        genreIndex = genreIndex + 1;
      } else {
        genreIndex = 0;
      }
    }
    return genreIndex;
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.genre}>
          <Left>
            <Arrow iconName="chevron-left" direction='left' setDirection={this._setDirection}/>
          </Left>
          <Body>
            <Text style={{fontSize: 18, color: '#393939'}}>
              {Object.keys(genres[this.state.genreIndex])[0]}
            </Text>
          </Body>
          <Right>
            <Arrow iconName="chevron-right" direction='right' setDirection={this._setDirection}/>
          </Right>
        </View>
        <Body>
        {/*<Animatable.Image*/}
          {/*ref="view"*/}
          {/*style={{height: 50, width: 50}}*/}
          {/*source={{uri: Object.values(genres[this.state.genreIndex])[0]}}*/}
        {/*/>*/}
        </Body>
      </View>
    );
  }
}

const styles = {
  genre: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 24,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5
  }
};

export {Genre};