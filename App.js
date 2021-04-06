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
  Dimensions,
} from 'react-native';
import Car from './components/car/Car';
const App = () => {
  let da = [
    {name: 'model S', imagebg: require('./assets/tesla.jpeg')},
    {name: 'model X', imagebg: require('./assets/21618.jpg')},
    {name: 'model Z', imagebg: require('./assets/2038607.jpg')},
  ];
  return (
    <View style={style.container}>
      <FlatList
        data={da}
        renderItem={({item}) => <Car img={item.imagebg} bg="red" head={item.name}/>}
        snapToAlignment={'start'}
        decelerationRate={`fast`}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
