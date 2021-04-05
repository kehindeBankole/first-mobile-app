import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  FlatList,
  ListView,
  Alert,
  ImageBackground,
  StatusBar,
} from 'react-native';

const App = () => {
  let data = [
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    // {key: 'James'},
    // {key: 'Joel'},
    // {key: 'John'},
    // {key: 'Jillian'},
    // {key: 'Jimmy'},
    // {key: 'Julie'},
  ];
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('./assets/665373.jpg')}
        style={style.imagebg}
      />
      <View style={style.carContainer}>
        <View style={style.titles}>
          <Text style={style.head}>model s</Text>
          <Text></Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    height: '100%',
    width: '100%',
  },
  titles: {
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
  },
  head: {
    fontSize: 40,
    fontWeight: '500',
  },
  imagebg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});

export default App;
