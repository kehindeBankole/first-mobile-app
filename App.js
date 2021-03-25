import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  state = {
    myState:
      'This is a text component, created using state data. It will change or updated on clicking it.',
  };
  updateState = () => this.setState({myState: 'The state is updated'});
  render() {
    return (
      <View style={style.container}>
        <View style={style.blue}>
          <Text>Hello</Text>
        </View>
        <View style={style.white}>
          <Text>white</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  blue: {
    backgroundColor: 'blue',
    flex: 1,
  },
  white: {
    backgroundColor: 'white',
    flex: 1,
  }
});
