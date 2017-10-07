import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  Left,
  Body,
  Right
} from 'native-base';
import {Arrow} from './Arrow';
import * as Animatable from 'react-native-animatable';

const GENRES = ['ROCK', 'PARTY', 'POP', 'CLASSIC'];

class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: '',
      genreIndex: 0,
      genre: GENRES[0]
    };

    this._setDirection = this._setDirection.bind(this);
  }


  _setDirection(direction) {
    this.setState({
      direction: direction,
      genreIndex: this._getGenreIndex(direction)
    });
    direction == 'left' ? this.refs.view.fadeInLeft(300) : this.refs.view.fadeInRight(300);
  }

  _getGenreIndex(direction) {
    let genreIndex = this.state.genreIndex;

    if (direction === 'left') {
      if (genreIndex > 0) {
        genreIndex = genreIndex - 1;
      } else {
        genreIndex = GENRES.length - 1;
      }
    } else if (direction === 'right') {
      if (genreIndex < GENRES.length - 1) {
        genreIndex = genreIndex + 1;
      } else {
        genreIndex = 0;
      }
    }
    return genreIndex;
  }

  render() {
    return (
      <View style={styles.genre}>
        <Left>
          <Arrow iconName="chevron-left" direction='left' setDirection={this._setDirection}/>
        </Left>
        <Body>
          <Animatable.Text ref="view" style={{fontSize: 18, color: '#393939'}}>
            {GENRES[this.state.genreIndex]}
          </Animatable.Text>
        </Body>
        <Right>
          <Arrow iconName="chevron-right" direction='right' setDirection={this._setDirection}/>
        </Right>
      </View>
    );
  }
}

const styles = {
  genre: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5
  }
};

export {Genre};