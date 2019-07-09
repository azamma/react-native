import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
	
  return (
    <View style={styles.container}>
	
      <Text style={styles.texto}>{props.textoHeader}</Text>
	  
    </View>	
  );
  
}

const styles = StyleSheet.create({
	
  container: {
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
	height: 80,
	paddingTop: 15,
	//Así se genera la sombra para Android
	elevation: 4,
	position: 'relative'
  },
  
  texto: {
	  fontSize: 20,
	  color: '#ffffff'
  }
  
});
