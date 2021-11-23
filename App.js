// In App.js in a new project
import React, {useEffect} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import langData from '../bsapp/src/lang/config.json';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

function HomeScreen({navigation}) {
  let state = {
    lang: 0,
    word: langData.kor,
    style1: styles.buttonEng,
    style2: styles.buttonKor,
    style1T: styles.buttonEngT,
    style2T: styles.buttonKorT,
  };

  const [message, setMessage] = React.useState(state);

  const setKor = () => {
    setMessage({
      lang: 0,
      word: langData.kor,
      style1: styles.buttonEng,
      style2: styles.buttonKor,
      style1T: styles.buttonEngT,
      style2T: styles.buttonKorT,
    });
  };

  const setEng = () => {
    setMessage({
      lang: 1,
      word: langData.eng,
      style1: styles.buttonKor,
      style2: styles.buttonEng,
      style1T: styles.buttonKorT,
      style2T: styles.buttonEngT,
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../bsapp/src/images/main_bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.item1}>
          <TouchableHighlight onPress={setEng} style={message.style1}>
            <Text style={message.style1T}>ENG</Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={setKor} style={message.style2}>
            <Text style={message.style2T}>한국어</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item2}>
          <Text style={styles.title}>부산대학교 대학생활원</Text>
          <Text style={styles.title2}>PUSAN NATIONAL UNIVERSITY DORMITORY</Text>
        </View>

        <View style={styles.item3}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Push', {name: message.word.main_title1})
            }
            style={styles.button1}>
            <ImageBackground
              source={require('../bsapp/src/images/icon1.png')}
              style={styles.buttonIcon1}>
              <Text style={styles.buttonText}>{message.word.main_title1}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Menu', {name: message.word.main_title2})
            }
            style={styles.button1}>
            <ImageBackground
              source={require('../bsapp/src/images/icon2.png')}
              style={styles.buttonIcon2}>
              <Text style={styles.buttonText}>{message.word.main_title2}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.item4}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Noti', {name: message.word.main_title3})
            }
            style={styles.button2}>
            <ImageBackground
              source={require('../bsapp/src/images/icon3.png')}
              style={styles.buttonIcon3}>
              <Text style={styles.buttonText}>{message.word.main_title3}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Rule', {name: message.word.main_title4})
            }
            style={styles.button2}>
            <ImageBackground
              source={require('../bsapp/src/images/icon4.png')}
              style={styles.buttonIcon4}>
              <Text style={styles.buttonText}>{message.word.main_title4}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Inquireis', {
                name: message.word.main_title5,
                data: message.word.main_title5,
              })
            }
            style={styles.button2}>
            <ImageBackground
              source={require('../bsapp/src/images/icon5.png')}
              style={styles.buttonIcon5}>
              <Text style={styles.buttonText}>{message.word.main_title5}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.item5}></View>
      </ImageBackground>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function PushScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Seonoh Detail Screen</Text>
      <Button
        title="Go Home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function NotiScreen() {
  return (
    <WebView
      source={{uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601'}}
      style={{marginTop: 50}}
    />
  );
}
function RuleScreen() {
  return (
    <WebView
      source={{uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401'}}
      style={{marginTop: 50}}
    />
  );
}

function MenuScreen() {
  return (
    <WebView
      source={{
        uri: 'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403',
      }}
      style={{marginTop: 50}}
    />
  );
}

function InquireisScreen({route, navigation}) {
  const {data} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{JSON.stringify(data)}</Text>
      <Button
        title="Go Home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1200);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: 'Overview'}}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Push"
          component={PushScreen}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Rule"
          component={RuleScreen}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Noti"
          component={NotiScreen}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Inquireis"
          component={InquireisScreen}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  item1: {
    top: '10%',
    width: '100%',
    height: '10%',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
  },
  item2: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item3: {
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'skyblue',
  },
  item4: {
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'skyblue',
  },
  item5: {
    width: '100%',
    height: '25%',
  },
  buttonEng: {
    width: '13%',
    height: '25%',
    marginRight: '2%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'white',
  },
  buttonKor: {
    width: '13%',
    height: '25%',
    marginRight: '2%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: '#ffffff',
  },
  buttonEngT: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '600',
  },
  buttonKorT: {
    color: '#000000',
    fontSize: 9,
    fontWeight: '600',
  },
  title: {
    fontSize: 25,
    fontStyle: 'normal',
    color: 'white',
  },
  title2: {
    fontSize: 12,
    fontStyle: 'normal',
    color: 'white',
  },
  button1: {
    margin: '2%',
    width: '46%',
    height: '92%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button2: {
    margin: '2%',
    width: '29%',
    height: '92%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    top: '65%',
    width: 200,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonIcon1: {
    width: 50,
    height: 60,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon2: {
    width: 50,
    height: 60,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon3: {
    width: 50,
    height: 60,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon4: {
    width: 50,
    height: 60,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon5: {
    width: 50,
    height: 60,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
