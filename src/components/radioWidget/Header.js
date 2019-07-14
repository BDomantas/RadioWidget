import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = ({ onBack, onSwitch }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.iconButtons} onPress={onBack}>
        <Image
          source={require('res/back-arrow.png')}
          style={styles.iconImages}
        />
      </TouchableOpacity>
      <Text style={styles.title}>STATIONS</Text>
      <TouchableOpacity
        style={[styles.iconButtons, { alignItems: 'flex-end' }]}
        onPress={onSwitch}
      >
        <Image source={require('res/switch.png')} style={styles.iconImages} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EDAD60',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  iconButtons: {
    alignItems: 'flex-start',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  iconImages: {
    flex: 1,
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default Header;
