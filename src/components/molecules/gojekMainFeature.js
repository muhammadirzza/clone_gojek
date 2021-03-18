import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export const gojekMainFeature = (props) => {
	return (
		<View style={styles.gojekMenuWrapper} >
			<View style={styles.gojekMenuIcon}>
				<Image source={props.icon} />
			</View>
			<Text style={styles.gojekMenuText}>{props.text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
    gojekMenuWrapper: {
			alignItems: 'center',
			width: '25%'
    },
		gojekMenuIcon: {
			width: 58,
			height: 58,
			borderWidth: 1,
			borderRadius: 18,
			justifyContent: 'center',
			alignItems: 'center',
			borderColor: '#EFEFEF'
		},
		gojekMenuText: {
			fontSize: 11,
			fontWeight: 'bold',
			textAlign: 'center',
			marginTop: 6
		},
})

// export default gojekMainFeature;