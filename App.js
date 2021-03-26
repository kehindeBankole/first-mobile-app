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
} from 'react-native';

function Ad({name, click}) {
  return (
    <View>
      <Text> {name}</Text>
      {/* <Button onPress={click}  title="click" color="blue"/> */}
    </View>
  );
}

const App = () => {
  const [state, setstate] = useState(
    'his is a text component, created using state data. It will change or updated on clicking it.',
  );
  const [password, setpassword] = useState('');
  const [visible, setvisible] = useState(false);
  updateState = () => setstate('The state is updated');
  const handleToggle = () => setvisible(!visible);
  let imagePath = {
    uri:
      'https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/165130603_10158892316593145_5711464249738470901_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=825194&_nc_eui2=AeEX3uYMLg6_M1bvS9WxAp3QoPGpHoxCHg6g8akejEIeDlyqvvgcH-T_rw5S4hvt4c-ryrSTd4clXwSR_b45w3wO&_nc_ohc=uPDDsq9tO2gAX_RTr_j&_nc_ht=scontent.flos2-1.fna&oh=a799e1b5a8fd0b4a3be0d520862876dc&oe=60809521',
  };
  return (
    <View style={style.container}>
      {/* <Ad name="bankole kehinde" /> */}
      <TextInput
        secureTextEntry={visible}
        style={{
          width: 300,
          height: 50,
          backgroundColor: '#a7a6a9',
          color: 'white',
          fontSize: 20,
          // marginTop: 50,
        }}
      />
      <Button
        style={{flex: 1}}
        onPress={handleToggle}
        title="show?"
        color="black"
      />
      {/* <TouchableOpacity onPress={handleToggle}>
        <Text style={{fontSize: 20}}>show or hide password ?</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default App;
