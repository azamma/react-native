import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Boton ( { onPress, children } ) {
	
	const { botonStyle, textStyle } = styles;
	
	return (
	<TouchableOpacity onPress={onPress} style={botonStyle}>
		<Text style={textStyle}>
		{children}
		</Text>
	</TouchableOpacity>
	);
	
}

const styles = {
	
	textStyle: {
		
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
		
	},
	
	botonStyle: {
		
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
		
	}
	
}