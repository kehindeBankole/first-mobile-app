import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
  FlatList,
} from 'react-native';
export default function Car(props) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={props.img} style={styles.imagebg} />

      <View style={{padding: 10}}>
        <View style={styles.titles}>
          <Text style={styles.head}>{props.head}</Text>
          <Text></Text>
        </View>
        <View style={{position: 'relative'}}>
          <Pressable
            style={{
              backgroundColor: `${props.bg}`,
              height: 50,
              width: '100%',
              borderRadius: 25,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={styles.btntext}>custom order</Text>
          </Pressable>
          <Pressable
          onPress={()=>console.log("12")}
            style={{
              backgroundColor: `${props.bg}`,
              height: 50,
              width: '100%',
              borderRadius: 25,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={styles.btntext}>custom order</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
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
  btntext: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
