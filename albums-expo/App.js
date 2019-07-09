import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/componentes/header.js';
import AlbumList from './src/componentes/albumList.js';

export default function App() {
  return (
  //Todos los elementos que se importen tienen que estar envueltos por una View
  <View style={ {flex: 1} }>
    <Header textoHeader={'Albums!'}/>
	<AlbumList />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
