import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export const gopayFeature = (props) => {
	return (
		<View style={styles.gopayBottomMenu} >
			<Image style={styles.gopayBottomIcon} source={props.icon} />
			<Text style={ styles.gopayBottomText }>{props.text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	gopayBottomMenu: {
		flex: 1,
		alignItems: 'center'
	},
	gopayBottomIcon: {
		width: 36,
		height: 36
	},
	gopayBottomText: {
		fontSize: 13,
		marginTop: 15,
		fontWeight: 'bold',
		color: 'white'
	}
})

// export default gopayFeature