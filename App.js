// In App.js in a new project
import React, {useEffect} from 'react';
import {
  Button,
  Image,
  Switch,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  Linking,
} from 'react-native';
import {WebView} from 'react-native-webview';
import langData from '../bsapp/src/lang/config.json';
import notiData from '../bsapp/src/lang/noti.json';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

const DATA = notiData.DATA;

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
              navigation.navigate('Push', {
                name: message.word.main_title1,
                data: message.word,
              })
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
                data: message.word,
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

function PushScreen({route, navigation}) {
  const renderItem = ({item}) => <Item title={item.title} text={item.text} />;

  //언어데이터
  const {data} = route.params;
  //토글스위치
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  //flatlist
  const Item = ({title, text}) => {
    const [shouldShow, setShouldShow] = React.useState(false);

    const toggle = {
      style: stylesPush.notiBox_1,
    };

    const [slide, setSlide] = React.useState(toggle);

    const toggleShow = () => {
      if (shouldShow) {
        setShouldShow(!shouldShow),
          setSlide({
            style: stylesPush.notiBox_1,
            carrot: '^',
          });
      } else {
        setShouldShow(!shouldShow),
          setSlide({
            style: stylesPush.notiBox_2,
          });
      }
    };

    return (
      <View style={slide.style}>
        <Text style={stylesPush.title} onPress={() => toggleShow()}>
          {title}
        </Text>
        {shouldShow ? (
          <ScrollView style={stylesPush.scrollView}>
            <Text style={stylesPush.text}>{text}</Text>
          </ScrollView>
        ) : null}
      </View>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={stylesPush.item1}>
        <Text style={stylesPush.item1_t1}>{data.sub_page1_t1}</Text>
        <Switch
          style={stylesPush.item1_swtich}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={stylesPush.item2}>
        <Text style={stylesPush.item2_t1}>{data.sub_page1_t2}</Text>
      </View>
      <View style={stylesPush.item3}>
        <SafeAreaView style={stylesPush.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
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
  const {name, data} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      {/* 어플리케이션 안내 및 알림 수신 방법 */}
      <View style={[{width: '90%', height: '12%'}]}>
        <Text style={stylesInquries.title1}>{data.sub_page5_t1}</Text>
      </View>
      {/* 본어플.. */}
      <View style={[{width: '90%', height: '12%'}]}>
        <Text style={stylesInquries.title1_t1}>{data.sub_page5_t1_t1}</Text>
      </View>
      {/* push 알림을... */}
      <View style={[{width: '90%', height: '12%'}]}>
        <Text style={stylesInquries.title1_t2}>{data.sub_page5_t1_t2}</Text>
      </View>
      {/* 이용방법문의 */}
      <View style={[{width: '90%', height: '8%'}]}>
        <Text style={stylesInquries.title2}>{data.sub_page4_t1}</Text>
      </View>

      {/* 원생게시판바로가기 */}
      <View
        style={[
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            height: '60%',
          },
        ]}>
        <View style={[{width: '90%'}]}>
          <Button
            style={stylesInquries.title2_b1}
            title={data.sub_page4_b1}
            onPress={() => {
              Linking.openURL('https://dorm.pusan.ac.kr/');
            }}
          />
        </View>
        <View style={[{width: '90%'}]}>
          <Text style={stylesInquries.title2_t1}>{data.sub_page4_b1_t}</Text>
        </View>

        {/* 현제 거주중 */}
        <View style={[{width: '90%', marginTop: '5%'}]}>
          <Button
            style={stylesInquries.title2_b2}
            title={data.sub_page4_b2}
            onPress={() => {
              Linking.openURL('https://dorm.pusan.ac.kr/');
            }}
          />
        </View>
        {/* 현재 거주중X */}
        <View style={[{width: '90%'}]}>
          <Text style={stylesInquries.title2_t2}>{data.sub_page4_b2_t}</Text>
        </View>

        {/* 생활원 전화문의 */}
        <View style={[{width: '90%', marginTop: '5%'}]}>
          <Button
            style={stylesInquries.title2_b3}
            title={data.sub_page4_b3}
            onPress={() => {
              Linking.openURL(`tel:051-510-7827`);
            }}
          />
        </View>
        {/* 행정실 운영시간 */}
        <View style={[{width: '90%'}]}>
          <Text style={stylesInquries.title2_t3}>{data.sub_page4_b3_t}</Text>
        </View>
      </View>
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

const stylesPush = StyleSheet.create({
  item1: {
    width: '98%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  item1_swtich: {
    padding: 5,
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
  },
  item1_t1: {
    fontSize: 20,
    padding: 5,
    color: '#000000',
    fontWeight: '600',
  },
  item2: {
    width: '98%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  item2_t1: {
    top: 15,
    fontSize: 20,
    padding: 5,
    color: '#000000',
    fontWeight: '600',
  },
  item3: {
    width: '100%',
    height: '84%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderWidth: 1,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 0,
  },

  notiBox_1: {
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    height: 50,
  },
  notiBox_2: {
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    height: 300,
  },
  title: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '500',
  },
  text: {
    marginTop: 10,
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
    backgroundColor: '#ffffff',
  },
});

const stylesInquries = StyleSheet.create({
  title1: {
    marginTop: '5%',
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
  },
  title1_t1: {
    marginLeft: '5%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  title1_t2: {
    marginLeft: '5%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  title2: {
    fontSize: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    color: '#000000',
    fontWeight: '600',
  },
  title2_b1: {
    width: '90%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  title2_t1: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  title2_b2: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  title2_t2: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  title2_b3: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  title2_t3: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
});

export default App;
