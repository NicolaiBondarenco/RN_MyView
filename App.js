import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BarButtons} from './src/component/BarButtons';

const home = require('./src/assets/home.png');
const notifications = require('./src/assets/bell.png');
const search = require('./src/assets/search.png');
const settings = require('./src/assets/settings.png');
const logout = require('./src/assets/logout.png');
const menu = require('./src/assets/menu.png');
const close = require('./src/assets/close.png');
const userBond = require('./src/assets/userBond.jpg');

export const App = () => {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeBtnOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={userBond} />
        <Text style={styles.title}>Nicolai Bondarenco</Text>
        <TouchableOpacity>
          <Text style={styles.profile}>View Profile</Text>
        </TouchableOpacity>
        <View style={{marginBottom: 50, marginTop: 50}}>
          <BarButtons
            current={currentTab}
            setCurrentTab={title => setCurrentTab(title)}
            image={home}
            title={'Home'}
          />
          <BarButtons
            current={currentTab}
            setCurrentTab={title => setCurrentTab(title)}
            image={notifications}
            title={'Bell'}
          />
          <BarButtons
            current={currentTab}
            setCurrentTab={title => setCurrentTab(title)}
            image={search}
            title={'Search'}
          />
          <BarButtons
            current={currentTab}
            setCurrentTab={title => setCurrentTab(title)}
            image={settings}
            title={'Settings'}
          />
        </View>
        <View>
          <BarButtons
            current={currentTab}
            setCurrentTab={title => setCurrentTab(title)}
            image={logout}
            title={'LogOut'}
          />
        </View>
      </View>
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: '#fff',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: showMenu ? 15 : 0,
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.9,
              duration: 300,
              useNativeDriver: true,
            }).start();
            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 210,
              duration: 300,
              useNativeDriver: true,
            }).start();
            setShowMenu(!showMenu);
          }}
        >
          <Image
            source={showMenu ? close : menu}
            style={{height: 40, width: 40}}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#000',
          }}
        >
          {currentTab}
        </Text>
        <Image
          source={userBond}
          style={{
            height: 300,
            width: '100%',
            marginTop: 15,
            marginBottom: 15,
            borderRadius: 15,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#000',
            marginBottom: 5,
          }}
        >
          Nicolai Bondarenco
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#696969',
          }}
        >
          Front-End developer ReactJS, React-Native
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
  },
  wrapper: {
    padding: 20,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  profile: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
});
