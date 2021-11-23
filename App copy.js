import React, {Component, useState} from 'react';
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

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {WebView} from 'react-native-webview';
import langData from '../bsapp/src/lang/config.json';

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Seonoh Detail Screen</Text>
        <Button
          title="Go Home screen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class PushScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Seonoh Detail Screen</Text>
        <Button
          title="Go Home screen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class NotiScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601'}}
        style={{marginTop: 50}}
      />
    );
  }
}
class RuleScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401'}}
        style={{marginTop: 50}}
      />
    );
  }
}

class MenuScreen extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403',
        }}
        style={{marginTop: 50}}
      />
    );
  }
}

class InquireisScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Seonoh Detail Screen</Text>
        <Button
          title="Go Home screen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class HomeScreen extends Component {
  // state = {
  //   count: 0,
  // };

  // onPress = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  state = {
    lang: 0,
    word: langData.kor,
    style1: styles.buttonEng,
    style2: styles.buttonKor,
    style1T: styles.buttonEngT,
    style2T: styles.buttonKorT,
  };

  setKor = () => {
    this.setState({
      lang: 0,
      word: langData.kor,
      style1: styles.buttonEng,
      style2: styles.buttonKor,
      style1T: styles.buttonEngT,
      style2T: styles.buttonKorT,
    });
  };
  setEng = () => {
    this.setState({
      lang: 1,
      word: langData.eng,
      style1: styles.buttonKor,
      style2: styles.buttonEng,
      style1T: styles.buttonKorT,
      style2T: styles.buttonEngT,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../bsapp/src/images/main_bg.png')}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.item1}>
            <TouchableHighlight onPress={this.setEng} style={this.state.style1}>
              <Text style={this.state.style1T}>ENG</Text>
            </TouchableHighlight>
            <TouchableOpacity onPress={this.setKor} style={this.state.style2}>
              <Text style={this.state.style2T}>한국어</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item2}>
            <Text style={styles.title}>부산대학교 대학생활원</Text>
            <Text style={styles.title2}>
              PUSAN NATIONAL UNIVERSITY DORMITORY
            </Text>
          </View>

          <View style={styles.item3}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Push')}
              style={styles.button1}>
              <ImageBackground
                source={require('../bsapp/src/images/icon1.png')}
                style={styles.buttonIcon1}>
                <Text style={styles.buttonText}>
                  {this.state.word.main_title1}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu')}
              style={styles.button1}>
              <ImageBackground
                source={require('../bsapp/src/images/icon2.png')}
                style={styles.buttonIcon2}>
                <Text style={styles.buttonText}>
                  {this.state.word.main_title2}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.item4}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Noti')}
              style={styles.button2}>
              <ImageBackground
                source={require('../bsapp/src/images/icon3.png')}
                style={styles.buttonIcon3}>
                <Text style={styles.buttonText}>
                  {this.state.word.main_title3}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rule')}
              style={styles.button2}>
              <ImageBackground
                source={require('../bsapp/src/images/icon4.png')}
                style={styles.buttonIcon4}>
                <Text style={styles.buttonText}>
                  {this.state.word.main_title4}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Inquireis')}
              style={styles.button2}>
              <ImageBackground
                source={require('../bsapp/src/images/icon5.png')}
                style={styles.buttonIcon5}>
                <Text style={styles.buttonText}>
                  {this.state.word.main_title5}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.item5}></View>
        </ImageBackground>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Push: PushScreen,
    Menu: MenuScreen,
    Noti: NotiScreen,
    Rule: RuleScreen,
    Inquireis: InquireisScreen,
  },
  {
    initialRouteName: 'Home',
  },
);
let styles = StyleSheet.create({
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

export default createAppContainer(AppNavigator);
