import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card.js'
import CardSection from './cardSection.js'
import Boton from './Boton.js'

export default function DetalleAlbum ({ album }) {
	
	//Refactor- Para acceder de forma más directa a las características de cada objeto
	const { title, artist, thumbnail_image, image, url } = album;
	
	const { 
		headerContentStyle,
		thumbnailStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		artworkStyle
		} = styles;
	
	return (
		<Card>
		
			<CardSection>			
			<View style={ thumbnailContainerStyle }>
			<Image 
				style= { thumbnailStyle }
				source={ { uri: thumbnail_image } }				
			/>
			</View>
			
			<View style={headerContentStyle}>
			<Text style={headerTextStyle}>{title}</Text>
			<Text>{artist}</Text>
			</View>			
			</CardSection>		
			
			<CardSection>
			<Image 
				style= { artworkStyle }
				source={ { uri: image } }				
			/>
			</CardSection>
			
			<CardSection>
			<Boton onPress={ () => Linking.openURL(url)}>
				Comprar
			</Boton>
			</CardSection>
			
		</Card>
	);
	
}

const styles = {
	
	headerContentStyle: {
		
		flexDirection: 'column',
		justifyContent: 'space-around',
		
	},
	
	headerTextStyle: {
		
		fontSize: 18
		
	},
	
	thumbnailStyle: {
		
		height: 50,
		width: 50
		
	},
	
	thumbnailContainerStyle: {
		
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
		
	},
	
	artworkStyle: {
		
		height: 300,
		flex: 1,
		width: null
		
	}
	
}