import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';

export const BarButtons = ({title, image, current, setCurrentTab}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (title === 'LogOut') return;
        setCurrentTab(title);
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          backgroundColor: current === title ? '#fff' : 'transparent',
          paddingVertical: 5,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Image
          style={{
            height: 25,
            width: 25,
            marginRight: 10,
            tintColor: current === title ? '#5359D1' : '#fff',
          }}
          source={image}
        />
        <Text
          style={{
            fontSize: 14,
            color: current === title ? '#5359D1' : '#fff',
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.4,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  img: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
});
