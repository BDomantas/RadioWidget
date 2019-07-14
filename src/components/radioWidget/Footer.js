import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ name, title }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{name ? title : null} </Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderTopColor: '#4C505C',
    borderTopWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#22222B',
    paddingBottom: 20,
    paddingTop: 15,
  },
  title: {
    fontWeight: 'bold',
    color: '#EDAD61',
  },
  name: {
    color: '#9CA6B8',
  },
});

export default Footer;
